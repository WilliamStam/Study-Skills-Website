<script lang="ts" setup>
import PageHero from '@/components/PageHero.vue';
import MediaSection from '@/components/MediaSection.vue';
import FeatureGrid, {type Feature} from '@/components/FeatureGrid.vue';
import TestimonialCard from '@/components/TestimonialCard.vue';
import StudySmarterCta from '@/components/StudySmarterCta.vue';
import {testimonials} from '@/site';
import heroImage from '@/assets/images/hero-home.jpg';
import heroImageMobile from '@/assets/images/hero-home-mobile.webp';
import anxietyImage from '@/assets/images/study-anxiety.jpg';
import achievedImage from '@/assets/images/study-achieved.jpg';
import tutoringImage from '@/assets/images/tutoring-grade-0-12.jpg';

const benefits: Feature[] = [
    {
        icon: 'fa-regular fa-face-grin-beam',
        title: 'Reduce Test Anxiety',
        text: 'Eliminate stress with proven techniques that help students feel confident and in control during tests and exams.',
    },
    {
        icon: 'fa-regular fa-lightbulb',
        title: 'Boost Memory & Retention',
        text: 'Use brain-based strategies like mnemonics, visualization, and association to make learning stick effortlessly.',
    },
    {
        icon: 'fa-solid fa-paintbrush',
        title: 'Fun & Engaging Study Methods',
        text: 'Say goodbye to boring study sessions! We use color, music, and storytelling to make learning enjoyable and effective.',
    },
    {
        icon: 'fa-solid fa-brain',
        title: 'Whole-Brain Learning',
        text: 'Activate both sides of the brain for deeper understanding, better recall, and improved problem-solving skills.',
    },
    {
        icon: 'fa-regular fa-clock',
        title: 'Master Time Management',
        text: 'Learn how to create structured study plans and break down big tasks, eliminating last-minute cramming.',
    },
    {
        icon: 'fa-solid fa-trophy',
        title: 'Exam Success Strategies',
        text: 'Equip students with smart test-taking techniques to maximize marks and tackle any question with confidence.',
    },
];
</script>

<template>
    <PageHero :image="heroImage" :mobile-image="heroImageMobile" mobile-position="bottom left">
        <p class="hero-eyebrow">Reduce Test Anxiety and Achieve Academic Success</p>
        <h1 class="hero-title">Master Study Skills &amp; Boost Confidence – Grades 0-12</h1>
        <p class="hero-subtitle">Fun, Brain-Based Study Techniques for Better Retention</p>
        <router-link :to="{name: 'sign-up'}" class="btn-brand">Enroll Today!</router-link>
    </PageHero>

    <MediaSection :image="anxietyImage" alt="Student feeling study anxiety">
        <h2 class="section-title">Helping Your Child Overcome Learning Challenges with Confidence</h2>
        <p>
            At Study Skills Expert, we help students excel with Anxiety Reduction Techniques, Improved Memory and
            Recall, and Interactive Learning Methods. By promoting Balanced Brain Engagement, we make learning
            enjoyable and effective, unlocking every child’s full potential.
        </p>
    </MediaSection>

    <MediaSection :image="achievedImage" alt="Happy student giving a thumbs up" image-right>
        <h2 class="section-title">Fun and Effective Study Techniques</h2>
        <p>
            The Learn2Remember Study Skills Course is designed to reduce stress and improve academic results through
            proven brain-based learning techniques. By addressing anxiety, enhancing memory and recall, and
            incorporating interactive methods that engage both sides of the brain, we create a fun, effective, and
            stress-free approach to learning.
        </p>
    </MediaSection>

    <section class="section">
        <div class="container">
            <h2 class="section-subtitle mb-5">Key Benefits of the Learn2Remember Study Skills Course</h2>
            <FeatureGrid :features="benefits"/>

            <div class="d-flex flex-wrap align-items-center gap-4 mt-5">
                <h2 class="section-subtitle mb-0">More info about the Learn2Remember Course</h2>
                <router-link :to="{name: 'course'}" class="btn-brand">Learn2Remember Course</router-link>
            </div>
        </div>
    </section>

    <MediaSection :image="tutoringImage" alt="Tutor helping a young student with homework">
        <h2 class="section-title">Personalized Tutoring for Grade 0 to 12</h2>
        <p>
            Unlock your child’s full potential with expert one-on-one and group tutoring designed to build confidence,
            improve understanding, and boost academic performance. Our tutoring covers Mathematics, Science,
            Languages, and more, with tailored learning plans to meet each student’s unique needs.
        </p>
        <ul class="list-highlight">
            <li>Experienced &amp; Dedicated Tutors</li>
            <li>In-Person Sessions Available</li>
            <li>Flexible Scheduling for Busy Families</li>
        </ul>
        <h3 class="section-subtitle">More info about Tutoring</h3>
        <router-link :to="{name: 'tutoring'}" class="btn-brand">Tutoring Grade 0 - 12</router-link>
    </MediaSection>

    <section class="section">
        <div class="container">
            <h2 class="section-subtitle mb-5">What Parents &amp; Students Say</h2>
            <div class="row g-4">
                <div v-for="testimonial in testimonials" :key="testimonial.name" class="col-12 md:col-6">
                    <TestimonialCard :testimonial="testimonial" class="h-100"/>
                </div>
            </div>
        </div>
    </section>

    <StudySmarterCta/>
</template>
