"use client";
import React from "react";

const getInfoFromDatabase = async (userQuery) => {
  try {
    const response = await fetch(
      "https://api.fintekera.com/admin/api-subscribe-check-fin",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": process.env.BACKEND_API_KEY,
        },
        body: JSON.stringify(userQuery),
      }
    );

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

const GetUserAPIData = async ({ customerID, productID, productType }) => {
  const userQuery = {
    customer_id: customerID,
    product_id: productID,
    product_type: productType,
  };

  try {
    const remainingAPICallsData = await getInfoFromDatabase(userQuery);
//     console.log("remainingAPICallsData:", remainingAPICallsData);
    return remainingAPICallsData;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default GetUserAPIData;
