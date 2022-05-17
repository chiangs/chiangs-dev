// React
import { createRef } from 'react';
import { Link } from "@remix-run/react";
// FramerMotion
import { m } from 'framer-motion';
// Assets
import logoSunriseUrl from '~public/images/logo-sunrise.svg';
import logoSunsetUrl from '~public/images/logo-sunset.svg';
// Types
import { MobileMenuState } from '~/__types__';
// Contexts
import { useAppContext } from '~/contexts';
// Hooks
import { useScrollPosition } from '~/hooks';
// Components
import ButtonMobileMenu from '../_ButtonMobileMenu';

// TODO: Clean this up with useEffect?
const logoContainerRef = createRef<HTMLDivElement>();
const logoRef = createRef<HTMLDivElement>();

const NavigationMobile: React.FC = () => {
    const componentId = 'nav-mobile';
    const { toggleMobileMenu } = useAppContext();
    const { scrollY } = useScrollPosition();

    const logoContainerRect = logoContainerRef.current?.getBoundingClientRect();
    const logoRect = logoRef.current?.getBoundingClientRect();
    const logoPos =
        logoContainerRect && logoRect
            ? scrollY
                ? 10 + logoRect.width - logoContainerRect.right
                : 0
            : 0;

    const getNextMenuState = (current: MobileMenuState): MobileMenuState =>
        current === 'open' ? 'close' : 'open';
    const handleToggle = () => toggleMobileMenu(getNextMenuState);

    return (
        <div id={componentId} className={`nav--container`} data-testid={componentId}>
            <section className="left" ref={logoContainerRef}>
                <m.div
                    className="nav--logo"
                    animate={{ x: logoPos }}
                    transition={{ type: 'spring', duration: 1 }}
                    ref={logoRef}
                >
                    <Link className="link--image" to="/">
                        <img
                            src={logoSunsetUrl}
                            alt="stephen chiang, web & ux developer"
                            height="43"
                            width="27"
                        />
                    </Link>
                </m.div>
            </section>
            <section className="right">
                <ButtonMobileMenu menuToggleHandler={handleToggle} />
            </section>
        </div>
    );
};

export default NavigationMobile;
