<script lang="ts" setup>
withDefaults(defineProps<{
    image: string;
    alt?: string;
    /** Puts the image on the right (on wide screens; it always comes first on phones) */
    imageRight?: boolean;
    /** Crops the image to a circle (e.g. a headshot) */
    round?: boolean;
}>(), {
    alt: '',
    imageRight: false,
    round: false,
});
</script>

<template>
    <section class="section">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div :class="{'md:order-2': imageRight}" class="col-12 md:col-6">
                    <img :alt="alt" :class="round ? 'media-image-round' : 'media-image'" :src="image" loading="lazy"/>
                    <slot name="below-image"/>
                </div>
                <div class="col-12 md:col-6">
                    <slot/>
                </div>
            </div>
        </div>
    </section>
</template>
