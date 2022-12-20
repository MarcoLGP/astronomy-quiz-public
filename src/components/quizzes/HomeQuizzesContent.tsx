import { Row } from "@nextui-org/react";
import HomeQuizModule from "./HomeQuizModule";
import challenge_1_img from "../../../assets/images/challenge_1.svg";
import challenge_2_img from "../../../assets/images/challenge_2.svg";
import challenge_3_img from "../../../assets/images/challenge_3.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "../../styles/Quizzes.module.css";

export default function HomeQuizzesContent() {

    const { user } = useSelector((state: RootState) => state.sign);

    return (
        <>
            <div className={styles.home_quiz_row_modules}>
                <HomeQuizModule image={challenge_1_img} level={1} text={"Desafio 1"} subtitle={"Observer"} />
                <HomeQuizModule unavailable={user.level < 2} level={2} image={challenge_2_img} text={"Desafio 2"} subtitle={"Curiosity"} />
            </div>
            <Row justify="center">
                <HomeQuizModule unavailable={user.level < 3} level={3} image={challenge_3_img} text={"Desafio 3"} subtitle={"Deep space"} />
            </Row>
        </>
    );

}