import { stylesType } from "../../types/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import AlertOnValid from "../../common/AlertOnValid";
import { useState } from "react";
import axios from "../../common/axios";
import { AxiosResponse, AxiosError, isAxiosError } from "axios";
import { useRouter } from "next/router";

type formSignUpProps = {
    Name: string, Email: string, Password: string
}

export default function RegisterForm({ styles }: stylesType) {

    const [resHelper, setResHelper] = useState<string>();
    const { push } = useRouter();

    const validation = yup.object().shape({
        Name: yup.string().required("Digite um nome").min(8, "Digite um nome acima de 8 caracteres").max(40, "Digite um nome abaixo de 40 caracteres"),
        Email: yup.string().required("Digite um e-mail").email("Digite um e-mail válido"),
        Password: yup.string().required("Digite uma senha")
    });

    const { handleSubmit, register, formState: { errors } } = useForm<formSignUpProps>({
        resolver: yupResolver(validation)
    });

    function onValidForm(datas: formSignUpProps) {
        setResHelper("");
        axios.post("/signUp", { name: datas.Name, email: datas.Email, password: datas.Password })
            .then((res: AxiosResponse) => {
                switch (res.status) {
                    case 201:
                        localStorage.setItem("token", res.data.token);
                        push("/home/quizzes");
                        break;
                }
            })
            .catch((err: Error | AxiosError) => {
                if (isAxiosError(err)) {
                    switch (err.response?.status) {
                        case 409:
                            setResHelper("E-mail sendo utilizado");
                            break;
                    }
                }
            });
    }

    return (
        <form className={styles.box_sign_form_container} onSubmit={handleSubmit(onValidForm)}>
            <input {...register("Name")} name={"Name"} placeholder="Nome" className={styles.input_sign} />
            <input {...register("Email")} name={"Email"} placeholder="E-mail" className={styles.input_sign} />
            <input type={"password"} {...register("Password")} name={"Password"} placeholder="Senha" className={styles.input_sign} />
            <AlertOnValid message={errors?.Name?.message?.toString() || errors?.Email?.message?.toString() || errors?.Password?.message?.toString() || resHelper} />
            <button className={styles.box_sign_submit_btn} type="submit">Registrar</button>
        </form>
    );

}