import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/slices/signSlice";
import styles from "../../../styles/Home.module.css";
import { setAuthorization } from "../../../redux/slices/app";

interface HomeNavIconProps {
    icon: JSX.Element,
    text: string,
    exit?: boolean
}

export default function HomeNavIcon({ icon, text, exit }: HomeNavIconProps) {

    const { asPath, push } = useRouter();
    const dispatch = useDispatch();

    function checkRoute() {
        if (asPath.includes(`/home/${text.toLowerCase()}`)) return styles.home_nav_selected;
        else return "";
    }

    function handleClick() {
        if (exit) {
            dispatch(setAuthorization(false));
            push("/");
            localStorage.setItem("token", "");
            dispatch(logoutUser());
        } else {
            push(`/home/${text.toLowerCase()}`);
        }
    }

    return (
        <Row onClick={() => handleClick()} align="center" className={`${styles.home_nav_icon_container} ${checkRoute()}`}>
            <div className={styles.home_nav_icon}>
                {icon}
            </div>
            <span className={styles.home_nav_font_menu}>{text}</span>
        </Row>
    );

}