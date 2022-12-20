import { Row } from "@nextui-org/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setChangeOrderAllUsers } from "../../redux/slices/ranking";
import { RootState } from "../../redux/store";
import { stylesType } from "../../types/styles";

export default function HomeRankingBoxTitle({ styles }: stylesType) {

    const { changeOrder } = useSelector((state: RootState) => state.ranking);
    const dispatch = useDispatch();

    return (
        <Row align="center" justify="space-between" className={styles.home_ranking_box_title_container}>
            <h3 className={styles.home_ranking_box_title}>Top jogadores</h3>
            <div className={styles.home_ranking_box_filter_container} onClick={() => dispatch(setChangeOrderAllUsers())}>
                {changeOrder ?
                    <>
                        <span className={styles.home_ranking_box_filter_font} >Menor nível</span>
                        <FiChevronDown size={20} />
                    </> :
                    <>
                        <span className={styles.home_ranking_box_filter_font} >Maior nível</span>
                        <FiChevronUp size={20} />
                    </>}
            </div>
        </Row>
    );
}