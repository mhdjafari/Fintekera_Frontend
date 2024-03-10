import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  dataset: "production",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
