"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Typography, IconButton, Paper } from '@mui/material';
import { FileCopyOutlined as CopyIcon } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from "framer-motion";
import GetUserAPIData from './GetData';
import StoreUserInfo from './StoreData';
import cryptoRandomString from 'crypto-random-string';

const toTitleCase = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const Dash = ({ customerID, productID, productType }) => {
  const [numApiCall, setNumApiCall] = useState(0);
  const [numRemainApiCall, setNumRemainApiCall] = useState(0);
  const [APIKey, setAPIKey] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const APICallsData = await GetUserAPIData({ customerID, productID, productType });
        const { init_call, remaining_call, api_key } = APICallsData;
        setNumApiCall(init_call);
        setNumRemainApiCall(remaining_call);
        setAPIKey(api_key);
        console.log(init_call, remaining_call, api_key);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [APIKey, customerID, productID, productType]);

  useEffect(() => {
    if (APIKey === undefined) {
      const initAPICount = parseInt(process.env.NEXT_PUBLIC_INIT_API_CALL, 10);
      const initRemainAPICalls = initAPICount;

      setNumApiCall(initAPICount);
      setNumRemainApiCall(initRemainAPICalls);
      const apiKey = cryptoRandomString({ length: 24, type: 'url-safe' });
      setAPIKey(apiKey);

    console.log('Saving data', customerID, productID, productType, initAPICount, initRemainAPICalls, apiKey);
      const fetchData = async () => {
        try {
          const status = await StoreUserInfo({ customerID, productID, productType, initAPICount, initRemainAPICalls, apiKey });
          console.log('New API Key:', status);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      fetchData();
    }
  }, [APIKey, customerID, productID, productType]);

  const displayProductType = toTitleCase(productType);

  return (
    <>
      <section id="token" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-30 -z-1 h-2/3 md:w-3/5 lg:w-3/4 rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-20 left-0 -z-1 transform -translate-x-1/2 -z-1 w-3/5 md:w-3/5 lg:w-3/4">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
          </div>
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-center xl:gap-20">
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
              className="animate_top w-full md:w-3/5 lg:w-3/4 xl:p-15"
            >
<div className="flex justify-end mt-10">
  <Link
    href="/"
    className="inline-flex items-center gap-2.5 rounded-full bg-black px-7.5 mt-4 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
    style={{ height: '40px' }} // Set height to match button
  >
    Sign Out
  </Link>
</div>

<Paper className="bg-white rounded-lg shadow-lg p-8 space-y-8 mt-10 m-3 shadow-md sm:mt-20 sm:m-6 md:p-10">
  {/* Customer Information Section */}
  <div className="bg-blue-400 rounded-lg p-4">
    <Typography variant="h5" className="font-bold text-gray-800 mb-2">Customer Information</Typography>
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="mb-4 sm:mb-0">
        <Typography variant="body1" className="text-gray-600">Customer ID:</Typography>
        <Typography variant="body1">{customerID}</Typography>
      </div>
      <div className="mb-4 sm:mb-0">
        <Typography variant="body1" className="text-gray-600">Product ID:</Typography>
        <Typography variant="body1">{productID}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="text-gray-600">Product Type:</Typography>
        <Typography variant="body1">{displayProductType}</Typography>
      </div>
    </div>
  </div>

  {/* API Information Section */}
  <div className="bg-green-400 rounded-lg p-4">
    <Typography variant="h5" className="font-bold text-gray-800 mb-2">API Information</Typography>
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="mb-4 sm:mb-0">
        <Typography variant="body1" className="text-gray-600">API Key:</Typography>
      </div>
<div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-0">
  <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
    <div className="rounded-lg bg-green-100 rounded-lg mr-2 sm:mr-0 sm:mb-0">
      <Typography variant="body1" className="api-key-text text-sm md:text-base lg:text-lg p-1 xl:text-xl">{APIKey}</Typography>
    </div>
    <CopyToClipboard text={APIKey}>
      <IconButton aria-label="copy api key" size="small">
        <CopyIcon fontSize="small" />
      </IconButton>
    </CopyToClipboard>
  </div>
</div>



    </div>
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="mb-4 sm:mb-0">
        <Typography variant="body1" className="text-gray-600">Initial API Call:</Typography>
        <Typography variant="body1">{numApiCall}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="text-gray-600">Remaining API Calls:</Typography>
        <Typography variant="body1" className={` ${numRemainApiCall !== null && numRemainApiCall <= 0 ? 'text-red-500' : ''}`}>
          {numRemainApiCall}
        </Typography>
      </div>
    </div>

  </div>

</Paper>





            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dash;
