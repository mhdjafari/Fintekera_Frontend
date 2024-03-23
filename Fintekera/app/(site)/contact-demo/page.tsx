import DemoForm from "@/components/ContactDemo/DemoForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up for Demo ",
  description: "This is Sign Up page for Demo",
};

export default function Register() {
  return (
    <>
      <DemoForm />
    </>
  );
}
