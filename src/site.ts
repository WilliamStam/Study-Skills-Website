/** Business details shared by the header, footer and contact page. */
export const site = {
    name: 'The Study Skills Expert',
    phone: '083 259 1512',
    phoneHref: 'tel:+27832591512',
    email: 'abigail@study-skills.co.za',
    address: '31 School Ave, Sunnyridge, Germiston, 1401',
    facebook: 'https://www.facebook.com/studyskillsexpert',
    instagram: 'https://www.instagram.com/study_skills_expert',
};

/** Main menu, in the order the old site showed it. */
export const menu = [
    {name: 'home', label: 'Home'},
    {name: 'tutoring', label: 'Tutoring'},
    {name: 'course', label: 'Study Skills Course'},
    {name: 'sign-up', label: 'Sign Up'},
    {name: 'about', label: 'About Us'},
    {name: 'contact', label: 'Contact Us'},
] as const;

export interface Testimonial {
    name: string;
    quote: string;
}

/** Reviews from the old site (its Google reviews widget and the About page). */
export const testimonials: Testimonial[] = [
    {
        name: 'Ana Filipa Caixeiro',
        quote: 'I attended extra lessons with The Study Skills Expert through my high school career. The lessons were always captivating and informative. I really struggled with English in my Matric year and Abigail just made it possible to reach my goals. I would highly recommend The Study Skills Expert to anyone who is struggling or who wants to improve to reach their full potential, they truly make a difference!',
    },
    {
        name: 'Macayla Cassandra Hattingh',
        quote: "Mrs. Swanepoel adapted to the way I study and learn. She's very understanding in what her students need and where they need help with.",
    },
    {
        name: 'Samantha Atrash',
        quote: 'Abigail is super. My son is coping so much better with anxiety since he has been seeing her.',
    },
    {
        name: 'Nely',
        quote: 'Highly effective study skills... I can recommend this. Thanks!',
    },
];
