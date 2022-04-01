import { ButtonMain } from '~/components';
import mobileMenuButtonUrl from '~public/icons/button-mobile-menu.svg';

// TODO: Theme switch
type Props = {
    menuToggleHandler: any;
};

const ButtonMobileMenu: React.FC<Props> = ({ menuToggleHandler }: Props) => {
    const componentId = `button-mobile-menu`;
    const buttonImgAlt = `mobile menu toggle`;
    const buttonImgDims = `40`;
    const classes = ['button--contain'];
    const buttonProps = {
        customClasses: classes,
        clickHandler: menuToggleHandler,
    };
    return (
        <ButtonMain id={componentId} {...buttonProps} data-testid={componentId}>
            <img
                src={mobileMenuButtonUrl}
                alt={buttonImgAlt}
                height={buttonImgDims}
                width={buttonImgDims}
            />
        </ButtonMain>
    );
};

export default ButtonMobileMenu;
