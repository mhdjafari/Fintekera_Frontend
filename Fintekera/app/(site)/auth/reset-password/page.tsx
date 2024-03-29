import ResetPassword from "@/components/Auth/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password Page",
  description: "This is reset password.",
  // other metadata
};

const ResetPasswordPage = () => {
  return (
    <>
      <ResetPassword />
    </>
  );
};

export default ResetPasswordPage;
