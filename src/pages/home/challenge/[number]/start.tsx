import { ReactElement } from "react";
import ChallengeContent from "../../../../components/challenge/ChallengeContent";
import ChallengeLayout from "../../../../layout/ChallengeLayout";
import { NextPageWithLayout } from "../../../_app";

const Challenge1: NextPageWithLayout = () => {

    return (
        <ChallengeContent />
    );

};

Challenge1.getLayout = function getLayout(page: ReactElement) {
    return (
        <ChallengeLayout>
            {page}
        </ChallengeLayout>
    );
};

export default Challenge1;