import Image from "next/image";
import styles from "../../styles/Quizzes.module.css";
import { useRouter } from "next/router";

interface homeQuizModuleProps {
    image: string,
    text: string,
    subtitle: string,
    unavailable?: boolean,
    level: number
}

export default function HomeQuizModule({ image, text, subtitle, unavailable, level }: homeQuizModuleProps) {

    const { push } = useRouter();

    return (
        <div onClick={() => !unavailable && push(`/home/challenge/${level}/start`)} className={`${styles.home_quiz_module_container} ${unavailable && styles.home_quiz_module_unavailable}`}>
            <div style={{ width: "40%" }} >
                <h3 className={styles.home_quiz_module_title}>{text}</h3>
                <h4 className={styles.home_quiz_module_subtite}>{subtitle}</h4>
            </div>
            <Image className={styles.home_quiz_module_img} alt="Imagem do quiz" src={image} />
        </div>
    );

}