import { getPosts } from "@/sanity/sanity-utils";
import SectionTitle from "../Common/SectionTitle";

import SingleBlogStyleTwo from "./SingleBlogStyleTwo";

const BlogStyleTwo = async () => {
  const posts = await getPosts();

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div>
          <SectionTitle
            title="The latest from our blog"
            paragraph="Our user-friendly interface and intuitive dashboards make it easy for you to explore and analyze your data, regardless of your technical expertise."
            center
            width="735px"
            mb="60px"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((blog, index) => (
            <SingleBlogStyleTwo key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogStyleTwo;


// import { getPosts } from "@/sanity/sanity-utils";
// import SectionTitle from "../Common/SectionTitle";
// import SingleBlogStyleTwo from "./SingleBlogStyleTwo";
//
// const BlogStyleTwo = async () => {
//   // Append a timestamp as a query parameter to ensure fresh data
//   const timestamp = new Date().getTime();
//
//   return (
//     <section className="py-16 md:py-20 lg:py-24">
//       <div className="container">
//         <div>
//           <SectionTitle
//             title="The latest from our blog"
//             paragraph="Our user-friendly interface and intuitive dashboards make it easy for you to explore and analyze your data, regardless of your technical expertise."
//             center
//             width="735px"
//             mb="60px"
//           />
//         </div>
//
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {posts.map((blog, index) => (
//             <SingleBlogStyleTwo key={index} blog={blog} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default BlogStyleTwo;