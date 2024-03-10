"use client"
import React from "react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "next-share";

const SocialShare = ({ blogData }) => {
//   // Check if blogData is available
//   if (!blogData || !blogData.slug || !blogData.slug.current) {
//     return null; // Render nothing if blogData or its slug is not available
//   }

  return (
    <div className="flex gap-3">
      <FacebookShareButton url={`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blogData.slug.current}`}>
        <FacebookIcon size={35} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blogData.slug.current}`}>
        <TwitterIcon size={35} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton url={`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blogData.slug.current}`}>
        <LinkedinIcon size={35} round={true} />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
