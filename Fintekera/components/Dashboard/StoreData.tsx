"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Typography, Grid, IconButton, Paper } from "@mui/material";
import { FileCopyOutlined as CopyIcon } from "@mui/icons-material";
import cryptoRandomString from "crypto-random-string";
import { CopyToClipboard } from "react-copy-to-clipboard";
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

const StoreUserInfo = async ({
  customerID,
  productID,
  productType,
  initAPICount,
  initRemainAPICalls,
  apiKey,
}) => {
  const userData = {
    customer_id: customerID,
    product_id: productID,
    product_type: productType.toString(),
    num_api_call: initAPICount,
    num_remain_api_call: initRemainAPICalls,
    user_api_key: apiKey.toString(),
  };

  console.log(userData);

  try {
    const status = await saveInfoInDatabase(userData);
    console.log("status:", status);
    return status;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default StoreUserInfo;
