"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs/bootstrap-template`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-black dark:text-white`}
        >
          Introduction
        </Link>
        <Link
          href={`/docs/contact-form`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white`}
        >
          contact-form
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Income Verification-2
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Income Verification-3
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
