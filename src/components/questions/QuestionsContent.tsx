import styles from "../../styles/Questions.module.css";
import QuestionsContentTitle from "./QuestionsContentTitle";
import QuestionsContentContainerSubtitle from "./QuestionsContentSubtitle";
import QuestionsContentAlternatives from "./QuestionsContentAlternatives";
import { challengesData } from "../../challenges/challengesData";
import { useRouter } from "next/router";
import { useState } from "react";

export type questionSelectedProps = {
    index: number, correct: number
}

export default function QuestionsContent() {
    const { query } = useRouter();
    const challengeNumber = parseInt(query.number as string);
    const challengeData = challengesData[challengeNumber - 1];
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [time, setTime] = useState<number>(180);

    return (
        <>
            <QuestionsContentTitle questionNumber={questionNumber} styles={styles} />
            <div className={styles.questions_title_line_divisor} />
            <div className={styles.questions_content}>
                <QuestionsContentContainerSubtitle time={time} questionNumber={questionNumber} styles={styles} />
                <p className={styles.questions_content_font}>
                    {challengeData.questions[questionNumber].title}
                </p>
                <QuestionsContentAlternatives
                    setTime={setTime}
                    time={time}
                    challengeNumber={challengeNumber}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                    correct={challengeData.questions[questionNumber].correct}
                    alternatives={challengeData.questions[questionNumber].alternatives}
                    styles={styles} />
            </div>
        </>
    );
}