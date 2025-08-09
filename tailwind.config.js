/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '1%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-5px)' },
          '4%, 80%': { transform: 'translateX(5px)' },
        },
      },
      ping: { // 🔹 recupera el ping original
        '75%, 100%': { transform: 'scale(2)', opacity: '0' }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [
    require('@midudev/tailwind-animations')
  ],
}
