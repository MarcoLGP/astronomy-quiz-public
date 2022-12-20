import FlatList from "flatlist-react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Row } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { questionSelectedProps } from "./QuestionsContent";
import stylesChallenge from "../../styles/Challenge.module.css";
import { useDispatch } from "react-redux";
import { addQuestionSelected } from "../../redux/slices/questions";
import { useRouter } from "next/router";

interface QuestionsContentAlternativesProps {
    styles: {
        readonly [key: string]: string;
    },
    alternatives: string[],
    challengeNumber: number;
    setQuestionNumber: Dispatch<SetStateAction<number>>,
    questionNumber: number,
    time: number,
    correct: number,
    setTime: Dispatch<SetStateAction<number>>
}

export default function QuestionsContentAlternatives({ styles, alternatives, challengeNumber, questionNumber, setQuestionNumber, correct, setTime, time }: QuestionsContentAlternativesProps) {

    const dispatch = useDispatch();
    const { push } = useRouter();
    const [questionSelected, setQuestionSelected] = useState<questionSelectedProps | void>();

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
            if (time === 1) {
                if (questionSelected) dispatch(addQuestionSelected({ ...questionSelected, correct }));
                push(`/home/challenge/${challengeNumber}/end`);
            }
        }, 1000);
    }, [time]);

    function handleCheckQuestion(): void {
        if (questionSelected) {
            if (questionNumber > 3) {
                dispatch(addQuestionSelected({ ...questionSelected, correct }));
                push(`/home/challenge/${challengeNumber}/end`);
            } else {
                dispatch(addQuestionSelected({ ...questionSelected, correct }));
                setQuestionNumber(questionNumber + 1);
                setQuestionSelected();
            }
        }
    }

    function HandleAlternatives(alternative: string, index: string) {
        return (
            <div className={`${styles.handle_alternative_container} ${questionSelected?.index === parseInt(index) && styles.handle_alternative_container_selected}`} onClick={() => setQuestionSelected({ index: parseInt(index), correct })} >
                <Row align="center">
                    <div className={styles.handle_alternative_icon_container}>
                        {questionSelected?.index === parseInt(index) ? <BsFillCheckCircleFill size={18} color="#03CBD2" /> :
                            <div className={styles.handle_alternative_icon_unselected} />}
                    </div>
                    <span className={styles.handle_alternative_content_font}>{alternative}</span>
                </Row>
            </div>
        );
    }

    return (
        <>
            <FlatList
                list={alternatives}
                renderItem={HandleAlternatives}
            />
            <div className={styles.questions_footer_container}>
                <button onClick={() => handleCheckQuestion()} className={stylesChallenge.challenge_footer_right_button}>
                    Avançar
                </button>
            </div>
        </>
    );
}