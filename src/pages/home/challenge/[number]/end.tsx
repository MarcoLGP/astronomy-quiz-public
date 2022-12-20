import { ReactElement } from "react";
import EndContent from "../../../../components/end/EndContent";
import ChallengeLayout from "../../../../layout/ChallengeLayout";
import { NextPageWithLayout } from "../../../_app";


const End: NextPageWithLayout = () => {

    return (
        <EndContent />
    );

};

End.getLayout = function getLayout(page: ReactElement) {
    return (
        <ChallengeLayout>
            {page}
        </ChallengeLayout>
    );
};

export default End;