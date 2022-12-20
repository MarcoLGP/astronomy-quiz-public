import { Row } from "@nextui-org/react";
import OrSignSocial from "../../common/OrSignSocial";
import { stylesType } from "../../types/styles";
import ChangePassForm from "./ChangePassForm";
import { useRouter } from "next/router";

export default function ChangePassSignContent({ styles }: stylesType) {
    const { push } = useRouter();

    return (
        <div className={styles.home_sign_content_container_form_side}>
            <div className={styles.box_sign_container}>
                <h1 className={styles.box_sign_title}>Alterar senha</h1>
                <ChangePassForm styles={styles} />
                <OrSignSocial text="Ou entre com" />
                <Row align="center" justify="center" className={styles.box_sign_no_account_font_container}>
                    <span>Voltar e fazer</span>
                    <span onClick={() => push("/register")} >Login</span>
                </Row>
            </div>
        </div>
    );
}