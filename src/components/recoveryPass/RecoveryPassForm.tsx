import { useForm } from "react-hook-form";
import { stylesType } from "../../types/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AlertOnValid from "../../common/AlertOnValid";
import { useEffect, useState } from "react";
import axios from "../../common/axios";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearRecoveryPassLog } from "../../redux/slices/signSlice";

type formRecoveryProps = {
    Email: string;
}

export default function RecoveryPassForm({ styles }: stylesType) {

    const [failResHelper, setFailResHelper] = useState<string>();
    const [successResHelper, setSuccessResHelper] = useState<string>();
    const { recoveryPassLog } = useSelector((state: RootState) => state.sign);
    const dispatch = useDispatch();

    const validation = yup.object().shape({
        Email: yup.string().required("Digite um e-mail").email("Digite um e-mail válido"),
    });

    const { handleSubmit, register, formState: { errors } } = useForm<formRecoveryProps>({
        resolver: yupResolver(validation)
    });

    useEffect(() => {
        return () => {
            if (recoveryPassLog) {
                dispatch(clearRecoveryPassLog());
            }
        };
    });

    function onValidForm({ Email }: formRecoveryProps) {
        if (recoveryPassLog) dispatch(clearRecoveryPassLog());
        setFailResHelper("");
        setSuccessResHelper("");
        axios.post("/recoveryPassGetToken", { email: Email })
            .then((res: AxiosResponse) => {
                switch (res.status) {
                    case 200:
                        setSuccessResHelper("E-mail enviado");
                        break;
                }
            }).catch((err: AxiosError) => {
                if (isAxiosError(err)) {
                    switch (err.response?.status) {
                        case 401:
                            setFailResHelper("E-mail cadastrado por registro social");
                            break;
                        case 404:
                            setFailResHelper("E-mail não cadastrado");
                            break;
                        default:
                            setFailResHelper("Houve um problema, tente novamente");
                            break;
                    }
                }
            });
    }

    return (
        <form style={{ marginTop: 25 }} className={styles.box_sign_form_container} onSubmit={handleSubmit(onValidForm)}>
            <input {...register("Email")} name={"Email"} placeholder="E-mail" className={styles.input_sign} />
            <AlertOnValid message={errors.Email?.message || failResHelper || successResHelper || recoveryPassLog} success={successResHelper ? true : false} />
            <button className={styles.box_sign_submit_btn} type="submit">Recuperar senha</button>
        </form>
    );
}