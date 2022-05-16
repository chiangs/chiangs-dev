import { Technology } from './technology.type';
import { WebAccessibleImage } from './testimonials.type';

export type Profile = {
    firstName: string;
    lastName: string;
    fullName: string;
    keyTitles: any;
    bio: any;
    whatILove: any;
    whatIDo: any;
    whatIBelieve: any;
    city: string;
    country: string;
    title: string;
    linkedIn: string;
    topSkills: Technology[];
    profile: WebAccessibleImage;
    avatarDev: WebAccessibleImage;
    avatarBusiness: WebAccessibleImage;
    avatarContact: WebAccessibleImage;
    avatarStudent: WebAccessibleImage;
    avatarParty: WebAccessibleImage;
};
