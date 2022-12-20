import Image from "next/image";
import challenge_1_img from "../../../assets/images/challenge_1.svg";
import { EndBoxProps } from "./EndContent";

export default function EndBoxContent({ styles, result }: EndBoxProps) {

    return (
        <div className={styles.end_box_content_container}>
            <Image src={challenge_1_img} height={170} width={170} alt="Imagem do desafio" />
            <span className={styles.end_box_content_score_font}>{result?.result ? `Acertou ${result.result_counter} das 5 questões` : "Acertou menos de 3 questões"}</span>
        </div>
    );

}