<script lang="ts" setup>
import type {FormStatus} from '@/composables/useWeb3Form';

defineProps<{
    status: FormStatus;
    errorMessage: string;
    accessKey: string;
    successMessage: string;
}>();
</script>

<template>
    <div v-if="!accessKey" class="alert theme-warning" role="alert">
        The form isn't configured: <code>VITE_WEB3FORMS_ACCESS_KEY</code> is not set.
    </div>
    <div v-if="status === 'success'" class="alert theme-success" role="status">
        {{ successMessage }}
    </div>
    <div v-else-if="status === 'error'" class="alert theme-danger" role="alert">
        Sorry, your message couldn't be sent. {{ errorMessage }}
    </div>
</template>
