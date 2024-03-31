"use client"
import React from 'react';
import Dash from './UserDashboard';
import { useParams } from 'react-router-dom';

const DashboardPage = ({ customerID, productID, productType }) => {
//   const { customerID } = useParams();
//     console.log('customerIDDDD', customerID, productID, productType );
  return (
    <div>
      <Dash customerID={customerID} productID={productID} productType={productType} />
    </div>
  );
};

export default DashboardPage;
