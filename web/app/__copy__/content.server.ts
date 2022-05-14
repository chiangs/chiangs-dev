export const COPY_ME: string = `*[_type == "me"]{ 
    firstName,
    keyTitles,
    bio,
    whatILove,
    whatIDo,
    whatIBelieve
}[0]`;

export const COPY_INDEX: string = `*[_type == "page" && title == "Index"][0]{
        "sections": *[_type == "section" && section_id == sections._ref]{
            sectionName,
            sectionContent
        }
    }`;

export const COPY_TESTIMONIAL = `*[_type == "testimonial"]{ 
    author,
    position,
    testimonial,
    "image": image.asset->url,
  
}`;
