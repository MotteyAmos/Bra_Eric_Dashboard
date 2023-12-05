/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'primary-50': '#F0FDF4',
        'primary-100': '#DCFCE7',
        'primary-200': '#BBF7D0',
        'primary-300': '#86EFAC',
        'primary-400': '#4ADE80',
        'primary-500': '#F0FDF4',
        'primary-600': '#F0FDF4',
        'primary-700': '#15803D',
        'primary-800': '#475569',
        'primary-900': '#111827',

        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E537E3',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
        
        'danger': '#EF4444',
        'yellow': "#FACC15",
       

        'white': "#FFFFFF",
        'black': "#000000"

      },
    },
  },
  plugins: [],
}