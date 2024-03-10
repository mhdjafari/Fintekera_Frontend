const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  dataset: "production",
  apiVersion: "2023-03-09",
  useCdn: false,
};

export default config;
