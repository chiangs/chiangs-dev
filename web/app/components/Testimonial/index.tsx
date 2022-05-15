import { TestimonialContent } from '~types';
import { Content } from '../Content';

export const Testimonial: React.FC<TestimonialContent> = ({
    author,
    position,
    image,
    imageFallback,
    imageL,
    imageLFallback,
    testimonial,
}) => {
    const COMPONENT_NAME = `testimonial`;
    const picture = image ? (
        <picture>
            <source media="min-width: 780px)" type="image/webp" srcSet={imageL?.url} />
            <source media="max-width: 779px)" type="image/webp" srcSet={image?.url} />
            <source media="min-width: 780px)" type="image/png" srcSet={imageLFallback?.url} />
            <source media="max-width: 779px)" type="image/png" srcSet={imageFallback?.url} />
            <img className="avatar--image" src={image.url} alt={image.alt} height="80" width="80" />
        </picture>
    ) : null;

    return (
        <div className={`container--component ${COMPONENT_NAME}`} data-testid={COMPONENT_NAME}>
            <section className="avatar">
                <div className="avatar--image--container">{picture}</div>
            </section>
            <section className="author">
                <h3 className="author--name">{author}</h3>
                <p className="title--position">{position}</p>
            </section>
            <section className="review">
                <Content value={testimonial} />
            </section>
        </div>
    );
};
