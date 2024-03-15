import SingleBlog from "@/components/Blog/SingleBlog";
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import { getPosts, imageBuilder } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore reputable blogs offering insights into techniques for increasing your salary, \
  mastering salary negotiation, and transitioning to more fulfilling career paths. These resources often \
   provide actionable tips, expert advice, and real-world strategies to help you achieve your professional goals.",
  // other metaDescription
};

export default async function BlogPage() {
  const posts = await getPosts();
//     console.log("All posts:", posts)

  return (
    <>
      <section className="pt-[120px] pb-[120px] flex justify-center">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {posts.length > 0 &&
              posts.map((blog, index) => (
                <SingleBlog key={index} blog={blog} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
