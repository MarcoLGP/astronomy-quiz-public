import { useRouter } from "next/router";
import styles from "../../styles/Challenge.module.css";
import { challengesData } from "../../challenges/challengesData";

export default function ChallengeContent() {

    const { push, query } = useRouter();

    return (
        <>
            <div className={styles.challenge_title_container}>
                <h2 className={styles.challenge_title_font}>Desafio {query.number}</h2>
            </div>
            <div className={styles.challenge_title_line_divisor} />
            <div className={styles.challenge_content}>
                <span className={styles.challenge_subtitle_font}>RESUMO</span>
                <p className={styles.challenge_content_font}>{challengesData[parseInt(query.number as string) - 1].resume}</p>
            </div>
            <div className={styles.challenge_footer_container}>
                <button className={styles.challenge_footer_left_button} onClick={() => push("/home/quizzes")}>Abortar</button>
                <button className={styles.challenge_footer_right_button} onClick={() => push(`/home/challenge/${query.number}/questions`)}>Começar</button>
            </div>
        </>
    );

}