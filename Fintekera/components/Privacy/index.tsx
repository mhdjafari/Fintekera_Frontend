// components/Privacy/index.tsx
"use client";
import React, { useState, useEffect } from "react";

const Privacy = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch("/data/privacy.html"); // Adjust the path accordingly
        const data = await response.text();
        setHtmlContent(data);
      } catch (error) {
        console.error("Error fetching HTML content:", error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <section
      id="privacy-document"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="w-full lg:w-full xl:w-full ">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s"
          >
            <div
              className="terms-privacy-data"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
