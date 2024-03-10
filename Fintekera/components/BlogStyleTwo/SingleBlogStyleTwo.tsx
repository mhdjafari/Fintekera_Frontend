import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlogStyleTwo = ({ blog }: { blog: Blog }) => {
  const { title, metadata, mainImage, slug, tags, publishedAt } = blog;

  return (
    <div className="w-full overflow-hidden duration-300 bg-white rounded-sm hover:shadow-one dark:hover:shadow-gray-dark shadow-three dark:bg-gray-dark dark:shadow-two">
      <div className="relative block h-[230px] overflow-hidden">
        <Link href={`/blogs-2/${slug.current}`}>
          <Image
            src={imageBuilder(mainImage).url()}
            alt={title}
            fill
            className="object-cover object-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
        </Link>
      </div>

      <div className="p-6">
        <div className="mb-2.5 flex items-center">
          <Link
            href="/"
            className="text-sm duration-300 text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
          >
            {tags[0]}
          </Link>
          <span className="inline-block w-px h-3 mx-4 bg-stroke dark:bg-stroke-dark"></span>
          <p className="text-sm text-body-color dark:text-body-color-dark">
            {new Date(publishedAt).toDateString().split(" ").slice(1).join(" ")}
          </p>
        </div>

        <div>
          <h3>
            <Link
              href={`/blogs-2/${slug.current}`}
              className="text-xl font-semibold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {`${title.slice(0, 50)}...`}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogStyleTwo;
