import { ReactElement } from "react";
import HomeRankingContent from "../../components/ranking/HomeRankingContent";
import HomeLayout from "../../layout/HomeLayout";
import { NextPageWithLayout } from "../_app";

const Ranking: NextPageWithLayout  = () => {
    return (
        <HomeRankingContent />
    );
};

Ranking.getLayout = function getLayout(page: ReactElement) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    );
};

export default Ranking;