import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/slices/signSlice";
import { setAuthorization } from "../../../redux/slices/app";

interface HomeHeaderMobileMenuProps {
    styles: {
        readonly [key: string]: string;
    },
    openMobileMenu: boolean,
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>
}

export default function HomeHeaderMobileMenu({ styles, openMobileMenu, setOpenMobileMenu }: HomeHeaderMobileMenuProps) {

    const { push } = useRouter();
    const dispatch = useDispatch();

    function handleExit() {
        dispatch(setAuthorization(false));
        push("/");
        localStorage.setItem("token", "");
        dispatch(logoutUser());
    }

    return (
        <div className={styles.home_header_mobile_menu_container} onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            {!openMobileMenu && <FiMenu cursor={"pointer"} size={32} color="#fff" className={styles.home_header_mobile_menu_icon_container} />}
            {openMobileMenu && <>
                <div className={styles.home_header_mobile_menu_options}>
                    <span onClick={() => push("/home/quizzes")}>Quizzes</span>
                    <span onClick={() => push("/home/ranking")}>Ranking</span>
                    <span onClick={() => handleExit()}>Sair</span>
                </div>
            </>}
        </div>
    );

}