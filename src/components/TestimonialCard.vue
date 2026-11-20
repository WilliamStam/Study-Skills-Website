<script lang="ts" setup>
import type {Testimonial} from '@/site';

defineProps<{
    testimonial: Testimonial;
}>();
</script>

<template>
    <figure class="testimonial">
        <font-awesome-icon class="testimonial-mark" icon="fa-solid fa-quote-left"/>
        <blockquote>{{ testimonial.quote }}</blockquote>
        <figcaption>{{ testimonial.name }}</figcaption>
    </figure>
</template>
