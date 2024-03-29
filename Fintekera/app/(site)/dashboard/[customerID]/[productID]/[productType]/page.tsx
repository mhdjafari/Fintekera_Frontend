import React from 'react';
import DashboardPage from '@/components/Dashboard';

const Page = ({ params }: { params: { customerID: string, productID: string , productType: string  } }) => {
  console.log('params', params);
  const { customerID, productID, productType } = params;
  console.log('customerID', customerID);
  return (
    <>
      <DashboardPage customerID={customerID} productID={productID} productType={productType} />
    </>
  );
};

export default Page;
