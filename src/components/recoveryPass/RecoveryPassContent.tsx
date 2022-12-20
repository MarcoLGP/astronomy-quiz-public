import { Row } from "@nextui-org/react";
import AndromedaVideo from "../../common/AndromedaVideo";
import styles from "../../styles/Sign.module.css";
import RecoveryPassSignContent from "./RecoveryPassSignContent";

export default function RecoveryPassContent() {

    return (
        <Row className={styles.home_sign_content_container}>
            <RecoveryPassSignContent styles={styles} />
            <div className={styles.home_sign_content_container_andromeda_side}>
                <AndromedaVideo style={styles.home_sign_content_andromeda_video} />
            </div>
        </Row>
    );

}