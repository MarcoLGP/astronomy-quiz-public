import { useForm } from "react-hook-form";
import { stylesType } from "../../types/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "../../common/axios";
import { AxiosResponse } from "axios";
import AlertOnValid from "../../common/AlertOnValid";

type formChangePassProps = {
    Password: string;
    Password2: string;
}

export default function ChangePassForm({ styles }: stylesType) {

    const { push, query } = useRouter();
    const token = query.token;
    const [resFailHelper, setResFailHelper] = useState<string>();

    const validation = yup.object().shape({
        Password: yup.string().required("Digite uma senha").min(8, "Digite uma senha acima de 8 caracteres ").max(40, "Digite uma senha de até 40 caracteres"),
        Password2: yup.string().required("Digite uma senha").min(8, "Digite uma senha acima de 8 caracteres").max(40, "Digite uma senha de até 40 caracteres")
    });

    const { handleSubmit, register, formState: { errors } } = useForm<formChangePassProps>({
        resolver: yupResolver(validation)
    });

    function onValidForm({ Password, Password2 }: formChangePassProps) {
        setResFailHelper("");
        if (Password !== Password2) {
            setResFailHelper("Senhas não correspondentes");
        } else {
            axios.post("/updateUserPass", { token, password: Password })
                .then((res: AxiosResponse) => {
                    switch (res.status) {
                        case 200:
                            push("/");
                            break;
                    }
                })
                .catch(() => setResFailHelper("Houve um erro interno, tente novamente"));
        }
    }

    return (
        <form style={{ marginTop: 10 }} className={styles.box_sign_form_container} onSubmit={handleSubmit(onValidForm)}>
            <input {...register("Password")} name={"Password"} placeholder="Nova senha" className={styles.input_sign} type="password" />
            <input {...register("Password2")} name={"Password2"} placeholder="Confirmar nova senha" className={styles.input_sign} type="password" />
            <AlertOnValid message={errors.Password?.message?.toString() || errors.Password2?.message?.toString() || resFailHelper} />
            <button className={styles.box_sign_submit_btn} type="submit">Trocar de senha</button>
        </form>
    );

}