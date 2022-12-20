import { Row } from "@nextui-org/react";
import styles from "../../styles/Sign.module.css";
import AndromedaVideo from "../../common/AndromedaVideo";
import RegisterSignContent from "./RegisterSignContent";

export default function RegisterContent() {

    return (
        <Row className={styles.home_sign_content_container}>
            <div className={styles.home_sign_content_container_andromeda_side}>
                <AndromedaVideo style={styles.register_content_andromeda_video} />
            </div>
            <RegisterSignContent styles={styles} />
        </Row>
    );

}