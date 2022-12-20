import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import SignLayout from "../../layout/SignLayout";
import ChangePassContent from "../../components/changePass/ChangePassContent";
import { useRouter } from "next/router";
import axios from "../../common/axios";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setRecoveryPassLog, setSignLog } from "../../redux/slices/signSlice";
import { Loading, Row } from "@nextui-org/react";
import styles from "../../styles/Sign.module.css";

const ChangePass: NextPageWithLayout = () => {
    const { query, push } = useRouter();
    const token = query.token;
    const [authorize, setAuthorize] = useState<boolean>();
    const dispatch = useDispatch();

    function LoadingResponse() {
        return (
            <Row align="center" justify="center">
                <Loading size="lg" className={styles.icon_loading_response_container} />
            </Row>
        );
    }

    useEffect(() => {
        if (token) axios.post("/checkTokenUserUpdatePass", { token })
            .then((res: AxiosResponse) => {
                switch (res.status) {
                    case 200:
                        setAuthorize(true);
                        break;
                }
            }).catch((err: AxiosError) => {
                if (isAxiosError(err)) {
                    switch (err.response?.status) {
                        case 498:
                            dispatch(setRecoveryPassLog("Link inválido, tente recuperar novamente"));
                            push("/recoveryPass");
                            break;
                        case 401:
                            dispatch(setRecoveryPassLog("Link já utilizado, tente recuperar novamente"));
                            push("/recoveryPass");
                            break;
                        default:
                            dispatch(setSignLog("Houve um erro interno, acesse o link novamente mais tarde, ou gere um novo"));
                            push("/");
                            break;
                    }
                }
            });
    }, [token]);

    return (
        <>
            {authorize ? <ChangePassContent /> : <LoadingResponse />}
        </>
    );
};

ChangePass.getLayout = function getLayout(page: ReactElement) {
    return (
        <SignLayout>
            {page}
        </SignLayout>
    );
};

export default ChangePass;