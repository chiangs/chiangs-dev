import { TestimonialContent } from '~types';
import { Content } from '../Content';

export const Testimonial: React.FC<TestimonialContent> = (children) => {
    const COMPONENT_NAME = `testimonial`;
    const { author, position } = children;

    return (
        <div className={`container--component ${COMPONENT_NAME}`} data-testid={COMPONENT_NAME}>
            <section className="avatar">
                <div className="avatar--image--container">
                    <picture>
                        <source
                            media="min-width: 780px)"
                            type="image/webp"
                            srcSet={children.imageL}
                        />
                        <source
                            media="max-width: 779px)"
                            type="image/webp"
                            srcSet={children.image}
                        />
                        <source
                            media="min-width: 780px)"
                            type="image/png"
                            srcSet={children.imageLFallback}
                        />
                        <source
                            media="max-width: 779px)"
                            type="image/png"
                            srcSet={children.imageFallback}
                        />
                        <img
                            className="avatar--image"
                            src={children.image}
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
                <Content value={children.testimonial} />
            </section>
        </div>
    );
};
