import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "../common/axios";
import AuthProvider from "../components/AuthProvider";
import { setAllUsers } from "../redux/slices/ranking";
import HomeHeader from "./home/HomeHeader";
import HomeNav from "./home/HomeNav";
import { ChildrenInterface } from "./SignLayout";

export default function HomeLayout({ children }: ChildrenInterface) {

    const dispatch = useDispatch();
    const {push} = useRouter();

    useEffect(() => {
        axios.get("/getAllUsers")
            .then((res: AxiosResponse) => {
                switch (res.status) {
                    case 200:
                        dispatch(setAllUsers(res.data.users));
                        break;
                }  
            }).catch(() => {
                push("/");
            });
    },[]);

    return (
        <AuthProvider>
            <div className="home_app_layout">
                <header>
                    <HomeHeader />
                </header>
                <aside>
                    <HomeNav />
                </aside>
                <main>
                    {children}
                </main>
            </div>
        </AuthProvider>
    );

}