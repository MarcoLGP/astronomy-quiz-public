import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../common/axios";
import { Cryptography } from "../common/cryptography";
import { setSignLog, setUser } from "../redux/slices/signSlice";
import { useRouter } from "next/router";
import { userFromJWT } from "../types/jsonwebtoken/userFromJWT";
import { setAuthorization } from "../redux/slices/app";
import { RootState } from "../redux/store";

interface AuthProviderProps {
    children: JSX.Element
}

export default function AuthProvider({ children }: AuthProviderProps) {

    const cryptoInstance = new Cryptography();
    const dispatch = useDispatch();
    const { push } = useRouter();
    const { authorization } = useSelector((state: RootState) => state.app);

    useEffect(() => {
        const token: string | null = localStorage.getItem("token");

        if (token) {
            axios.post("/getUser", { token })
                .then((res: AxiosResponse) => {
                    switch (res.status) {
                        case 200:
                            userFromJWT(cryptoInstance.decrypt(token))
                                .then(user => {
                                    if (user) {
                                        dispatch(setUser(user));
                                        dispatch(setAuthorization(true));
                                    }
                                    else {
                                        push("/");
                                        dispatch(setSignLog("Houve um problema interno"));
                                    }
                                });
                            break;
                        default:
                            push("/");
                            dispatch(setSignLog("Houve um problema interno"));
                            break;
                    }
                }).catch((err: Error | AxiosError) => {
                    if (isAxiosError(err)) {
                        push("/");
                        dispatch(setSignLog("Houve um problema interno"));
                    }
                });
        } else {
            push("/");
            dispatch(setSignLog("Faça login novamente"));
        }
    }, []);

    return (
        <>
            {authorization ? children : null}
        </>
    );

}