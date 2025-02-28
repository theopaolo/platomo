module.exports = {
  darkMode: "class",
  content: ["./site/**/**/*.php"],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ["GeneralSans-Variable", "serif"],
      },
      colors: {
        secondary: "#EDE4E0",
        tertiary: "#C8DBBE",
        accent: "#FFC857",
        red: "#FF5A5F",
        purple: "#DFD9EB",
      },
      safelist: ["invisible"],
      fontSize: {
        "page-title": "clamp(2rem, 4vw, 4.5rem)",
        "paragraph-title": "clamp(1.5rem, 2vw, 2.35rem)",
        subtitle: "clamp(1.2rem, 1.5vw, 1.8rem)",
        "small-title": "clamp(0.9rem, 1vw, 1.25rem)",
      },
      lineHeight: {
        "paragraph-title": "3rem", // 48px
        subtitle: "2.625rem", // 42px
      },
    },
  },
  variants: {},
  plugins: [],
};
