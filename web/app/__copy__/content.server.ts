export const COPY_ME: string = `*[_type == "me"]{ 
    firstName,
    keyTitles,
    bio,
    whatILove,
    whatIDo,
    whatIBelieve,
    "image":{
        "url": image.asset->url,
        "alt": image.alt
    },
    "avatarDev": {
        "url": avatarDev.asset->url,
        "alt": avatarDev.alt
    },
    "avatarBusiness": {
        "url": avatarBusiness.asset->url,
        "alt": avatarBusiness.alt
    },
    "avatarContact": {
        "url": avatarContact.asset->url,
        "alt": avatarContact.alt
    },
    "avatarStudent": {
        "url": avatarStudent.asset->url,
        "alt": avatarStudent.alt
    },
    "avatarParty": {
        "url": avatarParty.asset->url,
        "alt": avatarParty.alt
    }
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
    "image": {
        "url": image.asset->url,
        "alt": image.alt
    },
      "imageFallback": {
        "url": imageFallback.asset->url,
        "alt": imageFallback.alt
    },
      "imageL": {
        "url": imageL.asset->url,
        "alt": imageL.alt
    },
      "imageLFallback": {
        "url": imageLFallback.asset->url,
        "alt": imageLFallback.alt
    }
}`;
