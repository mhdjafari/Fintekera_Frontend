import ChangePassword from "@/components/Auth/ChangePassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password Page",
  description: "This is change password.",
  // other metadata
};

const ChangePasswordPage = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};

export default ChangePasswordPage;
