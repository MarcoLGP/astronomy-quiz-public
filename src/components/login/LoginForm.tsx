import { stylesType } from "../../types/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import AlertOnValid from "../../common/AlertOnValid";
import { useEffect, useState } from "react";
import axios from "../../common/axios";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearSignLog } from "../../redux/slices/signSlice";

type formSignInProps = {
    Email: string,
    Password: string;
}

export default function LoginForm({ styles }: stylesType) {

    const [resHelper, setResHelper] = useState<string>();
    const { push } = useRouter();
    const { signLog } = useSelector((state: RootState) => state.sign);
    const dispatch = useDispatch();

    function handleButtonSignInClick() {
        if (signLog) dispatch(clearSignLog());
    }

    const validation = yup.object().shape({
        Email: yup.string().required("Digite um e-mail").email("Digite um e-mail válido"),
        Password: yup.string().required("Digite uma senha")
    });

    const { handleSubmit, register, formState: { errors } } = useForm<formSignInProps>({
        resolver: yupResolver(validation)
    });

    useEffect(() => {
        return () => {
            if (signLog) dispatch(clearSignLog());
        };
    }, []);

    function onValidForm(datas: formSignInProps) {
        resHelper && setResHelper("");
        axios.post("/signIn", { email: datas.Email, password: datas.Password })
            .then((res: AxiosResponse) => {
                switch (res.status) {
                    case 200:
                        localStorage.setItem("token", res.data.token);
                        push("/home/quizzes");
                        break;
                }
            })
            .catch((err: Error | AxiosError) => {
                if (isAxiosError(err)) {
                    switch (err.response?.status) {
                        case 403:
                            setResHelper("Autenticação inválida");
                            break;
                        case 404:
                            setResHelper("E-mail não cadastrado");
                            break;
                    }
                }
            });
    }

    return (
        <form className={styles.box_sign_form_container} onSubmit={handleSubmit(onValidForm)}>
            <input {...register("Email")} name={"Email"} placeholder="E-mail" className={styles.input_sign} />
            <input {...register("Password")} name={"Password"} placeholder="Senha" className={styles.input_sign} type="password" />
            <AlertOnValid message={errors?.Email?.message?.toString() || errors?.Password?.message?.toString() || resHelper || signLog} />
            <span onClick={() => push("/recoveryPass")} className={styles.box_sign_form_forgot_pass_font}>Esqueci a minha senha</span>
            <button className={styles.box_sign_submit_btn} onClick={() => handleButtonSignInClick()} type="submit">Entrar</button>
        </form>
    );

}