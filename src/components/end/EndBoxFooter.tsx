import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { checkResultOutput } from "./checkResult";

interface EndBoxFooterProps {
    styles: {
        readonly [key: string]: string;
    },
    result: checkResultOutput | undefined;
    challengeNumber: number;
}

export default function EndBoxFooter({ styles, result, challengeNumber }: EndBoxFooterProps) {

    const { push } = useRouter();

    function HandleVisibleButton() {
        if (challengeNumber > 2 && result?.result) return null;
        else return <button onClick={() => push(result?.result ? `/home/challenge/${challengeNumber + 1}/start` : `/home/challenge/${challengeNumber}/start`)} className={styles.box_end_footer_next_challenge_btn}>{result?.result ? "Próximo desafio" : "Tentar novamente"}</button>;
    }

    return (
        <>
            <div className={styles.box_end_title_divisor} />
            <Row align="center" justify="space-between" className={styles.box_end_footer_container}>
                <button onClick={() => push("/home/quizzes")} className={styles.box_end_footer_menu_btn}>Menu</button>
                <HandleVisibleButton />
            </Row>
        </>
    );

}