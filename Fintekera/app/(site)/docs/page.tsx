// import SidebarLink from "@/components/Docs/SidebarLink";
// import { getAllPosts } from "@/lib/markdown";
// import Image from "next/image";
// import { Metadata } from "next";
//
// export const metadata: Metadata = {
//   title: "API Docs Page",
//   description: "This is Docs Page for Fintekera API",
//   // other metadata
// };
//
// export default function DocsPage() {
//   const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
//
//   return (
//     <>
//       <section className="pt-24 pb-16 md:pb-20 lg:pb-24 md:pt-28 lg:pt-32">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full px-4 lg:w-1/4">
//               <div className="sticky top-[74px] p-4 bg-white border border-white shadow-three dark:border-dark shadow-solid-4 rounded-lg  transition-all dark:border-strokedark dark:bg-gray-dark">
//                 <ul className="space-y-2">
//                   {posts.map((post, key) => (
//                     <SidebarLink post={post} key={key} />
//                   ))}
//                 </ul>
//               </div>
//             </div>
//
//             <div className="w-full px-4 lg:w-3/4">
//               <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
//                 <h1>Welcome to API Documentation</h1>
//                 <div className="mx-auto max-w-c-1390 rounded-lg py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6">
//                   <div className="w-full lg:w-auto">
//                     <img
//                       src="/images/docs/7107884.jpg"
//                       alt="Man"
//                       className="block w-96 h-auto mx-auto lg:mx-0"
//                     />
//                   </div>
//                   <div className="w-full lg:w-auto">
//                     <img
//                       src="/images/docs/20944142.jpg"
//                       alt="Man"
//                       className="block w-96 h-auto mx-auto lg:mx-0"
//                     />
//                   </div>
//                 </div>
//
//                 <p className="text-base text-body-color dark:text-body-color-dark">
// {/*                   Please visit:{" "} */}
// {/*                   <b> */}
// {/*                     <a href="https://fintekera.com/docs"> */}
// {/*                       www.fintekera.com/docs */}
// {/*                     </a> */}
// {/*                   </b>{" "} */}
//                   Read the documentation and learn how to integrate income
//                   API endpoint. Please reach out to our customer service team
//                   for further assistance if required.{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts } from "@/lib/markdown";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Startup Pro",
  description: "This is Docs Page for Startup Pro",
  // other metadata
};

export default function DocsPage() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark sticky top-[74px] rounded-lg border border-white bg-white p-4 shadow-three  transition-all dark:border-dark dark:bg-gray-dark">
                <ul className="space-y-2">
                  {posts.map((post: any, key) => (
                    <SidebarLink post={post} key={key} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to Startup Documentation</h1>

                <p className="text-base text-body-color dark:text-body-color-dark">
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Please visit:{" "}
                  <b>
                    <a href="https://nextjstemplates.com/docs">
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                  to check out the real docs, setup guide and even video
                  instructions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
