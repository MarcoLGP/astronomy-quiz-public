import { stylesType } from "../../types/styles";
import OrSignSocial from "../../common/OrSignSocial";
import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import RegisterForm from "./RegisterForm";

export default function RegisterSignContent({ styles }: stylesType) {

    const { push } = useRouter();

    return (
        <div className={styles.home_sign_content_container_form_side}>
            <div className={styles.box_sign_container}>
                <h1 className={styles.box_sign_title}>Registro</h1>
                <RegisterForm styles={styles} />
                <OrSignSocial text="Ou registre com" />
                <Row align="center" justify="center" className={styles.box_sign_no_account_font_container}>
                    <span>Já possui uma conta ?</span>
                    <span onClick={() => push("/")} >Entrar</span>
                </Row>
            </div>
        </div>
    );

}