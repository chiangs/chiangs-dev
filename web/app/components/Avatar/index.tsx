// Assets
import avatarContactUrl from '~public/images/avatar-contact.svg';
import avatarPartyUrl from '~public/images/avatar-party.svg';
import avatarBusinessUrl from '~public/images/avatar-business.svg';
import avatarStudentUrl from '~public/images/avatar-student.svg';
import avatarDevUrl from '~public/images/avatar-dev.svg';

type Props = {
    variant?: string;
    dimensions?: number;
};

export const Avatar: React.FC<Props> = ({ variant, dimensions }: Props) => {
    const variants: {
        [key in string]: string;
    } = {
        contact: avatarContactUrl,
        party: avatarPartyUrl,
        business: avatarBusinessUrl,
        student: avatarStudentUrl,
        developer: avatarDevUrl,
    };
    const avatarSrc = variant ? variants[variant] : variants.developer;
    const dims = dimensions ? dimensions : 150;
    const avatarAlt = `Stephen's avatar`;
    // TODO: dynamically set height/width for breakpoint
    return <img src={avatarSrc} alt={avatarAlt} height={dims} width={dims} />;
};
