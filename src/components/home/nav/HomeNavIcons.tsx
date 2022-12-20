import HomeNavIcon from "./HomeNavIcon";
import { HiOutlineChartPie } from "react-icons/hi";
import { RiMedalLine } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { stylesType } from "../../../types/styles";

export default function HomeNavIcons({ styles }: stylesType) {

    return (
        <nav>
            <HomeNavIcon icon={<HiOutlineChartPie size={23} />} text={"Quizzes"} />
            <HomeNavIcon icon={<RiMedalLine size={23} />} text={"Ranking"} />
            <div className={styles.home_nav_border_divisor_bottom} />
            <HomeNavIcon exit icon={<RxExit size={23} />} text={"Sair"} />
        </nav>
    );

}