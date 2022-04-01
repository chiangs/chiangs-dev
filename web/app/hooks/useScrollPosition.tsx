// React
import { useState, useEffect } from 'react';

export const useScrollPosition = (): { scrollY: number } => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        if (window) {
            const handleScroll = () => {
                setScrollY(window.scrollY);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Return the width so we can use it in our components
    return { scrollY };
};
