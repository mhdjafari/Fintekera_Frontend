"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Post = {
  title: string;
  slug: string;
};

const SidebarLink = ({ post } : { post: Post }) => {
  const pathUrl = usePathname();

  return (
    <>
      <li className="block">
        <Link
          href={`/docs/${post?.slug}`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathUrl === `/docs/${post?.slug}`
              ? "bg-gray-light text-black dark:bg-white/5 dark:text-white"
              : "text-body-color hover:bg-gray-light dark:text-body-color-dark dark:hover:bg-white/5"
          }`}
        >
          {post?.title}
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
