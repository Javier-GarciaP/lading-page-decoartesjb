export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}", // Ajusta según la ubicación de tus archivos
  ],
  theme: {
    extend: {
      colors: {
        // Modern Dark Palette
        bg: "#09090b", // Zinc 950 - Deep dark background
        "bg-secondary": "#18181b", // Zinc 900 - Slightly lighter for cards
        primary: "#8b5cf6", // Violet 500 - Vibrant purple accent
        "primary-dark": "#7c3aed", // Violet 600 - Darker purple for hover
        secondary: "#a1a1aa", // Zinc 400 - Muted text
        white: "#fafafa", // Zinc 50 - Main text
        accent: "#27272a", // Zinc 800 - Borders/Separators

        // Legacy/Compatibility placeholders (mapped to new palette)
        "dark-blue": "#09090b",
      },
      fontFamily: {
        // Modern Sans-Serif Stack
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        accent: ["Inter", "system-ui", "sans-serif"], // Removed cursive
      }
    },
  },
  plugins: [],
};
