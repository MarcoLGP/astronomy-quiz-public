import { Loading } from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../common/axios";
import { Cryptography } from "../../common/cryptography";
import { clearQuestions } from "../../redux/slices/questions";
import { updateLevelUser } from "../../redux/slices/signSlice";
import { RootState } from "../../redux/store";
import styles from "../../styles/End.module.css";
import { CheckResult, checkResultOutput } from "./checkResult";
import EndBoxContent from "./EndBoxContent";
import EndBoxFooter from "./EndBoxFooter";
import EndBoxTitle from "./EndBoxTitle";

export interface EndBoxProps {
    styles: {
        readonly [key: string]: string;
    },
    result: checkResultOutput | undefined;
}

export default function EndContent() {

    const { questionsSelecteds } = useSelector((state: RootState) => state.questions);
    const { user } = useSelector((state: RootState) => state.sign);
    const { push, query } = useRouter();
    const [result, setResult] = useState<checkResultOutput>();
    const dispatch = useDispatch();
    const challengeNumber: number = parseInt(query.number as string);

    useEffect(() => {
        if (questionsSelecteds.length === 0) {
            push(`home/challenge/${challengeNumber}/start`);
        } else {
            const checkResultInstance = new CheckResult(questionsSelecteds);
            checkResultInstance.checkAlternatives();
            checkResultInstance.checkResult()
                .then((result_res: checkResultOutput) => {
                    if (result_res.result && (user.level === challengeNumber) && (user.level !== 3)) {
                        const encrypted_id = new Cryptography().encrypt(user.id);
                        axios.post("/updateLevelUser", { id: encrypted_id })
                            .then((res: AxiosResponse) => {
                                switch (res.status) {
                                    case 200:
                                        dispatch(updateLevelUser(user.level + 1));
                                        localStorage.setItem("token", res.data.token);
                                        break;
                                }
                            });
                    }
                    dispatch(clearQuestions());
                    setResult(result_res);
                });
        }
    }, []);

    return (
        <>
            {typeof result !== undefined ? <>
                <EndBoxTitle result={result} styles={styles} />
                <EndBoxContent result={result} styles={styles} />
                <EndBoxFooter result={result} styles={styles} challengeNumber={challengeNumber} />
            </> :
                <div className={styles.loading_result_end_container}>
                    <span>Carregando resultado</span>
                    <Loading style={{ margin: 5 }} type="spinner" color={"primary"} size="lg" />
                </div>}
        </>
    );

}