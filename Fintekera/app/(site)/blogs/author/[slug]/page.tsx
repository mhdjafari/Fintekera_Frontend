import SingleBlog from "@/components/Blog/SingleBlog";
import { getPostsByAuthor, imageBuilder } from "@/sanity/sanity-utils";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const { slug } = params;

  const formattedAuthor = slug.charAt(0).toUpperCase() + slug.slice(1);

  if (slug) {
    return {
      title: ` ${formattedAuthor} | NextBlog - Next.js Blog Template`,
      description: "This is the Author page for NextBlog",
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
      description: "No author has been found",
    };
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = params;
  const posts = await getPostsByAuthor(slug);

  const authorName = posts.length > 0 ? posts[0]?.author?.name : "";

  return (
    <>

      <section className="pt-[120px] pb-[120px]  flex justify-center">
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
