import { Avatar } from "@nextui-org/react";
import { FaUserAstronaut } from "react-icons/fa";

interface HomeHeaderUserMenuProps {
    styles: { readonly [key: string]: string; },
    photoUser: string | undefined,
    nameUser: string
}

function getUserLetters(name: string) {
    const nameSplitted: string[] = name.toUpperCase().split(" ");
    if (name.includes(" ")) {
        return nameSplitted[0][0] + nameSplitted[1][0];
    } else {
        return nameSplitted[0][0] + nameSplitted[0][1];
    }
}

export default function HomeHeaderUserMenu({ styles, nameUser, photoUser }: HomeHeaderUserMenuProps) {
    return (
        <div className={styles.home_header_user_menu_container}>
            {photoUser ? <Avatar src={photoUser} /> : <Avatar text={getUserLetters(nameUser)} />}
            <span className={styles.home_header_user_name_font} >{nameUser}</span>
            <FaUserAstronaut size={23} />
        </div>
    );
}