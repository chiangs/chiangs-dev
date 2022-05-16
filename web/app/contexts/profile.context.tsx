// React
import { createContext, useContext } from 'react';
// App
import { Profile, WebAccessibleImage } from '~types';

// App state shape
export type UIContext = Profile;

// Default state
const defaultImage: WebAccessibleImage = {
    url: '',
    alt: '',
};
export const defaultContext: UIContext = {
    firstName: '',
    lastName: '',
    fullName: '',
    keyTitles: undefined,
    bio: undefined,
    whatILove: undefined,
    whatIDo: undefined,
    whatIBelieve: undefined,
    city: '',
    country: '',
    title: '',
    linkedIn: '',
    topSkills: [],
    profile: defaultImage,
    avatarDev: defaultImage,
    avatarBusiness: defaultImage,
    avatarContact: defaultImage,
    avatarStudent: defaultImage,
    avatarParty: defaultImage,
};

// Build the state context
export const ProfileContext = createContext<UIContext>(defaultContext);

// Export provider
export const ProfileState = ({
    updatedValues,
    children,
}: {
    updatedValues: Profile;
    children: any;
}): JSX.Element => {
    // App State
    const state: UIContext = {
        ...defaultContext,
        ...updatedValues,
    };

    return <ProfileContext.Provider value={state}>{children}</ProfileContext.Provider>;
};

// Export consumer
export const useProfileContext = (): UIContext => useContext(ProfileContext);
