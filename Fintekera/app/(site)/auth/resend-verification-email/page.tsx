import ResendVerifEmail from "@/components/Auth/ResendVerifEmail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const ResendVerificationEmailPage = () => {
  return (
    <>
      <ResendVerifEmail />
    </>
  );
};

export default ResendVerificationEmailPage;
