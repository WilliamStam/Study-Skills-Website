import {onBeforeUnmount, onMounted, ref, type Ref} from 'vue';

// hCaptcha's global, once its script has loaded (only the parts used here)
declare global {
    interface Window {
        hcaptcha?: {
            render(container: HTMLElement, options: Record<string, unknown>): string;
            reset(widgetId?: string): void;
            remove(widgetId?: string): void;
        };
    }
}

// Injected at build time from the WEB3FORMS_ACCESS_KEY repo secret (see deploy.yml), or from
// .env.local in development
export const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

// Web3Forms' shared hCaptcha site key (free plan) - it validates the token on their side
const HCAPTCHA_SITE_KEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
const HCAPTCHA_SCRIPT = 'https://js.hcaptcha.com/1/api.js?render=explicit&recaptchacompat=off';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

/** Loads the hCaptcha script once per page load, however often a form page is visited. */
function loadHCaptcha(): Promise<void> {
    if (window.hcaptcha) {
        return Promise.resolve();
    }
    let script = document.querySelector<HTMLScriptElement>(`script[src="${HCAPTCHA_SCRIPT}"]`);
    if (!script) {
        script = document.createElement('script');
        script.src = HCAPTCHA_SCRIPT;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }
    return new Promise((resolve, reject) => {
        script!.addEventListener('load', () => resolve(), {once: true});
        script!.addEventListener('error', () => reject(new Error('hCaptcha failed to load')), {once: true});
    });
}

/**
 * Sends a form to Web3Forms, guarded by an hCaptcha widget rendered into `captchaEl`.
 *
 * Call `submit(formElement, fields)` from the form's submit handler; it checks the browser's
 * validation and the captcha first, and resolves to true once the message has been sent.
 */
export function useWeb3Form(captchaEl: Readonly<Ref<HTMLElement | null>>) {
    const captchaToken = ref('');
    const status = ref<FormStatus>('idle');
    const errorMessage = ref('');
    const validated = ref(false);

    let widgetId: string | undefined;

    onMounted(async () => {
        try {
            await loadHCaptcha();
        } catch {
            errorMessage.value = 'The captcha could not be loaded. Please check your connection and refresh the page.';
            status.value = 'error';
            return;
        }
        if (!captchaEl.value || !window.hcaptcha) {
            return;
        }
        widgetId = window.hcaptcha.render(captchaEl.value, {
            sitekey: HCAPTCHA_SITE_KEY,
            theme: 'light',
            callback: (token: string) => (captchaToken.value = token),
            'expired-callback': () => (captchaToken.value = ''),
            'error-callback': () => (captchaToken.value = ''),
        });
    });

    onBeforeUnmount(() => {
        if (widgetId !== undefined) {
            window.hcaptcha?.remove(widgetId);
        }
    });

    function resetCaptcha() {
        captchaToken.value = '';
        window.hcaptcha?.reset(widgetId);
    }

    async function submit(form: HTMLFormElement, fields: Record<string, unknown>): Promise<boolean> {
        validated.value = true;
        if (!form.checkValidity() || !captchaToken.value) {
            return false;
        }

        status.value = 'sending';
        errorMessage.value = '';
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', Accept: 'application/json'},
                body: JSON.stringify({
                    access_key: accessKey,
                    from_name: 'Study Skills website',
                    ...fields,
                    'h-captcha-response': captchaToken.value,
                }),
            });
            const result = await response.json();
            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Something went wrong.');
            }
            status.value = 'success';
            validated.value = false;
            return true;
        } catch (e) {
            status.value = 'error';
            errorMessage.value = e instanceof Error ? e.message : 'Something went wrong.';
            return false;
        } finally {
            // A captcha token can only be used once
            resetCaptcha();
        }
    }

    return {accessKey, captchaToken, status, errorMessage, validated, submit};
}
