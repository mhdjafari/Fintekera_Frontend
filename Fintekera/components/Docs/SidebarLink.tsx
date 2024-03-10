"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ post }) => {
  const pathUrl = usePathname();

  return (
    <>
      <li className="block">
        <Link
          href={`/docs/${post?.slug}`}
          className={`text-base py-2 px-3 rounded-sm flex w-full ${
            pathUrl === `/docs/${post?.slug}`
              ? "text-black dark:text-white bg-gray-light dark:bg-white/5"
              : "text-body-color dark:text-body-color-dark dark:hover:bg-white/5 hover:bg-gray-light"
          }`}
        >
          {post?.title}
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
