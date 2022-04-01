// Remix
import { LoaderFunction, useLoaderData, useCatch, LinksFunction, MetaFunction } from 'remix';
// Content
import { LandingData, LANDING_COPY } from '~copy/landing';
import { TestimonialData, TESTIMONIAL_COPY } from '~copy/testimonials';
// Styles
import stylesUrl from '~styles/pages/index.css';
import testimonialsStylesUrl from '~styles/components/testimonials.css';
// Components
import { Avatar, ButtonCTA, TechStackIcons, Testimonial } from '~/components';
import { ME } from '~copy/profile';

// TODO: Catch boundaries
// TODO: Update meta
export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesUrl,
        },
        {
            rel: 'stylesheet',
            href: testimonialsStylesUrl,
        },
    ];
};

export const meta: MetaFunction = () => {
    return {
        title: 'Stephen Chiang',
        description:
            'Landing page for personal portfolio site with introduction to who Stephen is as a UX engineer',
    };
};

// Loader
type LoaderData = {
    landingCopy: LandingData;
    testimonialsCopy: TestimonialData;
    linkedInUrl: string;
};

export const loader: LoaderFunction = async ({ request }) => {
    // loader logic
    const data: LoaderData = {
        landingCopy: LANDING_COPY,
        testimonialsCopy: TESTIMONIAL_COPY,
        linkedInUrl: ME.linkedIn,
    };
    // #region error testing
    /**
     * ! Throw errors to test the bourndaries
     * Remove code in error testing region
     * when developing actual project
     */
    const uncaught = new Response('No random joke found', { status: 500 });
    const caught = new Response('No random joke found', { status: 404 });
    const testingErrors = false;
    const expected = true;
    if (testingErrors) {
        throw expected ? caught : uncaught;
    }
    // #endregion error testing
    return data;
};

export const CatchBoundary = () => {
    const caught = useCatch();
    if (caught.status === 404) {
        return (
            <div className="error-container">
                <p>Nothing to see here</p>
                <p>Container nav still works</p>
            </div>
        );
    }
    throw new Error(`Unexpected caught response with status: ${caught.status}`);
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
    console.error(error);
    return (
        <div className="error-container">
            I did a whoopsies.
            <p>Container nav still works</p>
        </div>
    );
};

const Index = () => {
    const { landingCopy, testimonialsCopy, linkedInUrl } = useLoaderData<LoaderData>();
    const ctaText = `Contact me`;
    const greeting = `Hello, `;
    const ctaButton = (
        <ButtonCTA buttonclass="cta" clickHandler={() => null}>
            {ctaText}
        </ButtonCTA>
    );
    const titleContent = landingCopy.title.map((c, i) => (
        <span key={`title${i}`} className={c.isHighlighted ? 'highlight' : ''}>
            {c.text}
        </span>
    ));
    const h1 = (
        <h1>
            {greeting}
            <br />
            {titleContent}
        </h1>
    );
    const subtitleList = (
        <ul className="list--subtitle">
            {landingCopy.subtitle.map((s) => (
                <li key={s}>{s}</li>
            ))}
        </ul>
    );
    const descriptionContent = landingCopy.description.map((c, i) => (
        <span key={`description${i}`} className={c.isHighlighted ? 'highlight' : ''}>
            {c.text}
        </span>
    ));
    const tesimonialTitleContent = testimonialsCopy.title.map((c, i) => (
        <span key={`testimonial${i}`} className={c.isHighlighted ? 'highlight' : ''}>
            {c.text}
        </span>
    ));
    const testimonials = testimonialsCopy.testimonials.map((t, i) => (
        <li key={`t${i}`} className="testimonial--list--item">
            <a
                className="link--image"
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer noopener"
                title="LinkedIn via new tab"
                aria-label="click to open new tab to my LinkedIn profile"
            >
                <Testimonial {...t} />
            </a>
        </li>
    ));

    return (
        <article className="page">
            <section className="container">
                <div className="content">
                    {h1}
                    <div className="subheader">
                        {subtitleList}
                        <Avatar />
                    </div>
                    <p className="description">{descriptionContent}</p>
                    <br />
                    <section className="page--cta">{ctaButton}</section>
                </div>
            </section>
            <section className="container nopadding">
                <div className="content who">
                    <p>{landingCopy.who}</p>
                </div>
            </section>
            <section className="container nopadding">
                <div className="content what">
                    <p>{landingCopy.what}</p>
                </div>
            </section>
            <section className="container">
                <div className="content">
                    <TechStackIcons />
                    <h2>{tesimonialTitleContent}</h2>
                    <p className="differentiation">{testimonialsCopy.value}</p>
                    <p>{testimonialsCopy.intro}</p>
                    <p className="small">{testimonialsCopy.preamble}</p>
                    <ul className="testimonials--list list--nostyle">{testimonials}</ul>
                </div>
            </section>
        </article>
    );
};

export default Index;
