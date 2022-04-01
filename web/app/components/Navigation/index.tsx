// Components
import NavigationDesktop from './_NavigationDesktop';
import NavigationMobile from './_NavigationMobile';

export const Navigation: React.FC = () => {
    return (
        <>
            <div className="navigation--mobile">
                <NavigationMobile />
            </div>
            <div className="navigation--desktop">
                <NavigationDesktop />
            </div>
        </>
    );
};
