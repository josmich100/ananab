module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
      backgroundImage: {
        "hero-pattern": "url('/public/hero.svg')",
        "hero-back": "url('/public/hero-bg.svg')",
      },
      colors: {
        "nav-dark": "#000",
        "nav-light": "#fff",
      },
    },
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  variants: {
    extends: {},
    typography: ["dark"],
  },
  plugins: [],
};
