import { ReactElement } from "react";
import QuestionsContent from "../../../../components/questions/QuestionsContent";
import ChallengeLayout from "../../../../layout/ChallengeLayout";
import { NextPageWithLayout } from "../../../_app";

const Questions: NextPageWithLayout = () => {

    return (
        <QuestionsContent />
    );

};

Questions.getLayout = function getLayout(page: ReactElement) {
    return (
        <ChallengeLayout>
            {page}
        </ChallengeLayout>
    );
};

export default Questions;