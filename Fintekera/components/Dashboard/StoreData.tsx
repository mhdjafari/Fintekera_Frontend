"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button, Typography, Grid, IconButton, Paper } from '@mui/material';
import { FileCopyOutlined as CopyIcon } from '@mui/icons-material';
import cryptoRandomString from 'crypto-random-string';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from "framer-motion";

const saveInfoInDatabase = async (userData) => {
  try {
    // Make a fetch or Axios request to your server API to save data to the PostgreSQL database
    const response = await fetch(
      "https://api.fintekera.com/admin/api-subscribe-fin",
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


const StoreUserInfo = async ({ customerID, productID, productType, initAPICount, initRemainAPICalls, apiKey}) => {

    const userData = {
      customer_id : customerID,
      product_id: productID,
      product_type: productType.toString(),
      num_api_call: initAPICount,
      num_remain_api_call: initRemainAPICalls,
      user_api_key: apiKey.toString(),
    };

    console.log(userData)

  try {
    const status = await saveInfoInDatabase(userData);
    console.log('status:', status);
    return status
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default StoreUserInfo;



// const GenerateUserInfo = ({ customerID, productID, productType }) => {
//
//   useEffect(() => {
//     const fetchData = async () => {
//       const userQuery = {
//         customer_id: customerID,
//         product_id: productID,
//         product_type: productType,
//       };
//
// try {
//   // Assuming remainingAPICallsData is a JSON string, parse it into an object
//   const remainingAPICallsData = await getInfoFromDatabase(userQuery);
//
//   // Check if remainingAPICallsData is not null or undefined
//   if (remainingAPICallsData) {
//     // Access the init_call and remaining_call properties
//     const { init_call, remaining_call } = remainingAPICallsData;
//
//     console.log('init_call:', init_call);
//     console.log('remaining_call:', remaining_call);
//
//     // Set the remainingAPICalls state based on the value of remaining_call
//     setInitialAPICount(init_call);
//     setRemainingAPICalls(remaining_call);
//   } else {
//     console.log('remainingAPICallsData is null or undefined');
//     setRemainingAPICalls(0);
//     setInitialAPICount(0);
//   }
// } catch (error) {
//   console.error("Error:", error);
//   setRemainingAPICalls(0);
//   setInitialAPICount(0);
// }
//
//
//     const APIKey = cryptoRandomString({ length: 24, type: 'url-safe' });
//
//     const userData = {
//       customer_id : customerID,
//       product_id: productID,
//       product_type: productType.toString(),
//       num_api_call: initialAPICount,
//       num_remain_api_call: remainingAPICalls,
//       user_api_key: APIKey.toString(),
//     };
//     };
//     fetchData();
//   }, [userData]);
//
//
//
