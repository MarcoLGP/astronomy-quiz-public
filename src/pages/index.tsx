import { ReactElement } from "react";
import LoginContent from "../components/login/LoginContent";
import SignLayout from "../layout/SignLayout";
import { NextPageWithLayout } from "./_app";

 const  Login: NextPageWithLayout = () =>  {

  return (
    <LoginContent />
  );

};

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <SignLayout>
      {page}
    </SignLayout>
  );
};

export default Login;