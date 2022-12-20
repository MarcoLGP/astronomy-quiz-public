import { Row } from "@nextui-org/react";
import Image from "next/image";
import rocket_img from "../../../assets/images/rocket.svg";
import sad_img from "../../../assets/images/sad.svg";
import { EndBoxProps } from "./EndContent";

export default function EndBoxTitle({ styles, result }: EndBoxProps) {

    return (
        <>
            <Row align="center" className={styles.box_end_title_container}>
                <h2 className={styles.box_end_title_font}>{result?.result ? "Parabéns, você conseguiu" : "Pontuação insuficiente"}</h2>
                <Image style={{ marginLeft: 10, marginBottom: 5 }} src={result?.result ? rocket_img : sad_img} height={30} width={30} alt={"Imagem de um foguete"} />
            </Row>
            <div className={styles.box_end_title_divisor} />
        </>


    );

}