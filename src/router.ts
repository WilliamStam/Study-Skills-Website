import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        /** Document title; " - Study Skills Expert" is appended */
        title?: string;
        /** Meta description for search engines */
        description?: string;
    }
}

const SITE_NAME = 'Study Skills Expert';

// Pages are loaded on demand, so the entry bundle stays small.
// Paths match the old WordPress site's URLs so existing links and search results keep working.
const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/pages/home/HomePage.vue'),
        meta: {
            description: 'Help your child improve grades, reduce test anxiety & master memory techniques with our interactive Study Skills Course and tutoring for Grades 0-12.',
        },
    },
    {
        name: 'tutoring',
        path: '/tutoring-grade-0-to-12',
        component: () => import('@/pages/tutoring/TutoringPage.vue'),
        meta: {
            title: 'Tutoring Grade 0 to 12',
            description: 'Personalized one-on-one and group tutoring for Grade 0 to 12: Mathematics, Science, Languages and more, online or in person, with flexible scheduling.',
        },
    },
    {
        name: 'course',
        path: '/study-skills-course',
        component: () => import('@/pages/course/CoursePage.vue'),
        meta: {
            title: 'Study Skills Course',
            description: 'The Learn 2 Remember Study Skills Course: reduce stress, improve memory, and help your child achieve better results with science-backed study techniques.',
        },
    },
    {
        name: 'sign-up',
        path: '/sign-up',
        component: () => import('@/pages/sign-up/SignUpPage.vue'),
        meta: {
            title: 'Sign Up',
            description: 'Sign up for the Learn2Remember Study Skills Course or expert tutoring for Grade 0 to 12.',
        },
    },
    {
        name: 'about',
        path: '/about-us',
        component: () => import('@/pages/about/AboutPage.vue'),
        meta: {
            title: 'About Us',
            description: 'Meet Abigail Swanepoel, the Study Skills Expert: 23 years of teaching experience helping students study smarter, not harder.',
        },
    },
    {
        name: 'contact',
        path: '/contact-us',
        component: () => import('@/pages/contact/ContactPage.vue'),
        meta: {
            title: 'Contact Us',
            description: 'Get in touch with the Study Skills Expert: 083 259 1512, abigail@study-skills.co.za, 31 School Ave, Sunnyridge, Germiston.',
        },
    },
    // Short aliases used by earlier versions of this app
    {path: '/about', redirect: {name: 'about'}},
    {path: '/contact', redirect: {name: 'contact'}},
    {path: '/:pathMatch(.*)*', redirect: {name: 'home'}},
];

const router = createRouter({
    // BASE_URL follows vite's `base`, so routes work under the GitHub Pages /<repo>/ prefix
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {el: to.hash, behavior: 'smooth'};
        }
        return {top: 0};
    },
});

router.afterEach((to) => {
    document.title = to.meta.title
        ? `${to.meta.title} - ${SITE_NAME}`
        : `Study Skills Course & Tutoring | ${SITE_NAME}`;
    if (to.meta.description) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', to.meta.description);
    }
});

export default router;
