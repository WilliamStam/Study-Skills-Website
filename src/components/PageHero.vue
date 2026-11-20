<script lang="ts" setup>
import {computed} from 'vue';

const props = withDefaults(defineProps<{
    /** Wide background photo; the subject sits on the right so the text stays readable */
    image: string;
    /** Portrait crop for phones; the subject sits at the bottom so the text goes at the top */
    mobileImage: string;
    /** CSS background-position on wide screens */
    position?: string;
    /** CSS background-position on phones */
    mobilePosition?: string;
}>(), {
    position: 'top center',
    mobilePosition: 'bottom center',
});

const style = computed(() => ({
    '--hero-image': `url("${props.image}")`,
    '--hero-image-mobile': `url("${props.mobileImage}")`,
    '--hero-position': props.position,
    '--hero-position-mobile': props.mobilePosition,
}));
</script>

<template>
    <section :style="style" class="page-hero">
        <div class="container">
            <div class="page-hero-content">
                <slot/>
            </div>
        </div>
    </section>
</template>
