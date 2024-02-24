/** @type {import('tailwindcss').Config} */
import { customColors } from "./src/config/tailwind/custom-colors";
import { customTypography } from "./src/config/tailwind/custom-typography";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: customColors,
    extend: {
      boxShadow: {
        xsm: "0 1px 2px 0 rgba(82, 82, 91, 0.05)",
        sm: "0 6px 10px 0 rgba(82, 82, 91, 0.04), 0 2px 4px 0 rgba(82, 82, 91, 0.05)",
        md: "0 4px 6px -2px rgba(9, 9, 11, 0.03), 0 12px 16px -4px rgba(9, 9, 11, 0.08)",
        lg: "0 8px 8px -4px rgba(9, 9, 11, 0.03), 0 20px 24px -4px rgba(9, 9, 11, 0.08)",
        xl: "0 8px 8px -4px rgba(9, 9, 11, 0.03), 0 24px 48px -12px rgba(9, 9, 11, 0.18)",
        "2xl":
          "0 8px 8px -4px rgba(9, 9, 11, 0.03), 0 32px 64px -12px rgba(9, 9, 11, 0.14)",
      },
      dropShadow: {
        radio: [
          "0 0 0 2px rgba(228, 228, 231)",
          "0 2px 2px 0 rgba(0, 0, 0, 0.11)",
        ],
      },
      typography: customTypography,
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/typography"),
    // eslint-disable-next-line no-undef
    require("tailwindcss-animate"),
  ],
};
