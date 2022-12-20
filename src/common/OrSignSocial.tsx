import { Row } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import styles from "../styles/Common.module.css";

interface orSignSocialProps {
    text: string
}

export default function OrSignSocial({ text }: orSignSocialProps) {

    return (
        <div style={{ width: "100%" }}>
            <Row align="center" justify="center" className={styles.box_sign_social_sign_line_container}>
                <div className={styles.box_sign_social_sign_line} />
                <span className={styles.box_sign_with_social_font} >{text}</span>
                <div className={styles.box_sign_social_sign_line} />
            </Row>
            <Row align="center" justify="center" onClick={() => signIn("google", { callbackUrl: "https://astromy-quiz.vercel.app/callbacksignsocial/google" })} className={styles.box_sign_social_buttons_container}>
                <Row align="center" justify="center" className={styles.box_sign_social_button_google}>
                    <FaGoogle size={30} style={{ marginRight: 10 }} />
                </Row>
                <Row align="center" justify="center" onClick={() => signIn("linkedin", { callbackUrl: "https://astromy-quiz.vercel.app/callbacksignsocial/linkedin" })} className={styles.box_sign_social_button_linkedin}>
                    <FaLinkedin size={39} style={{ marginRight: 10 }} />
                </Row>
                <Row onClick={() => signIn("github", { callbackUrl: "https://astromy-quiz.vercel.app/callbacksignsocial/github" })} align="center" justify="center" className={styles.box_sign_social_button_github}>
                    <FaGithub size={40} style={{ marginRight: 10 }} />
                </Row>
            </Row>
        </div>
    );

}