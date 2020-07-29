
export default {
  title: "CleverForm Docs",

  dest: "/public",
  base: "/public",

  files: "src/documentation/**/*.mdx",
  // files: "src/docz/xaa/*.mdx",

  // assets/images dir
  public: "src/documentation/assets",

  menu: [
    "Welcome!",
    {
      name: "Introduction",
      menu: ["What is cleverform.js?", "Installation", "Simplest Usage"],
    },

    "Cleverform instance",

    {
      name: "Validation rules",
      menu: ["Rules anatomy", "Rules behavior", "Built-in rules"],
    },
  ],

  plugins: [
    {
      resolve: "gatsby-theme-docz",
      options: {
        /* your custom options */
      },
    },
  ],

  themeConfig: {
    colors: {
      header: {
        bg: "#99CCFF",
        button: {
          bg: "#2C3E50",
          color: "#fff",
        },
        // bg: "rgb(34,193,195)",
        // height : "3rem"
      },
    },
  },
};
