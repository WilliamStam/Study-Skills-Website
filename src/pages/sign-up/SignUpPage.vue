<script lang="ts" setup>
import {reactive, useTemplateRef} from 'vue';
import PageHero from '@/components/PageHero.vue';
import FormStatus from '@/components/FormStatus.vue';
import {useWeb3Form} from '@/composables/useWeb3Form';
import heroImage from '@/assets/images/hero-sign-up.png';
import heroImageMobile from '@/assets/images/hero-sign-up-mobile.webp';

const interests = ['Tutoring', 'Study Skills Course', 'Both'];
const grades = [...Array.from({length: 13}, (_, grade) => String(grade)), 'Other'];

const emptyForm = () => ({
    interest: '',
    parentName: '',
    studentName: '',
    grade: '',
    email: '',
    phone: '',
    details: '',
    botcheck: false,
});

const form = reactive(emptyForm());
const {accessKey, captchaToken, status, errorMessage, validated, submit} =
    useWeb3Form(useTemplateRef<HTMLElement>('captcha'));

async function onSubmit(event: Event) {
    const sent = await submit(event.target as HTMLFormElement, {
        subject: `New sign-up (${form.interest}) from ${form.parentName}`,
        name: form.parentName,
        email: form.email,
        'Interested in': form.interest,
        'Parent / guardian name': form.parentName,
        'Student name': form.studentName,
        'Student grade': form.grade,
        phone: form.phone,
        message: form.details,
        botcheck: form.botcheck,
    });
    if (sent) {
        Object.assign(form, emptyForm());
    }
}
</script>

<template>
    <PageHero :image="heroImage" :mobile-image="heroImageMobile" mobile-position="top left">
        <h1 class="hero-title">Get Started</h1>
        <p class="hero-subtitle">Sign Up for the Learn2Remember Study Skills Course Today!</p>
    </PageHero>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Learn2Remember &amp; Personalized Tutoring</h2>
            <p>
                Learn2Remember is a proven study skills course designed to help students study smarter, retain
                information better, and reduce exam anxiety. Combined with our expert tutoring services for Grade 0 to
                12, we provide comprehensive academic support to help students reach their full potential.
            </p>
            <h3 class="section-label">Key Benefits</h3>
            <ul>
                <li><strong>Boost Memory &amp; Retention</strong> – Learn science-backed memory techniques.</li>
                <li><strong>Reduce Test Anxiety</strong> – Build confidence with stress-free learning strategies.</li>
                <li><strong>Master Time Management</strong> – Create study schedules that actually work.</li>
                <li><strong>Fun &amp; Engaging Study Methods</strong> – Using colors, music, and creative techniques.</li>
                <li><strong>Proven Test-Taking Strategies</strong> – Get higher marks with effective answering techniques.</li>
                <li>
                    <strong>Expert Tutoring for Grade 0 to 12</strong> – One-on-one &amp; group sessions covering
                    Mathematics, Science, Languages, and more!
                </li>
            </ul>
        </div>
    </section>

    <section id="enroll" class="section">
        <div class="container">
            <h2 class="section-title">Get Started – Enroll Now!</h2>
            <p class="section-label">Please complete the form and we will be in contact asap.</p>

            <form
                :class="{'was-validated': validated}"
                class="row g-3 sign-up-form"
                novalidate
                @submit.prevent="onSubmit"
            >
                <div class="col-12">
                    <FormStatus :access-key="accessKey" :error-message="errorMessage" :status="status"
                                success-message="Thanks for signing up! We'll be in contact soon."/>
                </div>

                <div class="col-12">
                    <label class="form-label" for="sign-up-interest">I'm interested in</label>
                    <select id="sign-up-interest" v-model="form.interest" class="form-control" required>
                        <option disabled value="">Select an Option</option>
                        <option v-for="interest in interests" :key="interest">{{ interest }}</option>
                    </select>
                    <div class="invalid-feedback">Please choose an option.</div>
                </div>
                <div class="col-12 md:col-6">
                    <label class="form-label" for="sign-up-parent">Parent / Guardian Name</label>
                    <input id="sign-up-parent" v-model.trim="form.parentName" autocomplete="name"
                           class="form-control" required type="text"/>
                    <div class="invalid-feedback">Please enter your name.</div>
                </div>
                <div class="col-12 md:col-6">
                    <label class="form-label" for="sign-up-student">Student Name</label>
                    <input id="sign-up-student" v-model.trim="form.studentName" class="form-control" type="text"/>
                </div>
                <div class="col-12 md:col-6">
                    <label class="form-label" for="sign-up-grade">Student Grade</label>
                    <select id="sign-up-grade" v-model="form.grade" class="form-control">
                        <option value="">Select a Grade</option>
                        <option v-for="grade in grades" :key="grade" :value="grade">
                            {{ grade === 'Other' ? grade : `Grade ${grade}` }}
                        </option>
                    </select>
                </div>
                <div class="col-12 md:col-6">
                    <label class="form-label" for="sign-up-email">Email</label>
                    <input id="sign-up-email" v-model.trim="form.email" autocomplete="email" class="form-control"
                           required type="email"/>
                    <div class="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div class="col-12 md:col-6">
                    <label class="form-label" for="sign-up-phone">Phone</label>
                    <input id="sign-up-phone" v-model.trim="form.phone" autocomplete="tel" class="form-control"
                           type="tel"/>
                </div>
                <div class="col-12">
                    <label class="form-label" for="sign-up-details">Details</label>
                    <textarea id="sign-up-details" v-model.trim="form.details" class="form-control"
                              rows="5"></textarea>
                </div>

                <!-- Honeypot: hidden from people, bots fill it in and Web3Forms drops the submission -->
                <input v-model="form.botcheck" aria-hidden="true" class="d-none" name="botcheck" tabindex="-1"
                       type="checkbox"/>

                <div class="col-12">
                    <div ref="captcha"></div>
                    <div v-if="validated && !captchaToken" class="fg-danger small mt-1">
                        Please complete the captcha.
                    </div>
                </div>

                <div class="col-12">
                    <button :disabled="status === 'sending' || !accessKey" class="btn-brand" type="submit">
                        {{ status === 'sending' ? 'Sending…' : 'Send' }}
                    </button>
                </div>
            </form>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Need more info?</h2>
            <router-link :to="{name: 'contact'}" class="btn-brand">Contact Us</router-link>
        </div>
    </section>
</template>
