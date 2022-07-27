import type { WebAccessibleImage } from '~types';

type Props = {
    image: WebAccessibleImage;
    dimensions?: number;
};

export const Avatar: React.FC<Props> = ({ image, dimensions = 150 }: Props) => {
    // TODO: dynamically set height/width for breakpoint
    return image ? (
        <img src={image.url} alt={image.alt} height={dimensions} width={dimensions} />
    ) : null;
};
