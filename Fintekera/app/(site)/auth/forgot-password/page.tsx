import ForgotPassword from "@/components/Auth/ForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forget Password Page",
  description: "This is forget password page.",
  // other metadata
};

const ForgetPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
};

export default ForgetPasswordPage;
