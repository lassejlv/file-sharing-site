module.exports = {
  // Basic settings
  settings: {
    outDir: "./src/public",
    outFile: "styles.css",
  },

  // All the configs for hypestyle, read (https://www.hypestylecss.xyz/docs/cli/config) for more info
  configs: {
    // Customize your colors
    colors: {
      body: "#151418",
      purple: "#6a43e0",
    },

    // Customize utility classes
    utils: {
      margin: {
        top: {},
        bottom: {},
        right: {},
        left: {},
      },

      padding: {
        top: {},
        bottom: {},
        right: {},
        left: {},
      },

      fontFamily: {
        example: '"Roboto", sans-serif',
      },
    },
  },
};
