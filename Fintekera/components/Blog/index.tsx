import { getPosts } from "@/sanity/sanity-utils";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const Blog = async () => {
  const posts = await getPosts();

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28  flex justify-center"
    >
      <div className="container">
        <SectionTitle
          title="Latest Blogs"
          paragraph=" "
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {posts?.length > 0 ? (
            posts.map((blog, index) => <SingleBlog key={index} blog={blog} />)
          ) : (
            <p>No posts found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
