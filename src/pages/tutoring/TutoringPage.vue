<script lang="ts" setup>
import PageHero from '@/components/PageHero.vue';
import MediaSection from '@/components/MediaSection.vue';
import FeatureGrid, {type Feature} from '@/components/FeatureGrid.vue';
import heroImage from '@/assets/images/hero-tutoring.jpg';
import heroImageMobile from '@/assets/images/hero-tutoring-mobile.jpg';
import oneOnOneImage from '@/assets/images/tutoring-one-on-one.jpg';
import groupImage from '@/assets/images/tutoring-group.jpg';

const phases = [
    {
        title: 'Foundation Phase (Grade 0-3)',
        subjects: ['Early Literacy & Numeracy', 'Reading & Phonics Support', 'Basic Mathematics & Thinking Skills'],
    },
    {
        title: 'Intermediate Phase (Grade 4-7)',
        subjects: ['Mathematics', 'Natural & Social Sciences', 'English & Afrikaans'],
    },
    {
        title: 'Senior Phase (Grade 8-12)',
        subjects: [
            'Mathematics (Core & Literacy)',
            'Physical Science & Life Science',
            'English & Afrikaans',
            'Accounting & Business Studies',
        ],
    },
];

const reasons: Feature[] = [
    {
        icon: 'fa-regular fa-clock',
        title: 'Flexible Learning',
        text: 'Online & In-Person sessions tailored to your child’s needs.',
    },
    {
        icon: 'fa-solid fa-graduation-cap',
        title: 'Expert Tutors',
        text: 'Experienced educators who specialize in various subjects.',
    },
    {
        icon: 'fa-solid fa-pencil',
        title: 'Personalized Approach',
        text: 'Customized lesson plans to ensure academic improvement.',
    },
];

const steps = [
    {title: 'Consultation', text: 'Discuss your child’s needs & learning goals.'},
    {title: 'Personalized Learning Plan', text: 'We create a tailored study plan.'},
    {title: 'Engaging Tutoring Sessions', text: 'One-on-one or group sessions to improve understanding.'},
    {title: 'Progress Tracking & Feedback', text: 'Regular reports to ensure consistent improvement.'},
];
</script>

<template>
    <PageHero :image="heroImage" :mobile-image="heroImageMobile" mobile-position="center center">
        <p class="hero-eyebrow">
            Personalized learning to help students build confidence, master concepts, and achieve academic success.
        </p>
        <h1 class="hero-title">Expert Tutoring for Grade 0 to Grade 12's</h1>
        <p class="hero-subtitle">Start today!</p>
        <router-link :to="{name: 'sign-up'}" class="btn-brand">Enroll Today!</router-link>
    </PageHero>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Tutoring Services – Grade 0 to 12</h2>
            <p class="mb-5">
                We believe that personalized attention is key to academic success. Our tutoring services are designed to
                cater to the unique learning styles and needs of each student, ensuring they grasp concepts thoroughly
                and build confidence in their abilities.
            </p>
            <div class="row g-5 align-items-center">
                <div class="col-12 md:col-6">
                    <template v-for="phase in phases" :key="phase.title">
                        <h3 class="section-label">{{ phase.title }}</h3>
                        <ul>
                            <li v-for="subject in phase.subjects" :key="subject">{{ subject }}</li>
                        </ul>
                    </template>
                </div>
                <div class="col-12 md:col-6">
                    <img :src="oneOnOneImage" alt="Tutoring grades 0 to 12" class="media-image" loading="lazy"/>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2 class="section-subtitle mb-5">Why Choose Our Tutoring?</h2>
            <FeatureGrid :features="reasons"/>
        </div>
    </section>

    <MediaSection :image="groupImage" alt="Group of students learning together">
        <h2 class="section-title">How It Works</h2>
        <ol class="steps">
            <li v-for="(step, index) in steps" :key="step.title">
                <strong>Step {{ index + 1 }}: {{ step.title }}</strong>
                {{ step.text }}
            </li>
        </ol>
    </MediaSection>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Give Your Child the Academic Boost They Deserve!</h2>
            <p class="section-label">Expert Tutoring for Grade 0 to 12 | Flexible Learning | Proven Results</p>
            <ul>
                <li>Personalized one-on-one &amp; group sessions</li>
                <li>Online &amp; in-person tutoring available</li>
                <li>Affordable packages with flexible scheduling</li>
            </ul>
            <p class="cta-prompt">Click Below to Get Started!</p>
            <router-link :to="{name: 'sign-up'}" class="btn-brand btn-brand-lg">Enroll Today!</router-link>
        </div>
    </section>
</template>
