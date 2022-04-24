// React
import { useState, useEffect } from 'react';
// App
import { logPeekMessage } from '~utils';

export const useConsolePeekMsg = (env: 'development' | 'production' | 'test') => {
    const [showMsg, setShowMsg] = useState<boolean>(false);
    useEffect(() => {
        if (env === 'production') {
            setShowMsg(true);
            console.clear();
            logPeekMessage();
        }
        return () => {
            console.clear();
        };
    }, [env]);
    return showMsg;
};
