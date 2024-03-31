"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const checkInfoInDatabase = async (userData) => {
  try {
    const response = await fetch("https://api.fintekera.com/admin/signin-fin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BACKEND_API_KEY,
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const Signin = () => {
  const router = useRouter();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email: enteredEmail.toString(),
      password: password.toString(),
    };

    try {
      const responseData = await checkInfoInDatabase(userData);
      //         console.log(responseData)
      if (typeof responseData === "string") {
        setError(responseData);
      }
      if (
        typeof responseData === "object" &&
        responseData.Customer_ID !== undefined
      ) {
        const customerID = responseData.Customer_ID.toString();
        const productID = "1";
        const productType = "Free";

        if (customerID) {
          router.push(`/dashboard/${customerID}/${productID}/${productType}`);
        } else {
          setError("Customer ID is not valid.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while signing in.");
    }
  };

  return (
    <>
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15">
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Log into Your Account
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  placeholder="Email"
                  value={enteredEmail}
                  onChange={handleEmailChange}
                  className="w-full border-b border-stroke !bg-white pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:!bg-black dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full border-b border-stroke !bg-white pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:!bg-black dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              {error && <div className="text-red-500 mb-4">{error}</div>}

              <div className="flex flex-wrap items-center gap-10 md:justify-between xl:gap-15">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Log in
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-12.5 border-t border-stroke py-5 text-center dark:border-strokedark">
                <p>
                  Don&rsquo;t have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-black hover:text-primary dark:text-white hover:dark:text-primary"
                  >
                    Sign Up
                  </Link>
                  <span className="ml-2">|</span>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-2 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    Forgot Password
                  </Link>
                  <span className="ml-2">|</span>
                  <Link
                    href="/auth/change-password"
                    className="ml-2 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    Change Password
                  </Link>
                  <span className="ml-2">|</span>
                  <Link
                    href="/auth/reset-password"
                    className="ml-2 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    Reset Password
                  </Link>
                  <span className="ml-2">|</span>
                  <Link
                    href="/auth/resend-verification-email"
                    className="ml-2 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    Resend Email Verification
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
