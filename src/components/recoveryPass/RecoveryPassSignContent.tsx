import { Row } from "@nextui-org/react";
import OrSignSocial from "../../common/OrSignSocial";
import { stylesType } from "../../types/styles";
import RecoveryPassForm from "./RecoveryPassForm";
import { useRouter } from "next/router";

export default function RecoveryPassSignContent({ styles }: stylesType) {

    const { push } = useRouter();

    return (
        <div className={styles.home_sign_content_container_form_side}>
            <div className={styles.box_sign_container}>
                <h1 className={styles.box_sign_title}>Recuperar senha</h1>
                <RecoveryPassForm styles={styles} />
                <OrSignSocial text="Ou entre com" />
                <Row className={styles.box_sign_no_account_font_container} align="center" justify="center">
                    <span>Voltar e fazer</span>
                    <span onClick={() => push("/")} >Login</span>
                </Row>
            </div>
        </div>
    );
}