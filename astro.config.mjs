import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ["./src/styles/main.css"],
      title: "My Docs",
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
            { label: "Code Documentation", link: "/code-docs/example/" },
          ],
        },
        {
          label: "User Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/user-guides/example/" },
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
