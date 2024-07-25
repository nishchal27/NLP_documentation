import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ["./src/styles/main.css"],
      title: "Nova Live Page",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Code Docs",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", link: "/code-docs/introduction/" },
            { label: "Folder Structure", link: "/code-docs/folder-structure/" },
            { label: "Core Components", link: "/code-docs/core-components/" },
            { label: "Sub Account", link: "/code-docs/sub-account/" },
            { label: "API", link: "/code-docs/api/" },
            { label: "Components", link: "/code-docs/components/" },
            { label: "Lib and Utils", link: "/code-docs/libraries-utilities/" },
            { label: "Providers", link: "/code-docs/providers/" },
            { label: "Middleware", link: "/code-docs/middleware/" },
            { label: "Testing", link: "/code-docs/testing/" },
            { label: "Code Documentation", link: "/code-docs/example/" },
          ],
        },
        {
          label: "User Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/user-guides/example/" },
            { label: "Introduction", link: "/user-guides/introduction/" },
            { label: "Getting Started", link: "/user-guides/gettingstarted/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
