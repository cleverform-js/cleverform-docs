
export default {
  title: "CleverForm Docs",

  // dest: "/public",

  //sources of mdx
  files: "src/documentation/**/*.mdx",
  // files: "src/docz/xaa/*.mdx",

  // assets dir
  // public: "public", // default publicg

  menu: [
    "Welcome!",
    {
      name: "Introduction",
      menu: ["What is cleverform.js?", "Installation", "Simplest Usage"],
    },

    // "Cleverform instance",

    {
      name: "CleverForm instance",
      menu: ["Instantiation", "Options", "Form events"],
    },

    {
      name: "Validation rules",
      menu: [
        "Rules anatomy",
        "Rules behavior",
        "Built-in rules",
        "Custom validation rule",
        "Customized error message",
      ],
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
