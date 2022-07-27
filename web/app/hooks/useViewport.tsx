// React
import { useState, useEffect } from 'react';
// App
import { DEFAULT_VIEWPORT, THRESHOLD_DESKTOP } from '~constants';
import type { DeviceSize } from '~types';

export const useViewport = (): { viewPortDeviceSize: DeviceSize | undefined } => {
    const sizeCheck = (width = DEFAULT_VIEWPORT): DeviceSize =>
        THRESHOLD_DESKTOP <= width ? 'desktop' : 'mobile';

    const [viewPortDeviceSize, setViewPortDeviceSize] = useState<DeviceSize | undefined>(undefined);

    useEffect(() => {
        if (document) {
            const handleWindowResize = () => setViewPortDeviceSize(sizeCheck(window.innerWidth));
            // Requires check on load then on resizing
            window.addEventListener('load', handleWindowResize);
            window.addEventListener('resize', handleWindowResize);
            return () => {
                window.removeEventListener('load', handleWindowResize);
                window.removeEventListener('resize', handleWindowResize);
            };
        } else setViewPortDeviceSize('mobile');
    }, []);

    return { viewPortDeviceSize };
};
