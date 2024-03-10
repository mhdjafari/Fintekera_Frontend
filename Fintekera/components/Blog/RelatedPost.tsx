import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,
}: {
  image: string;
  slug: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-sm sm:h-[75px] sm:w-[85px]">
          <Image src={image} alt={title} fill />
        </div>
      </div>
      <div className="w-full">
        <h4>
          <Link
            href={slug}
            className="mb-[6px] block text-base leading-snug text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
          >
            {title}
          </Link>
        </h4>
        <p className="text-xs font-medium text-body-color dark:text-body-color-dark">
          {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedPost;
