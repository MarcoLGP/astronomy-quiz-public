import { Row } from "@nextui-org/react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface QuestionsContentSubtitleProps {
    styles: {
        readonly [key: string]: string;
    },
    questionNumber: number,
    time: number
}

export default function QuestionsContentContainerSubtitle({ styles, questionNumber, time }: QuestionsContentSubtitleProps) {

    return (
        <Row align="center" justify="space-between">
            <span className={styles.questions_content_subtitle_font_questions_left}>{5 - questionNumber} perguntas restantes</span>
            <Row align="center" style={{ width: "auto" }}>
                <span className={styles.questions_content_subtitle_font_time_left}>Tempo restante</span>
                <CircularProgressbar maxValue={160} value={time} text={`${time}s`}
                    styles={{ root: { height: 45, width: 45 }, path: { stroke: "#29BCC7" }, text: { fill: "#fff", fontSize: 32 }, trail: { stroke: "#494E68" } }} />
            </Row>
        </Row>
    );

}