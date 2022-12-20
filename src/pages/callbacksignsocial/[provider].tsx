import { Loading, Row } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "../../common/axios";
import { Cryptography } from "../../common/cryptography";
import jwt from "jsonwebtoken";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setSignLog } from "../../redux/slices/signSlice";

export default function Callbacksignsocial() {

    const { data, status } = useSession();
    const { query, push } = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (query.provider === "google" || query.provider === "linkedin" || query.provider === "github") {
            if (status === "authenticated") {
                const token = new Cryptography().encrypt(jwt.sign({ email: data.user?.email, provider: query.provider, name: data.user?.name }, process.env.NEXT_PUBLIC_JWT_SECRET || "MISSING", { expiresIn: "1h" }));
                axios.post("/getUserSocial", { token })
                    .then((res: AxiosResponse) => {
                        switch (res.status) {
                            case 200:
                            case 201:
                                localStorage.setItem("token", res.data.token);
                                push("/home/quizzes");
                                break;
                        }
                    }).catch((err: AxiosError) => {
                        if (isAxiosError(err)) {
                            switch (err.response?.status) {
                                case 403: // another provider sign
                                    dispatch(setSignLog("Cadastrado por outro registro social"));
                                    push("/");
                                    break;
                                case 500:
                                    push("/");
                                    dispatch(setSignLog("Desculpe houve um erro interno, tente novamente."));
                                    break;
                            }
                        }
                    });
            }
        }
    }, [status]);

    return (
        <Row css={{ height: "100vh" }} align="center" justify="center">
            <Loading size="lg" />
        </Row>
    );

}