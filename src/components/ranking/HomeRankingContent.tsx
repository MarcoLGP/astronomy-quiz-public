import styles from "../../styles/Ranking.module.css";
import HomeRankingBoxTitle from "./HomeRankingBoxTitle";
import HomeRankingListUsers from "./HomeRankingListUsers";

export default function HomeRankingContent() {

    return (
        <div className={styles.home_ranking_container} >
            <div className={styles.home_ranking_box_container}>
                <HomeRankingBoxTitle styles={styles}  />
                <HomeRankingListUsers styles={styles} />
            </div>
        </div>
    );
}