import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "1x5dc58l",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2025-01-05",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
})


export default config