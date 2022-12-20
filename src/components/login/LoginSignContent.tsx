import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import OrSignSocial from "../../common/OrSignSocial";
import { stylesType } from "../../types/styles";
import LoginForm from "./LoginForm";

export default function HomeSignIn({ styles }: stylesType) {

    const { push } = useRouter();

    return (
        <div className={styles.home_sign_content_container_form_side}>
            <div className={styles.box_sign_container}>
                <h1 className={styles.box_sign_title}>Astronomy Quiz</h1>
                <LoginForm styles={styles} />
                <OrSignSocial text="Ou entre com" />
                <Row align="center" justify="center" className={styles.box_sign_no_account_font_container}>
                    <span>Não possui uma conta ?</span>
                    <span onClick={() => push("/register")} >Registre-se</span>
                </Row>
            </div>
        </div>
    );

}