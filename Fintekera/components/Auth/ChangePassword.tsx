"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const checkEmailInDatabase = async (userData) => {
  try {
    // Make a fetch or Axios request to your server API to save data to the PostgreSQL database
    const response = await fetch(
      "https://api.fintekera.com/admin/new-password-fin",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": process.env.BACKEND_API_KEY, // Use environment variable
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      // If response is okay, parse and return response data
      return await response.json();
    } else {
      // If response is not okay, throw an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

const ChangePassword = () => {

  const [enteredEmail, setEnteredEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPass, setNewPass] = useState("");

  const [emailError, setEmailError] = useState("");
  const [tokenError, setTokenError] = useState("");
  const [newPassError, setNewPassError] = useState("");

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
    setEmailError(""); // Clear any existing error message when user starts typing
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
    setTokenError(""); // Clear any existing error message when user starts typing
  };

  const handleNewPassChange = (event) => {
    setNewPass(event.target.value);
    setNewPassError(""); // Clear any existing error message when user starts typing
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email: enteredEmail.toString(),
      reset_token: token.toString(),
      new_password: newPass.toString(),
    };
//     console.log(userData);
    try {
      // Your form submission logic
      const responseData = await checkEmailInDatabase(userData);
//       console.log(responseData);
      if (responseData === "Password is reset successfully.") {
        // Redirect to the success page after successful submission
        window.location.href = "https://www.fintekera.com/change-password-success";
      } else {
        setEmailError(responseData);
      }
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      // Handle error with setEmailError or other error handling logic
    }

   };


  return (
    <>
      <section className="flex justify-center pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 max-w-c-1016 px-7.5 pb-7.5 pt-15 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
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

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle1">
              Change Password
            </h2>
            <form>
                <div className="mb-7.5 flex flex-col gap-4 lg:mb-12.5 lg:gap-8">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={handleEmailChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Token"
                    onChange={handleTokenChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    onChange={handleNewPassChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  />
                  {emailError && (
                    <p className="mt-2 text-red-500 text-sm">{emailError}</p>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-10 md:justify-start xl:gap-15">

                  <button
                    aria-label="login with email and password"
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-7.5 mb-4 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    style={{ height: '40px' }} // Set height to match button
                  >
                    Submit
                  </button>
                    <Link
                    href="/auth/signin"
                    className="flex rounded-full items-center bg-black px-7.5 py-3 mb-4 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    style={{ height: '40px' }} // Set height to match button
                  >
                    Back
                  </Link>
                </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
