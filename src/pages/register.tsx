import { ReactElement } from "react";
import RegisterContent from "../components/register/RegisterContent";
import SignLayout from "../layout/SignLayout";
import { NextPageWithLayout } from "./_app";

const Register:NextPageWithLayout = () => {

return (
    <RegisterContent />
);

};

Register.getLayout = function getLayout(page: ReactElement) {
    return (
        <SignLayout>
            {page}
        </SignLayout>
    );
};

export default Register;