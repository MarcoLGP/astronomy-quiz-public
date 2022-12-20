import { Progress } from "@nextui-org/react";

interface QuestionsContentTileProps {
    styles: {
        readonly [key: string]: string;
    },
    questionNumber: number
}

export default function QuestionsContentTitle({ styles, questionNumber }: QuestionsContentTileProps) {
    return (
        <div className={styles.questions_title_container}>
            <h2 className={styles.questions_title_font} >Questão {questionNumber + 1}</h2>
            <div className={styles.questions_total_percentage_container}>
                <span style={{ marginBottom: 3 }}>{questionNumber * 20}% concluído</span>
                <Progress className={styles.questions_total_progress}
                    size="xs" css={{ "bgColor": "#494E68" }} color={"secondary"}
                    animated value={questionNumber * 20} max={100} />
            </div>
        </div>
    );
}