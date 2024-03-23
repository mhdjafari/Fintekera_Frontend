"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const saveUserMSGToDatabase = async (userData) => {
  try {
    // Make a fetch or Axios request to your server API to save data to the PostgreSQL database
    const response = await fetch(
      "https://api.fintekera.com/admin/contact-demo-fin",
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

    // Handle the response as needed
    if (response.ok) {
      console.log("Contact message is saved successfully!");
    } else {
      console.error("Error saving user message:", response.statusText);
    }
  } catch (error) {
    console.error("Error saving user message:", error.message);
  }
};

// Function to validate email format
const isValidEmail = (email) => {
// Regular expression to validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
};

const DemoForm = () => {

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredJobTitle, setEnteredJobTitle] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const [emailError, setEmailError] = useState("");
  const [jobTitleError, setJobTitleError] = useState("");
  const [nameError, setNameError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
    setEmailError(""); // Clear any existing error message when user starts typing
  };

  const handleCompanyChange = (event) => {
    setEnteredCompany(event.target.value);
    setCompanyError(""); // Clear any existing error message when user starts typing
  };

  const handlePhoneChange = (event) => {
    setEnteredPhone(event.target.value);
    setPhoneError(""); // Clear any existing error message when user starts typing
  };

  const handleFullNameChange = (event) => {
    setEnteredFullName(event.target.value);
    setNameError(""); // Clear any existing error message when user starts typing
  };

  const handleJobTitleChange = (event) => {
    setEnteredJobTitle(event.target.value);
    setJobTitleError(""); // Clear any existing error message when user starts typing
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Start");

    // Check maximum name length
    if (!enteredFullName.trim()) {
      setNameError("Invalid name!");
      return; // Prevent further execution
    }

    // Check if the entered email is valid
    if (!isValidEmail(enteredEmail)) {
      setEmailError("Invalid email!");
      return; // Prevent further execution
    }

    const userData = {
      full_name: enteredFullName.toString(),
      email: enteredEmail.toString(),
      phone: enteredPhone.toString(),
      company: enteredCompany.toString(),
      job_title: enteredJobTitle.toString()
    };

    try {
    console.log("Saving Data");
      await saveUserMSGToDatabase(userData);
      // Redirect to the success page after successful submission
      window.location.href = "https://www.fintekera.com/message-success";
    } catch (error) {
      console.error("Error saving user message:", error.message);
      // Handle any errors here
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
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 pb-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15 xl:pb-15"
          >
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle5">
              Please fill out the form to schedule your demo. <br />
              We will get back to you shortly.
            </h2>
            <form>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="lg:w-1/2">
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
                  <div className="lg:w-1/2">
                    <input
                      type="text"
                      placeholder="Company"
                      onChange={handleCompanyChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                </div>

                    <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                      <div className="lg:w-1/2">
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
                      <div className="lg:w-1/2">
                        <input
                          type="phone"
                          placeholder="Phone"
                          onChange={handlePhoneChange}
                          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <input
                          type="text"
                          placeholder="Job Title"
                          onChange={handleJobTitleChange}
                          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                        />
                      </div>
                    </div>


              <div className="flex flex-wrap gap-10 md:justify-between xl:gap-15">
                <button
                 onClick={handleSubmit}
                  type="submit"
                  aria-label="signup with email"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DemoForm;
