import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    return {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      description: `${post.metadata?.slice(0, 136)}...`,
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

export default async function Post({ params }: Props) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <title>{`${post?.title} - Startup`}</title>

      <section className="pt-24 pb-16 md:pb-20 lg:pb-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] p-4 bg-white border border-white shadow-three dark:border-dark shadow-solid-4 rounded-lg  transition-all dark:border-strokedark dark:bg-gray-dark">
                <ul className="space-y-2">
                  {posts.map((post, key) => (
                    <SidebarLink post={post} key={key} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <div
                  className="blog-details"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// import SidebarLink from "@/components/Docs/SidebarLink";
// import { getAllPosts, getPostBySlug } from "@/lib/markdown";
// import markdownToHtml from "@/lib/markdownToHtml";
//
// type Props = {
//   params: { slug: string };
// };
//
// type Post = {
//   title: string;
//   slug: string;
// };
//
// export async function generateMetadata({ params }: Props) {
//   const post = getPostBySlug(params.slug, ["title", "author", "content"]);
//   const siteName = process.env.SITE_NAME;
//   const authorName = process.env.AUTHOR_NAME;
//
//   if (post) {
//     return {
//       title: `${post.title || "Single Post Page"} | ${siteName}`,
//       description: `${post.metadata?.slice(0, 136)}...`,
//       author: authorName,
//
//       robots: {
//         index: true,
//         follow: true,
//         nocache: true,
//         googleBot: {
//           index: true,
//           follow: false,
//           "max-video-preview": -1,
//           "max-image-preview": "large",
//           "max-snippet": -1,
//         },
//       },
//     };
//   } else {
//     return {
//       title: "Not Found",
//       description: "No blog article has been found",
//     };
//   }
// }
//
// export default async function Post({ params }: Props) {
//   const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
//   const post = getPostBySlug(params.slug, ["title", "author", "content"]);
//   const content = await markdownToHtml(post.content || "");
//
//   return (
//     <>
//       <title>{`${post?.title} - Startup`}</title>
//
//       <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
//         <div className="container mx-auto">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 lg:w-1/4">
//               <div className="shadow-solid-4 dark:border-strokedark sticky top-[74px] rounded-lg border border-white bg-white p-4 shadow-three  transition-all dark:border-dark dark:bg-gray-dark">
//                 <ul className="space-y-2">
//                   {posts.map((post: any, key) => (
//                     <SidebarLink post={post} key={key} />
//                   ))}
//                 </ul>
//               </div>
//             </div>
//
//             <div className="w-full px-4 lg:w-3/4">
//               <div className="blog-details blog-details-docs rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
//                 <div
//                   className="blog-details"
//                   dangerouslySetInnerHTML={{ __html: content }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
