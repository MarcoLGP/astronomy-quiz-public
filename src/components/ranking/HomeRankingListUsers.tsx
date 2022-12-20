import { Avatar, Row } from "@nextui-org/react";
import { ReactElement } from "react";
import FlatList from "flatlist-react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { userProps } from "../../redux/slices/signSlice";
import { stylesType } from "../../types/styles";

export default function HomeRankingListUsers({ styles }: stylesType) {

    const { users } = useSelector((state: RootState) => state.ranking);

    function handleUser({ photo, name, level }: userProps) {

        const levelStars: ReactElement[] = [];

        for (let index = 0; index < level; index++) {
            levelStars.push(<FaStar size={12} />);
        }

        function getUserLetters(name: string) {
            const nameSplitted: string[] = name.toUpperCase().split(" ");
            if (name.includes(" ")) {
                return nameSplitted[0][0] + nameSplitted[1][0];
            } else {
                return nameSplitted[0][0] + nameSplitted[0][1];
            }
        }

        return (
            <Row align="center" className={styles.home_ranking_list_handle_user_container}>
                <div className={styles.home_ranking_list_handle_user_avatar_container}>
                    <Avatar src={photo ?? undefined} text={!photo ? getUserLetters(name) : undefined} css={{ size: "$17" }} bordered />
                </div>
                <span className={styles.home_ranking_list_handle_user_name_font} >{name}</span>
                {levelStars.map(element => element)}
            </Row>
        );
    }

    return (
        <FlatList
            list={users}
            wrapperHtmlTag="div"
            className={styles.home_rankink_list_users_container}
            renderItem={handleUser}
        />
    );

}