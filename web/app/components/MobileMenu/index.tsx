// Remix
import { NavLink } from 'remix';
// App
import { MAIN_ROUTES } from '~constants';
import { useAppContext } from '~/contexts';
// Components
import { ButtonMain } from '~components';

export const MobileMenu: React.FC = () => {
    const componentId = `mobile-menu`;
    const { mobileMenu, toggleMobileMenu } = useAppContext();
    const handleCloseMenu = () => toggleMobileMenu('close');
    const links = MAIN_ROUTES.map((l) => (
        <li key={l.name}>
            <NavLink to={l.path} onClick={handleCloseMenu}>
                {l.name}
            </NavLink>
        </li>
    ));
    return (
        <div id="modal" className={`modal backdrop--blur ${mobileMenu}`}>
            <nav id={componentId} className="nav--mobile">
                <ul className="list--links">
                    {links}
                    <li className="linkitem--button">Toggle</li>
                    <li className="linkitem--button">
                        <ButtonMain buttonclass="alt" clickHandler={handleCloseMenu}>
                            close
                        </ButtonMain>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
