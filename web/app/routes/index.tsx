// Remix
import { LoaderFunction, useLoaderData, useCatch, LinksFunction, MetaFunction } from 'remix';
// Content
import { sanity } from '~utils';
import { ContentComponents } from '~types';
import { COPY_INDEX, COPY_ME } from '~copy/content.server';
// Styles
import stylesUrl from '~styles/pages/index.css';
import testimonialsStylesUrl from '~styles/components/testimonials.css';
// Components
import { Avatar, ButtonCTA, TechStackIcons, Testimonial, Content } from '~/components';

const COMPONENTS: ContentComponents = {
    block: {
        normal: ({ children }) => <span>{children}</span>,
    },
    marks: {
        highlight: ({ children }) => <span className="highlight">{children}</span>,
    },
};

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
    content: {
        me: any;
        page: any;
    };
    // landingCopy: LandingData;
    // testimonialsCopy: TestimonialData;
    // linkedInUrl: string;
};

export const loader: LoaderFunction = async ({ request }) => {
    const QUERIES: string = `{
        "me": ${COPY_ME},
        "page": ${COPY_INDEX},
    }`;
    // Sanity
    const content = await sanity.getClient().fetch(QUERIES);
    // loader logic
    const data: LoaderData = {
        content,
        // landingCopy: LANDING_COPY,
        // testimonialsCopy: TESTIMONIAL_COPY,
        // linkedInUrl: ME.linkedIn,
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
    const { content } = useLoaderData<LoaderData>();
    console.log('🚀 ~ file: index.tsx ~ line 102 ~ Index ~ content', content);
    const { me, page } = content;
    const ctaText = `Contact me`;
    const ctaButton = (
        <ButtonCTA buttonclass="cta" clickHandler={() => null}>
            {ctaText}
        </ButtonCTA>
    );

    const h1 = (
        <h1>
            <Content value={page.sections[0].sectionContent[0]} components={COMPONENTS} />
            <br />
            <Content value={page.sections[0].sectionContent[1]} components={COMPONENTS} />
            <span className="highlight title--end">&nbsp;{me.firstName}</span>
        </h1>
    );

    const sectionTeamH2 = (
        <h2>
            <Content value={page.sections[1].sectionContent} components={COMPONENTS} />
        </h2>
    );

    const subtitleList = (
        <ul className="list--subtitle">
            {me.keyTitles.map((t: string) => (
                <li key={t}>{t}</li>
            ))}
        </ul>
    );

    // const tesimonialTitleContent = testimonialsCopy.title.map((c, i) => (
    //     <span key={`testimonial${i}`} className={c.isHighlighted ? 'highlight' : ''}>
    //         {c.text}
    //     </span>
    // ));
    // const testimonials = testimonialsCopy.testimonials.map((t, i) => (
    //     <li key={`t${i}`} className="testimonial--list--item">
    //         <a
    //             className="link--image"
    //             href={linkedInUrl}
    //             target="_blank"
    //             rel="noreferrer noopener"
    //             title="LinkedIn via new tab"
    //             aria-label="click to open new tab to my LinkedIn profile"
    //         >
    //             <Testimonial {...t} />
    //         </a>
    //     </li>
    // ));

    return (
        <article className="page">
            <section className="container">
                <div className="content">
                    {h1}
                    <div className="subheader">
                        {subtitleList}
                        <Avatar />
                    </div>
                    <br />
                    <div className="description">
                        <Content value={me.bio} components={COMPONENTS} />
                    </div>
                    <section className="page--cta">{ctaButton}</section>
                </div>
            </section>
            <section className="container nopadding">
                <div className="content who">
                    <Content value={me.whatILove} />
                </div>
            </section>
            <section className="container nopadding">
                <div className="content what">
                    <Content value={me.whatIDo} />
                </div>
            </section>
            <section className="container">
                <div className="content">
                    <TechStackIcons />
                    {sectionTeamH2}
                    <Content value={me.whatIBelieve} />
                    <small>
                        <Content value={page.sections[3].sectionContent} components={COMPONENTS} />
                    </small>
                    {/* <p className="differentiation">{testimonialsCopy.value}</p>
                  
                    <p>{testimonialsCopy.intro}</p>
                    <p className="small">{testimonialsCopy.preamble}</p>
                    <ul className="testimonials--list list--nostyle">{testimonials}</ul> */}
                </div>
            </section>
        </article>
    );
};

export default Index;
