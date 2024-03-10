import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getPostsByTag } from "@/sanity/sanity-utils";

type Props = {
  params: { tag: string };
};

export async function generateMetadata({ params }: Props) {
  const { tag } = params;

  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  if (tag) {
    return {
      title: ` ${formattedTag} | NextBlog - Next.js Blog Template`,
      description: "This is the Tag page for NextBlog",
      author: "NextBlog",

      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No tag has been found",
    };
  }
}

export default async function BlogPage({ params }: Props) {
  const { tag } = params;
  const posts = await getPostsByTag(tag);

  return (
    <>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((blog, index) => <SingleBlog key={index} blog={blog} />)
            ) : (
              <h1 className="text-center text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight">
                No posts found
              </h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
