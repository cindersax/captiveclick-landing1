const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        ...defaultTheme.textColor,
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        ...defaultTheme.backgroundColor,
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        ...defaultTheme.borderColor,
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
  darkMode: 'class'
};
