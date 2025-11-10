// jit --> 실제 사용한 클래스만 빌드에 포함(productuon)
const colors = require("tailwindcss/colors");
export default {
  mode: "aot",
  darkMode: "class",
  // purge: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    borderRadius: { 5: "5px", 10: "10px", 50: "50px" },
    gap: { 0.75: "3px" },
    fontFamily: {
      noto: ["Noto Sans KR", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      height: { "panel-title": "80px" },
      width: {
        "large-panel": "960px",
        "small-panel": "495px",
        "text-field": "360px",
      },
      padding: {
        button: "18px 16px",
        "panel-title": "10px 20px",
        "card-padding": "20px 20px 36px 20px",
      },

      colors: {
        /* html */
        "theme-background": "var(--theme-bg)",
        "theme-color": "var(--theme-color)",
        /* Menu */
        "menu-color": "var(--menu-text-color)",
        "menu-background": "var(--menu-bg)",
        "menu-hover-bg": "var(--menu-hover-bg)",
        /* ThemeStatus */
        "theme-toggle-background": "var(--theme-toggle-bg)",
        "theme-toggle-icon-background": "var(--theme-toggle-icon-bg)",
        "theme-toggle-icon-color": "var(--theme-toggle-icon-color)",
        /* CheckIconToggle */
        "toggle-checked-icon-color": "var(--theme-toggle-checked-icon-color)",
        "toggle-unchecked-icon-color":
          "var(--theme-toggle-unchecked-icon-color)",
        "toggle-checked-icon-background": "var(--theme-toggle-checked-icon-bg)",
        "toggle-unchecked-icon-background":
          "var(--theme-toggle-unchecked-icon-bg)",
        /* SubmitButton */
        "submit-background": "var(--submit-bg)",
        "submit-color": "var(--submit-color)",
        "submit-hover-background": "var(--submit-hover-bg)",
        "submit-disabled-background": "var(--submit-disabled-bg)",
        "submit-disabled-color": "var(--submit-disabled-color)",
        /* Paging Button */
        "paging-background": "var(--paging-bg)",
        "paging-hover-background": "var(--paging-hover-bg)",
        "paging-color": "var(--paging-text-color)",
        /* Card */
        "card-border": "var(--card-border)",
        /* TextField */
        "field-background": "var(--textField-bg)",
        "field-border-color": "var(--textField-border)",
        "field-active-border-color": "var(--textField-active-border)",
        "field-disabled-background": "var(--textField-disabled-bg)",
        "field-disabled-color": "var(--textField-disabled-color)",
        "field-error-border": "var(--textField-error-border)",
        /* Dropdown */
        "dropdown-background": "var(--dropdown-bg)",
        "dropdown-item-hover-background": "var(--dropdown-item-hover-bg)",
        "dropdown-border-color": "var(--dropdown-border-color)",
        "dropdown-disabled-background": "var(--dropdown-disabled-bg)",
        "dropdown-disabled-color": "var(--dropdown-disabled-color)",
        /*Checkbox*/
        "checkbox-border-color": "var(--checkbox-border-color)",
        "checkbox-checked-color": "var(--checkbox-checked-color)",
        "checkbox-background": "var(--checkbox-bg)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        button: "10px",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
