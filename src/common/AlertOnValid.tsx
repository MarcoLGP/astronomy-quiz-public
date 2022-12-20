import { AiFillCloseCircle } from "react-icons/ai";
import { Row } from "@nextui-org/react";
import styles from "../styles/Common.module.css";
import { BsCheckCircleFill } from "react-icons/bs";

interface alertOnValidProps {
    message: string | undefined,
    success?: boolean
}

export default function AlertOnValid({ message, success }: alertOnValidProps) {

    return (
        <> {message && <Row align="center" className={success ? styles.alert_on_valid_success_container : styles.alert_on_valid_fail_container}>
            {success ? <BsCheckCircleFill size={20} color={"#52C41A"} /> :
                <AiFillCloseCircle size={20} color={"#FF6163"} />}
            <p>{message}</p>
        </Row>}
        </>
    );

}