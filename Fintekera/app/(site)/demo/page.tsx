"use client"

import React, { useState, useEffect } from "react";
import AuthForm from "@/components/Auth/AuthForm";

const RedirectToExternalLink = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        window.location.replace("http://34.234.71.67:8004/docs");
      }, 2000);
    }
  }, [redirect]);

  const handleRedirect = () => {
    setRedirect(true);
  };

  return (
    <div>
      {!redirect ? (
        <AuthForm callback={handleRedirect} />
      ) : (
        <div>
          {/* You can add a loading indicator here if needed */}
        </div>
      )}
    </div>
  );
};

export default RedirectToExternalLink;
