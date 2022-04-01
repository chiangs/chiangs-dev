import { Technology } from './technology.type';

export type Profile = {
    firstName: string;
    lastName: string;
    middleInitial: string;
    city: string;
    country: string;
    title: string;
    linkedIn: string;
    topSkills: Technology[];
};
