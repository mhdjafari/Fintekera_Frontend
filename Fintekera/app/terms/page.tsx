import Terms from "@/components/Terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service",
  // other metadata
};

const TermsPage = () => {
  return (
    <>
       <Terms />
    </>
  );
};

export default TermsPage;