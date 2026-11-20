<script lang="ts" setup>
import PageHero from '@/components/PageHero.vue';
import MediaSection from '@/components/MediaSection.vue';
import StudySmarterCta from '@/components/StudySmarterCta.vue';
import heroImage from '@/assets/images/hero-course.jpg';
import heroImageMobile from '@/assets/images/hero-course-mobile.webp';
import stressedImage from '@/assets/images/stressed-student.jpg';
import brainFogImage from '@/assets/images/brain-fog.jpg';
</script>

<template>
    <PageHero :image="heroImage" :mobile-image="heroImageMobile" mobile-position="top left">
        <h1 class="hero-title">Learn 2 Remember – Study Skills Course</h1>
        <p class="hero-subtitle">
            Reduce stress, improve memory, and help your child achieve better results with science-backed study
            techniques.
        </p>
        <router-link :to="{name: 'sign-up'}" class="btn-brand">Enroll Today!</router-link>
    </PageHero>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Why Do Students Struggle to Study Effectively?</h2>
            <p class="lead-text">
                Many students don’t struggle because they are ‘bad at learning’—they struggle because they’ve never
                been taught how to learn effectively. Anxiety, poor memory techniques, and lack of proper study
                strategies create unnecessary stress and frustration.
            </p>
            <h3 class="section-label">Common Causes of Anxiety &amp; Learning Struggles</h3>
            <ul>
                <li>Poor time management</li>
                <li>Lack of understanding</li>
                <li>Inadequate preparation</li>
                <li>Misunderstanding task words instructions</li>
                <li>Poor memory &amp; recall skills</li>
                <li>Distractions &amp; low self-esteem</li>
            </ul>
        </div>
    </section>

    <MediaSection :image="stressedImage" alt="Student overwhelmed by letters">
        <h2 class="section-title">How Words Influence Stress Levels</h2>
        <p>
            <em>Imagine I told you: ‘You have a <strong>test</strong> tomorrow.’</em><br>
            Now, imagine I said: ‘You have an <strong>exam</strong> tomorrow.’
        </p>
        <p>
            Would your stress level change? For most students, ‘exam’ triggers far more anxiety, yet it’s just another
            form of assessment. The words we use impact our emotions and stress levels, which is why
            <strong>we change the way students approach learning</strong>.
        </p>
        <h3 class="section-label">Key Learning Insight:</h3>
        <ul>
            <li>
                <strong>We replace negative</strong> words like ‘study’ and ‘exam’ with ‘learning’ and ‘remembering’
                to remove stress triggers.
            </li>
            <li>
                <strong>By reducing emotional resistance</strong>, students can focus better and retain more
                information.
            </li>
        </ul>
    </MediaSection>

    <MediaSection :image="brainFogImage" alt="Student with brain fog holding her head over a book" image-right>
        <h2 class="section-title">How Stress Affects Learning &amp; Memory</h2>
        <p>
            Did you know that high levels of cortisol—the stress hormone—can cause ‘brain fog’ and impair memory?
            When students feel anxious about tests, their brain struggles to retain and recall information
            effectively.
        </p>
        <h3 class="section-label">Key Learning Insight:</h3>
        <ul>
            <li><strong>Cortisol &amp; Brain Fog</strong> – Stress hormones block memory recall.</li>
            <li><strong>The Power of Mindset</strong> – A relaxed brain learns and remembers better.</li>
            <li><strong>Practical Solutions</strong> – Simple techniques can lower stress and improve focus.</li>
        </ul>
    </MediaSection>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Whole-Brain Learning for Better Memory &amp; Recall</h2>
            <p class="lead-text">
                Traditional study methods only engage one side of the brain. By activating both hemispheres, students
                absorb and recall information much more effectively.
            </p>
            <h3 class="section-label">Techniques Used in the Course:</h3>
            <ul class="mb-4">
                <li><strong>Creative Learning:</strong> Colors, pictures, and mind maps for visualization.</li>
                <li><strong>Memory Through Music:</strong> Using rhymes and songs to reinforce concepts.</li>
                <li><strong>Engaged Note-Taking:</strong> The Cornell Method &amp; interactive study notes.</li>
                <li><strong>Multi-Sensory Learning:</strong> Stimulating multiple senses for better retention.</li>
            </ul>
            <router-link :to="{name: 'sign-up'}" class="btn-brand">Enroll Today!</router-link>
        </div>
    </section>

    <MediaSection :image="stressedImage" alt="Student overwhelmed by letters">
        <h2 class="section-title">Recovering Lost Learning from the Pandemic</h2>
        <p>
            The COVID-19 pandemic left many students with gaps in their education due to lockdowns and disrupted
            schooling. Many subjects were compressed or skipped, leading to
            <strong>gaps in foundational knowledge</strong>.
        </p>
        <h3 class="section-label">How We Address This Challenge:</h3>
        <ul>
            <li>Identify &amp; reinforce missing knowledge.</li>
            <li>Personalized strategies to <strong>restore lost learning</strong>.</li>
            <li>Study methods that help students catch up <strong>without feeling overwhelmed</strong>.</li>
        </ul>
    </MediaSection>

    <section class="section">
        <div class="container">
            <h2 class="section-subtitle mb-4">FAQs: Your Study Success Starts Here</h2>
            <div class="faq">
                <details name="faq" open>
                    <summary>Who is this course suitable for?</summary>
                    <div class="faq-body">
                        <p>
                            This course is designed for <strong>students from Grade 4 to Grade 12</strong> who
                            struggle with study techniques, test anxiety, poor memory, or time management. It is
                            especially helpful for students who:
                        </p>
                        <ul>
                            <li>Feel overwhelmed before exams.</li>
                            <li>Have trouble remembering key information.</li>
                            <li>Struggle with structuring their study time effectively.</li>
                        </ul>
                    </div>
                </details>
                <details name="faq">
                    <summary>How is this course different from regular study methods?</summary>
                    <div class="faq-body">
                        <p>
                            Unlike traditional studying, which often relies on repetition and rote memorization, this
                            course teaches <strong>science-backed techniques</strong> that activate both sides of the
                            brain. We focus on:
                        </p>
                        <ul>
                            <li><strong>Memory tricks</strong> like visualization and mnemonics.</li>
                            <li><strong>Stress-reducing strategies</strong> to eliminate test anxiety.</li>
                            <li><strong>Interactive learning techniques</strong> using music, color, and creativity.</li>
                        </ul>
                        <p>
                            By making learning <strong>fun and effective</strong>, students
                            <strong>retain information better</strong> and develop lifelong skills.
                        </p>
                    </div>
                </details>
                <details name="faq">
                    <summary>Will this course help if my child already has good grades?</summary>
                    <div class="faq-body">
                        <p>
                            Yes! Even high-performing students can
                            <strong>improve efficiency, memory, and confidence</strong> using these advanced study
                            strategies. The course helps students:
                        </p>
                        <ul>
                            <li>Study smarter, not longer.</li>
                            <li>Improve test performance through better recall.</li>
                            <li>Develop structured time management skills.</li>
                        </ul>
                        <p>Perfect for students aiming for <strong>top marks or exam success</strong>.</p>
                    </div>
                </details>
                <details name="faq">
                    <summary>How quickly can my child start seeing results?</summary>
                    <div class="faq-body">
                        <p>Many students start noticing improvements <strong>immediately</strong>, especially in:</p>
                        <ul>
                            <li><strong>Memory recall and retention</strong></li>
                            <li><strong>Confidence in studying and test-taking</strong></li>
                            <li><strong>Stress reduction before exams</strong></li>
                        </ul>
                        <p>
                            The more they apply the techniques, the <strong>better the long-term results</strong>.
                            Some techniques work instantly, while others build strong study habits over time.
                        </p>
                    </div>
                </details>
                <details name="faq">
                    <summary>What if my child has gaps in learning due to COVID-19?</summary>
                    <div class="faq-body">
                        <p>
                            Many students missed <strong>key foundational concepts</strong> during lockdown. This
                            course includes <strong>strategies to identify and close learning gaps</strong> by:
                        </p>
                        <ul>
                            <li>Strengthening memory and recall of missed material.</li>
                            <li>Teaching effective note-taking and comprehension techniques.</li>
                            <li>Offering <strong>personalized methods</strong> to rebuild confidence in subjects.</li>
                        </ul>
                        <p>
                            This makes it an <strong>ideal solution</strong> for students who feel behind due to
                            disrupted schooling.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <StudySmarterCta/>
</template>
