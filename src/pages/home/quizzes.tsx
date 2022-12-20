import { ReactElement } from "react";
import HomeQuizzesContent from "../../components/quizzes/HomeQuizzesContent";
import HomeLayout from "../../layout/HomeLayout";
import { NextPageWithLayout } from "../_app";

const Home: NextPageWithLayout = () => {
    return (
        <HomeQuizzesContent />
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    );
};

export default Home;