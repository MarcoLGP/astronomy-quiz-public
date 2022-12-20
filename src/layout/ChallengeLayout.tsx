import { ChildrenInterface } from "./SignLayout";
import HomeHeader from "../layout/home/HomeHeader";
import AuthProvider from "../components/AuthProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import styles from "../styles/Challenge.module.css";

export default function ChallengeLayout({ children }: ChildrenInterface) {

    const { query, push } = useRouter();
    const { user } = useSelector((state: RootState) => state.sign);
    const [autorizateLevelUser, setAutorizateLevelUser] = useState<boolean>();

    useEffect(() => {
        if (user) {
            if (user.level < parseInt(query.number as string)) {
                push("/home/quizzes");
            } else {
                setAutorizateLevelUser(true);
            }
        }
    }, [user]);

    return (
        <AuthProvider>
            {autorizateLevelUser ? <div className={"challenge_app_container"}>
                <header>
                    <HomeHeader />
                </header>
                <main>
                    <section className={styles.challenge_app_content_container}>
                        <div className={styles.challenge_content_container}>
                            {children}
                        </div>
                    </section>
                </main>
            </div> : <></>}
        </AuthProvider>
    );

}