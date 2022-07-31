import type { ButtonProps } from '~/components';
import { Button } from '~/components';

type Props = {
    code: number;
};

const ErrorPage: React.FC<Props> = ({ code = 404 }: Props) => {
    const COMPONENT_ID = `page-not-found`;

    const message = `Oops! Oisann! Ruh-roh! (⊙_◎)`;
    const explanation =
        code === 404
            ? `Looks like something went wrong or can’t be found.`
            : `OK something went wrong behind the scenes with that request. `;
    const recoverySuggestion = `Try searching for what you were looking for and see if any of the suggestions met get back you on track.`;
    const alternative =
        code === 404 &&
        `If you were just testing me, please use the menu to continue browsing around.`;
    const lastResort = `If all else fails, please do tell me by clicking the button below thanks! 🙏`;
    const ctaProps: ButtonProps = {
        variant: `cta`,
        clickHandler: () => null,
        label: `cta`,
    };

    return (
        <article className="container error" id={COMPONENT_ID}>
            <h1>{code}</h1>
            <section className="container introduction">
                <p>{message}</p>
                <p>{explanation}</p>
                <p>{recoverySuggestion}</p>
            </section>
            <section className="container search">SearchUI</section>
            <section className="container help">
                <p>{alternative}</p>
                <p>{lastResort}</p>
            </section>
            <Button {...ctaProps} />
        </article>
    );
};

export default ErrorPage;
