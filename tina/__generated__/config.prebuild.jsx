// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "d9e2b0b2-9584-4387-ba39-da58b46e14b9",
  // Get this from tina.io
  token: "5b3aa18c2f93c7d9ffa4b7f6ae5946d3b85b424c",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
