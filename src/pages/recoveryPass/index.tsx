import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import SignLayout from "../../layout/SignLayout";
import RecoveryPassContent from "../../components/recoveryPass/RecoveryPassContent";

const RecoveryPass: NextPageWithLayout = () => {
    return (
        <RecoveryPassContent />
    );
};

RecoveryPass.getLayout = function getLayout(page: ReactElement) {
    return (
        <SignLayout>
            {page}
        </SignLayout>
    );
};

export default RecoveryPass;