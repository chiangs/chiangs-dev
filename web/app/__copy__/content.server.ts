export const COPY_ME: string =
    '*[_type == "me"]{ firstName, keyTitles, bio, whatILove, whatIDo, whatIBelieve }[0]';

export const COPY_INDEX: string = '*[_type == "page" && title == "Index"]{ title }[0]';
