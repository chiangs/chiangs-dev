import type { TextStyle } from '~types';

export type LandingData = {
    title: TextStyle[];
    subtitle: string[];
    description: TextStyle[];
    who: string;
    what: string;
};

export const LANDING_COPY: LandingData = {
    title: [
        {
            text: `I'm `,
        },
        {
            text: `Stephen`,
            isHighlighted: true,
        },
        {
            text: `.`,
        },
    ],
    subtitle: [`Developer`, `Design hobbyist`, `Problem solver`],
    description: [
        {
            text: `Consultant by title. Front-end developer by specialty. `,
        },
        {
            text: `UX engineer `,
            isHighlighted: true,
        },
        { text: ` by passion and purpose.` },
    ],
    who: `I love the web and delivering great UX. I consider myself lucky to be harmonizing the union of code and design on the web daily.`,
    what: `Development is a team sport in which I strive to build relationships and communicate meaning of what we are doing. This is how deliver user experience-centered solutions and win.`,
};

// I find growth and fulfillment in defeating challenges through the acquisition of new skills and pursuing mastery of current ones.
