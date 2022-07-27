// React
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';
// App
import type { MobileMenuState } from '~types';

// App state shape
export type UIContext = {
    mobileMenu: MobileMenuState;
    toggleMobileMenu: Dispatch<SetStateAction<MobileMenuState>>;
};

// Default state
export const defaultContext: UIContext = {
    mobileMenu: 'close',
    toggleMobileMenu: () => null,
};

// Build the state context
export const AppUIContext = createContext<UIContext>(defaultContext);

// Export provider
export const AppUIState = ({ children }: any): JSX.Element => {
    // State and update methods
    const [mobileMenu, setMobileMenu] = useState<MobileMenuState>(defaultContext.mobileMenu);

    // App State
    const state: UIContext = {
        ...defaultContext,
        mobileMenu,
        toggleMobileMenu: setMobileMenu,
    };

    return <AppUIContext.Provider value={state}>{children}</AppUIContext.Provider>;
};

// Export consumer
export const useAppContext = (): UIContext => useContext(AppUIContext);
