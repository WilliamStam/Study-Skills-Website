<script lang="ts" setup>
import PageHero from '@/components/PageHero.vue';
import MediaSection from '@/components/MediaSection.vue';
import TestimonialCard from '@/components/TestimonialCard.vue';
import StudySmarterCta from '@/components/StudySmarterCta.vue';
import {testimonials} from '@/site';
import heroImage from '@/assets/images/hero-about.jpg';
import heroImageMobile from '@/assets/images/hero-about-mobile.webp';
import abigailImage from '@/assets/images/abigail.png';

// The About page showed the two reviews that mention Abigail's lessons directly
const aboutTestimonials = testimonials.slice(0, 2);
</script>

<template>
    <PageHero :image="heroImage" :mobile-image="heroImageMobile" mobile-position="bottom right"
              position="center left">
        <h1 class="hero-title">Meet the Study Skills Expert – Abigail Swanepoel</h1>
        <p class="hero-subtitle">23 years of teaching experience</p>
        <router-link :to="{hash: '#more'}" class="btn-brand">Read More</router-link>
    </PageHero>

    <section id="more" class="section">
        <div class="container">
            <h2 class="section-title">About The Study Skills Expert – Our Mission &amp; Vision</h2>
            <h3 class="section-label">Helping Students Study Smarter, Not Harder!</h3>
            <p class="lead-text">
                At The Study Skills Expert, we believe that every student has the potential to succeed - if they have
                the right tools. Our mission is to teach students how to learn, not just what to learn, by using
                science-backed study strategies.
            </p>
            <h3 class="section-label">Mission Statement</h3>
            <ul>
                <li>Reduce <strong>test anxiety and study stress</strong>.</li>
                <li>Improve <strong>memory retention and recall</strong>.</li>
                <li>Teach <strong>fun, engaging, and effective study techniques</strong>.</li>
                <li>Empower students with <strong>lifelong learning skills</strong>.</li>
            </ul>
        </div>
    </section>

    <MediaSection :image="abigailImage" alt="Abigail Swanepoel" round>
        <template #below-image>
            <figure class="abigail-quote">
                <blockquote>
                    Every student learns differently. My goal is to help each child find their best way to learn - so
                    that studying becomes easier, stress-free, and even fun!
                </blockquote>
                <figcaption>- Abigail</figcaption>
            </figure>
        </template>

        <h2 class="section-title">Meet Abigail Swanepoel</h2>
        <h3 class="section-label">Meet Your Study Coach</h3>
        <p>
            With over <strong>23 years of teaching experience</strong>, Abigail Swanepoel has helped countless students
            <strong>overcome learning challenges, develop strong study skills, and build confidence in their academic
                abilities</strong>.
        </p>
        <h3 class="section-label">Expertise &amp; Background</h3>
        <ul>
            <li><strong>23 years of teaching experience</strong> in schools and private tutoring.</li>
            <li>Specializes in <strong>English and special needs education</strong> (Grade 4 – Grade 12).</li>
            <li>Passionate about <strong>helping students develop memory-boosting techniques</strong>.</li>
            <li>Uses <strong>multi-sensory learning methods</strong> to engage both sides of the brain.</li>
        </ul>
    </MediaSection>

    <section class="section">
        <div class="container">
            <div class="row g-4">
                <div v-for="testimonial in aboutTestimonials" :key="testimonial.name" class="col-12 md:col-6">
                    <TestimonialCard :testimonial="testimonial" class="h-100"/>
                </div>
            </div>
        </div>
    </section>

    <StudySmarterCta/>
</template>
