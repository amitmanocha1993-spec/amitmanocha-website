import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00113a",
        secondary: "#0c6780",
        "deep-navy": "#001A4D",
        "gold-accent": "#D4AF37",
        background: "#f7f9fc",
        surface: "#f7f9fc",
        "surface-bright": "#f7f9fc",
        "surface-container": "#eceef1",
        "surface-container-low": "#f2f4f7",
        "surface-container-high": "#e6e8eb",
        "surface-container-highest": "#e0e3e6",
        "surface-dim": "#d8dadd",
        "surface-variant": "#e0e3e6",
        "on-surface": "#191c1e",
        "on-surface-variant": "#444650",
        "on-background": "#191c1e",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        outline: "#757682",
        "outline-variant": "#c5c6d2",
        "pure-white": "#FFFFFF",
        "glass-white": "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Montserrat", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "headline-xl": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "display-lg": ["Playfair Display", "serif"],
        nastaleeq: ["Noto Nastaliq Urdu", "serif"],
      },
      fontSize: {
        "body-md": "16px",
        "label-caps": "12px",
        "body-lg": "20px",
        "display-lg-mobile": "48px",
        "headline-xl": "48px",
        "headline-md": "32px",
        "display-lg": "72px",
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
      spacing: {
        "container-max": "1440px",
        "margin-desktop": "80px",
        "stack-xl": "120px",
        gutter: "32px",
        "margin-mobile": "24px",
      },
      boxShadow: {
        ambient: "0 10px 40px -10px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
