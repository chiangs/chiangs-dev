import { TextStyle } from '~/__types__';

export type TestimonialContent = {
    author: string;
    position: string;
    date: string;
    review: string;
    avatarUrlL?: string;
    avatarUrlS?: string;
    avatarUrlLfallback?: string;
    avatarUrlSfallback?: string;
};
export type TestimonialData = {
    title: TextStyle[];
    value: string;
    intro: string;
    preamble: string;
    testimonials: TestimonialContent[];
};

export const TESTIMONIAL_COPY: TestimonialData = {
    title: [
        {
            text: `Build a `,
        },
        {
            text: `team`,
            isHighlighted: true,
        },
        {
            text: ` that delivers.`,
        },
    ],
    value: `I believe in bringing ideas into reality using a deliberate and disciplined process. With me on the team, you'll have someone experienced in coaching and mentoring; someone who takes vested interest in the development, growth and well-being of each team member.`,
    intro: `Together we'll create a team that stays on top of the latest trends and best practices...and build awesome solutions along the way.`,
    preamble: `Here's what previous colleagues have said about their experiences working with me:`,
    testimonials: [
        {
            author: `Thomas Vehus`,
            position: `Team lead & software developer at NAVTOR`,
            date: `11 Nov. 2021`,
            review: `Stephen is the kind of developer that can take on any challenge and deliver high-quality solutions on time. Moreover, he has the rare ability to quickly acquire a deep understanding of the business domain at hand and instantly be able to offer valuable contributions to both deliverables and work processes. He is curious, inquisitive, and methodical in nature. Stephen was hired as a senior front-end developer, and he delivered on all accounts throughout his tenure of 2 years. Anyone who has worked with Stephen will tell you that his humor, wits, and friendliness make it a pure joy to have him as a team member. I can full-heartedly recommend Stephen both as a professional and as a person and hope to be able to work with him again.`,
            avatarUrlL: `./images/avatar-vehus-160.webp`,
            avatarUrlS: `./images/avatar-vehus-80.webp`,
            avatarUrlLfallback: `./images/avatar-vehus-160.png`,
            avatarUrlSfallback: `./images/avatar-vehus-80.png`,
        },
        {
            author: `Nadine Ramsberg`,
            position: `Designer`,
            date: `9 Nov. 2021`,
            review: `As a designer, it is a dream to work with a developer like Stephen. He understands UX design principles and shows a genuine interest in how designers work. Stephen also has great ideas about how designers and developers can and should collaborate to support each other's efforts. And as a developer, he is efficient and thorough. I would be lucky to work with Stephen on another project and I give him my warmest recommendations.`,
            avatarUrlL: `./images/avatar-ramsberg-160.webp`,
            avatarUrlS: `./images/avatar-ramsberg-80.webp`,
            avatarUrlLfallback: `./images/avatar-ramsberg-160.png`,
            avatarUrlSfallback: `./images/avatar-ramsberg-80.png`,
        },
        {
            author: `Tord Joranger`,
            position: `Software Engineer`,
            date: `24 Jan. 2019`,
            review: `I was lucky to be able to work with Stephen on a project for Bouvet in the fall of 2018. He made it very easy to join the team, and was not difficult to ask if I had any issues. I really came to appreciate Stephens ability to teach and explain in a clear and concise way, while also being open to suggestions and easy to work with. `,
            avatarUrlL: `./images/avatar-joranger-160.webp`,
            avatarUrlS: `./images/avatar-joranger-80.webp`,
            avatarUrlLfallback: `./images/avatar-joranger-160.png`,
            avatarUrlSfallback: `./images/avatar-joranger-80.png`,
        },
    ],
};
