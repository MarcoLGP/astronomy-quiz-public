import HomeHeaderSaudationUser from "../../components/home/header/HomeHeaderContentContainer";
import styles from "../../styles/Home.module.css";

export default function HomeHeader() {
    return (       
            <div className={styles.home_header_container}>
                <HomeHeaderSaudationUser styles={styles} />
            </div>
    );
}