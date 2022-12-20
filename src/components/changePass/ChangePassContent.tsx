import { Row } from "@nextui-org/react";
import AndromedaVideo from "../../common/AndromedaVideo";
import styles from "../../styles/Sign.module.css";
import ChangePassSignContent from "./ChangePassSignContent";

export default function ChangePassContent() {
    return (
        <Row className={styles.home_sign_content_container}>
            <div className={styles.home_sign_content_container_andromeda_side}>
                <AndromedaVideo style={styles.register_content_andromeda_video} />
            </div>
            <ChangePassSignContent styles={styles} />
        </Row>
    );
}