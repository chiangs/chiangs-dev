// Remix
import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useCatch, useLoaderData } from '@remix-run/react';
// Content
import { sanity } from '~utils';
import { ContentComponents, TestimonialContent } from '~types';
import { COPY_INDEX, COPY_TESTIMONIAL } from '~copy/content.server';
// Styles
import stylesUrl from '~styles/pages/index.css';
import testimonialsStylesUrl from '~styles/components/testimonials.css';
// Components
import {
    ButtonCTA,
    TechStackIcons,
    Content,
    Testimonial,
    Avatar,
    Construction,
} from '~/components';
import { useContext } from 'react';
import { ProfileContext } from '~/contexts';

const COMPONENTS: ContentComponents = {
    block: {
        normal: ({ children }) => <span>{children}</span>,
        small: ({ children }) => <p className="small">{children}</p>,
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
        page: any;
        testimonials: TestimonialContent[];
    };
};

export const loader: LoaderFunction = async ({ request }) => {
    const QUERIES: string = `{
        "page": ${COPY_INDEX},
        "testimonials": ${COPY_TESTIMONIAL}
    }`;
    // Sanity
    const content = await sanity.getClient().fetch(QUERIES);
    // loader logic
    const data: LoaderData = {
        content,
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
    const me = useContext(ProfileContext);
    const { page, testimonials } = content;
    const { sections } = page;
    const ctaText = `Contact me`;
    const h1Section = sections.find((s: any) => s.sectionName === 'Greeting');
    const h2Section = sections.find((s: any) => s.sectionName === 'Build a Team');
    const testimonialSection = sections.find((s: any) => s.sectionName === 'Testimonials');

    const ctaButton = (
        <ButtonCTA buttonclass="cta" clickHandler={() => null}>
            {ctaText}
        </ButtonCTA>
    );

    const h1 = (
        <h1>
            <Content value={h1Section.sectionContent[0]} components={COMPONENTS} />
            <br />
            <Content value={h1Section.sectionContent[1]} components={COMPONENTS} />
            <span className="highlight title--end">&nbsp;{me.firstName}</span>
        </h1>
    );

    const sectionTeamH2 = (
        <h2>
            <Content value={h2Section.sectionContent} components={COMPONENTS} />
        </h2>
    );

    const subtitleList = (
        <ul className="list--subtitle">
            {me.keyTitles.map((t: string) => (
                <li key={t}>{t}</li>
            ))}
        </ul>
    );

    const testimonialItems = testimonials.map((t: any) => (
        <li key={t.author} className="testimonial--list--item">
            <Testimonial {...t} />
        </li>
    ));

    const construction = <Construction />;
    const landing = (
        <article className="page">
            <section className="container intro">
                <div className="content">
                    {h1}
                    <div className="subheader">
                        {subtitleList}
                        <Avatar image={me.avatarDev} />
                    </div>
                    <br />
                    <div className="description">
                        <Content value={me.bio} components={COMPONENTS} />
                    </div>
                    <section className="page--cta">{ctaButton}</section>
                </div>
            </section>
            <section className="container whowhat nopadding">
                <div className="content who">
                    <div>image place holder</div>
                    <Content value={me.whatILove} />
                </div>
                <div className="content what">
                    <Content value={me.whatIDo} />
                    <div>image place holder</div>
                </div>
            </section>
            <section className="container team">
                <div className="content">
                    <TechStackIcons />
                    {sectionTeamH2}
                    <Content value={me.whatIBelieve} />
                    <Content value={testimonialSection.sectionContent} components={COMPONENTS} />
                    <ul className="testimonials--list list--nostyle">{testimonialItems}</ul>
                </div>
            </section>
        </article>
    );

    return construction;
};

export default Index;
