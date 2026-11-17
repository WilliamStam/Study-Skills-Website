/// <reference types="vite/client" />
declare module '*.vue' {
    import type {DefineComponent} from 'vue';
    
    const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>;
    export default component;
}

declare global {
    declare module '*.scss';
}

declare module 'vue' {
    export interface GlobalComponents {
        FontAwesomeIcon: typeof import('@fortawesome/vue-fontawesome')['FontAwesomeIcon'];
        'font-awesome-icon': typeof import('@fortawesome/vue-fontawesome')['FontAwesomeIcon'];
    }
}

export {};