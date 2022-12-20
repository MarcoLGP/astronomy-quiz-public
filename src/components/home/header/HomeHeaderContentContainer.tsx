import { Row } from "@nextui-org/react";
import { stylesType } from "../../../types/styles";
import HomeHeaderUserMenu from "./HomeHeaderUserMenu";
import { FaStar } from "react-icons/fa";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { ReactElement, useState } from "react";
import HomeHeaderMobileMenu from "./HomeHeaderMobileMenu";

export default function HomeHeaderSaudationUser({ styles }: stylesType) {

    const { user } = useSelector((state: RootState) => state.sign);
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

    const levelStars: ReactElement[] = [];

    for (let index = 0; index < user.level; index++) {
        user.level;
        levelStars.push(<FaStar className={styles.home_header_star_icon} style={{ marginLeft: index === 0 ? "8px" : "2px" }} />);
    }

    return (
        <Row className={styles.home_header_content_container} align="center">
            <Row className={styles.home_header_user_menu_info} align="center">
                <span className={styles.home_header_saudation_user_font} >Nível</span>
                <div className={styles.home_header_star_icons_container}>
                    {levelStars.map(element => element)}
                </div>
                <HomeHeaderUserMenu styles={styles} nameUser={user.name} photoUser={user.photo} />
            </Row>
            <HomeHeaderMobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} styles={styles} />
        </Row>
    );
}