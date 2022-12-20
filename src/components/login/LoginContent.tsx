import { Row } from "@nextui-org/react";
import styles from "../../styles/Sign.module.css";
import Login from "./LoginSignContent";
import AndromedaVideo from "../../common/AndromedaVideo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LoginContent() {
    const { push } = useRouter();
    const [authorizate, setAuthorizate] = useState<boolean>();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            push("/home/quizzes");
        } else setAuthorizate(true);
    }, []);

    return (
        <>
            {authorizate && <Row className={styles.home_sign_content_container}>
                <Login styles={styles} />
                <div className={styles.home_sign_content_container_andromeda_side}>
                    <AndromedaVideo style={styles.home_sign_content_andromeda_video} />
                </div>
            </Row>}
        </>
    );

}