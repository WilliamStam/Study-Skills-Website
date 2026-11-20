<script lang="ts" setup>
export interface Feature {
    icon: string;
    title: string;
    text: string;
}

defineProps<{
    features: Feature[];
}>();
</script>

<template>
    <div class="row g-5">
        <div v-for="feature in features" :key="feature.title" class="col-12 sm:col-6 lg:col-4 feature">
            <font-awesome-icon :icon="feature.icon" class="feature-icon"/>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-text">{{ feature.text }}</p>
        </div>
    </div>
</template>
