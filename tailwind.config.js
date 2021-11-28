module.exports = {
  purge: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/hero.svg')",
        "hero-back": "url('/public/hero-bg.svg')",
      },
    },
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
