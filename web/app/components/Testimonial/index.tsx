import { TestimonialContent } from '~copy/testimonials';

// TODO: Update component Id - component name, use id only for single instances
export const Testimonial: React.FC<TestimonialContent> = ({
    author,
    position,
    date,
    review,
    avatarUrlL,
    avatarUrlS,
    avatarUrlLfallback,
    avatarUrlSfallback,
}: TestimonialContent) => {
    const COMPONENT_NAME = `testimonial`;

    return (
        <div className={`container--component ${COMPONENT_NAME}`} data-testid={COMPONENT_NAME}>
            <section className="avatar">
                <div className="avatar--image--container">
                    <picture>
                        <source media="min-width: 780px)" type="image/webp" srcSet={avatarUrlL} />
                        <source media="max-width: 779px)" type="image/webp" srcSet={avatarUrlS} />
                        <source
                            media="min-width: 780px)"
                            type="image/png"
                            srcSet={avatarUrlLfallback}
                        />
                        <source
                            media="max-width: 779px)"
                            type="image/png"
                            srcSet={avatarUrlSfallback}
                        />
                        <img
                            className="avatar--image"
                            src={avatarUrlS}
                            alt={author}
                            height="80"
                            width="80"
                        />
                    </picture>
                </div>
            </section>
            <section className="author">
                <h3 className="author--name">{author}</h3>
                <p className="title--position">{position}</p>
            </section>
            <section className="review">
                <p>{review}</p>
            </section>
        </div>
    );
};
