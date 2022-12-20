import HomeNavIcons from "../../components/home/nav/HomeNavIcons";
import styles from "../../styles/Home.module.css";

export default function HomeNav() {

    return (
        <div className={styles.home_nav_container}>
            <h1 className={styles.home_nav_title_font}>Astronomy Quiz</h1>
            <div className={styles.home_nav_border_divisor_top} />
            <HomeNavIcons styles={styles} />
        </div>
    );

}