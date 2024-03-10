import { imageBuilder } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default function SingleBlog({ blog }) {
  const { title, mainImage, slug, metadata, author, tags, publishedAt } = blog;

  return (
    <>
      <div
        className="relative overflow-hidden duration-300 bg-white rounded-sm wow fadeInUp group shadow-one dark:bg-dark hover:shadow-two dark:hover:shadow-gray-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={`/blogs/${slug?.current}`}
          className="relative block aspect-[37/22] w-full overflow-hidden"
        >
          <span className="absolute z-20 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white capitalize duration-300 rounded-full top-6 right-6 bg-primary hover:bg-primary/90">
            {tags?.length > 0 && tags[0]}
          </span>

          <Image
            src={imageBuilder(mainImage).url()}
            alt={title}
            fill
            className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/blogs/${slug?.current}`}
              className="mb-4 block text-xl font-bold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary sm:text-[22px]"
            >
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="pb-6 mb-6 text-base border-b border-body-color/10 text-body-color dark:border-white/10 dark:text-body-color-dark">
            {metadata.slice(0, 100)}
          </p>
          <div className="flex items-center">
            <div className="flex items-center pr-5 mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative w-10 h-10 overflow-hidden rounded-full">
                  <Link href={`/blogs/author/${author?.slug.current}`}>
                    <Image
                      src={imageBuilder(author?.image).url()}
                      alt={author?.name}
                      fill
                    />
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  <Link href={`/blogs/author/${author?.slug.current}`}>
                    By {author?.name}
                  </Link>
                </h4>

                <div className="text-xs text-body-color">
                  <PortableText value={author?.bio} />
                </div>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color dark:text-body-color-dark">
                {new Date(publishedAt)
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
