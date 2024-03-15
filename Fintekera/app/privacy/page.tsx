import Privacy from "@/components/Privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
  // other metadata
};

const PrivacyPage = () => {
  return (
    <>
      <Privacy />
    </>
  );
};

export default PrivacyPage;
