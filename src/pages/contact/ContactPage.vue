<script lang="ts" setup>
import {reactive, useTemplateRef} from 'vue';
import FormStatus from '@/components/FormStatus.vue';
import {useWeb3Form} from '@/composables/useWeb3Form';
import {site} from '@/site';

const form = reactive({name: '', email: '', phone: '', message: '', botcheck: false});
const {accessKey, captchaToken, status, errorMessage, validated, submit} =
    useWeb3Form(useTemplateRef<HTMLElement>('captcha'));

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&t=m&z=10&output=embed&iwloc=near`;

async function onSubmit(event: Event) {
    const sent = await submit(event.target as HTMLFormElement, {
        subject: `New message from ${form.name}`,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        botcheck: form.botcheck,
    });
    if (sent) {
        Object.assign(form, {name: '', email: '', phone: '', message: '', botcheck: false});
    }
}
</script>

<template>
    <section class="section page-top">
        <div class="container">
            <h1 class="visually-hidden">Contact Us</h1>
            <div class="row g-5">
                <div class="col-12 md:col-6">
                    <h2 class="contact-heading">Phone Us</h2>
                    <a :href="site.phoneHref" class="contact-item">
                        <font-awesome-icon icon="fa-solid fa-phone"/>
                        {{ site.phone }}
                    </a>

                    <h2 class="contact-heading">Email Us</h2>
                    <a :href="`mailto:${site.email}`" class="contact-item">
                        <font-awesome-icon icon="fa-regular fa-envelope"/>
                        {{ site.email }}
                    </a>

                    <h2 class="contact-heading">Visit Us</h2>
                    <p class="contact-item">
                        <font-awesome-icon icon="fa-solid fa-location-dot"/>
                        {{ site.address }}
                    </p>

                    <h2 class="contact-heading">Follow Us</h2>
                    <div class="social-links social-links-accent">
                        <a :href="site.facebook" aria-label="Facebook" rel="noopener" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-facebook-f"/>
                        </a>
                        <a :href="site.instagram" aria-label="Instagram" rel="noopener" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-instagram"/>
                        </a>
                    </div>
                </div>

                <div class="col-12 md:col-6">
                    <p class="section-label">Please complete the form and we will be in contact asap.</p>

                    <form
                        :class="{'was-validated': validated}"
                        class="form-card"
                        novalidate
                        @submit.prevent="onSubmit"
                    >
                        <FormStatus :access-key="accessKey" :error-message="errorMessage" :status="status"
                                    success-message="Thanks! Your message has been sent."/>

                        <div class="mb-3">
                            <label class="visually-hidden" for="contact-name">Name</label>
                            <input id="contact-name" v-model.trim="form.name" autocomplete="name"
                                   class="form-control" placeholder="Name" required type="text"/>
                            <div class="invalid-feedback">Please enter your name.</div>
                        </div>
                        <div class="mb-3">
                            <label class="visually-hidden" for="contact-email">Email</label>
                            <input id="contact-email" v-model.trim="form.email" autocomplete="email"
                                   class="form-control" placeholder="Email" required type="email"/>
                            <div class="invalid-feedback">Please enter a valid email address.</div>
                        </div>
                        <div class="mb-3">
                            <label class="visually-hidden" for="contact-phone">Phone</label>
                            <input id="contact-phone" v-model.trim="form.phone" autocomplete="tel"
                                   class="form-control" placeholder="Phone" type="tel"/>
                        </div>
                        <div class="mb-3">
                            <label class="visually-hidden" for="contact-message">Message</label>
                            <textarea id="contact-message" v-model.trim="form.message" class="form-control"
                                      placeholder="Message" required rows="5"></textarea>
                            <div class="invalid-feedback">Please enter a message.</div>
                        </div>

                        <!-- Honeypot: hidden from people, bots fill it in and Web3Forms drops the submission -->
                        <input v-model="form.botcheck" aria-hidden="true" class="d-none" name="botcheck"
                               tabindex="-1" type="checkbox"/>

                        <div class="mb-3">
                            <div ref="captcha"></div>
                            <div v-if="validated && !captchaToken" class="fg-danger small mt-1">
                                Please complete the captcha.
                            </div>
                        </div>

                        <button :disabled="status === 'sending' || !accessKey" class="btn-brand" type="submit">
                            {{ status === 'sending' ? 'Sending…' : 'Send' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <iframe
        :src="mapUrl"
        :title="site.address"
        class="contact-map"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
</template>
