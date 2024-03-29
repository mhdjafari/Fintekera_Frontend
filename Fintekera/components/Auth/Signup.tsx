"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const saveUserMSGToDatabase = async (userData) => {
  try {
    // Make a fetch or Axios request to your server API to save data to the PostgreSQL database
    const response = await fetch(
      "https://api.fintekera.com/admin/signup-fin",
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

// Function to validate email format
const isValidEmail = (email) => {
// Regular expression to validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
};

const isValidPassword = (enteredPassword) => {
  // Check if password is at least 6 characters long
  if (enteredPassword.length < 6) {
    return "At least 6 characters";
  }

  // Check for at least one number
  const numberRegex = /\d/;
  if (!numberRegex.test(enteredPassword)) {
    return "At least one number.";
  }

  // Check for at least one uppercase letter
  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(enteredPassword)) {
    return "At least one uppercase letter.";
  }

  // Check for at least one special character
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!specialCharRegex.test(enteredPassword)) {
    return "At least one special character.";
  }

  // If all conditions are met, return true
  return true;
};




const Signup = () => {

  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleFullNameChange = (event) => {
    setEnteredFullName(event.target.value);
    setNameError(""); // Clear any existing error message when user starts typing
  };

  const handleCompanyChange = (event) => {
    setEnteredCompany(event.target.value);
    setCompanyError(""); // Clear any existing error message when user starts typing
  };

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
    setEmailError(""); // Clear any existing error message when user starts typing
  };

  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value);
    setPasswordError(""); // Clear any existing error message when user starts typing
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //       console.log(enteredEmail, enteredFullName, enteredMessage.split(/\s+/).length);

    // Check maximum name length
    if (!enteredFullName.trim()) {
      setNameError("Invalid Name!");
      return; // Prevent further execution
    }

    // Check maximum name length
    if (!enteredCompany.trim()) {
      setCompanyError("Invalid Company!");
      return; // Prevent further execution
    }

    // Check if the entered email is valid
    if (!isValidEmail(enteredEmail)) {
      setEmailError("Invalid Email!");
      return; // Prevent further execution
    }

    // Check maximum name length
    if (!enteredPassword.trim()) {
      setPasswordError("Invalid Password!");
      return; // Prevent further execution
    }

    const passwordValidity = isValidPassword(enteredPassword);
    if (passwordValidity !== true) {
  // Password is invalid, display error message
    setPasswordError(passwordValidity);
    return;
    }



    const userData = {
      full_name: enteredFullName.toString(),
      company: enteredCompany.toString(),
      email: enteredEmail.toString(),
      password: enteredPassword.toString(),
    };

        console.log(userData);
            try {
          // Your form submission logic
          const responseData = await saveUserMSGToDatabase(userData);
          console.log(responseData);
          if (responseData === "Signed up successfully.") {
            // Redirect to the success page after successful submission
            window.location.href = "https://www.fintekera.com/sign-password-success";
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
      {/* <!-- ===== SignUp Form Start ===== --> */}
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
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Create an Account
            </h2>
            <form>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="lg:w-5/12"> {/* Adjusted width for full name */}
                    <input
                      type="text"
                      placeholder="Full Name"
                      onChange={handleFullNameChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {nameError && (
                      <p className="text-red-500 text-sm">{nameError}</p>
                    )}
                  </div>
                  <div className="lg:w-5/12"> {/* Adjusted width for company */}
                    <input
                      type="text"
                      placeholder="Company"
                      onChange={handleCompanyChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {companyError && (
                      <p className="text-red-500 text-sm">{companyError}</p>
                    )}
                  </div>
                </div>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="lg:w-5/12">
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={handleEmailChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm">{emailError}</p>
                    )}
                  </div>
                  <div className="lg:w-5/12">
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {passwordError && (
                      <p className="text-red-500 text-sm">{passwordError}</p>
                    )}
                  </div>
                </div>
              <div className="flex flex-wrap gap-10 md:justify-between xl:gap-15">
                <button
                  aria-label="signup with email and password"
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Create Account
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
                  Already have an account?{" "}
                  <Link
                    className="text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    href="/auth/signin"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Signup;
