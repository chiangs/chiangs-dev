export type WebAccessibleImage = {
    url: string;
    alt: string;
};

export type TestimonialContent = {
    author: string;
    position: string;
    date: string;
    testimonial: string;
    image?: WebAccessibleImage;
    imageFallback?: WebAccessibleImage;
    imageL?: WebAccessibleImage;
    imageLFallback?: WebAccessibleImage;
};
