import type { WebAccessibleImage } from '~types';

type Props = {
    image?: WebAccessibleImage;
    dimensions?: number;
};

const fallback: WebAccessibleImage = {
    url: '/images/avatar-fallback.svg',
    alt: 'illustrated developer avatar with headphones',
};

export const Avatar: React.FC<Props> = ({ image = fallback, dimensions = 150 }: Props) => {
    // TODO: dynamically set height/width for breakpoint
    return image ? (
        <img src={image.url} alt={image.alt} height={dimensions} width={dimensions} />
    ) : null;
};
