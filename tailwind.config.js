/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Disabling Preflight in Tailwind CSS has some consequences since it removes the base styles that reset browser inconsistencies.
    // preflight: false,
  },
};
