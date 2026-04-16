import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    safelist: [
    { pattern: /bg-(red|blue|green|yellow|pink|purple|indigo|gray|black|white|zinc|slate|orange|lime|emerald|teal|cyan|fuchsia|violet|rose)-(50|100|200|300|400|500|600|700|800|900|950)/ },
    { pattern: /text-(red|blue|green|yellow|pink|purple|indigo|gray|black|white|zinc|slate|orange|lime|emerald|teal|cyan|fuchsia|violet|rose)-(50|100|200|300|400|500|600|700|800|900|950)/ },
    'bg-gradient-to-br',
    'from-red-500',
    'via-yellow-500',
    'via-green-500',
    'to-purple-500'
  ],
  darkMode: 'class',
  theme: {
    extend: {
 colors: {
    // Base UI shades
    background: '#121515',
    surface: '#393c3c',
    border: '#656868',
    muted: '#959898',
    foreground: '#c7cbcb',
    deepBlack: '#040e15ee',
    // Brand / accent system
    primary: '#215374',
    primaryLight: '#628b9e',
    primaryDark: '#1d3640',

    highlight: '#6bcdc8',
    glow: '#71f9f2',

    // Optional semantic colors (future-proofing)
    success: '#629e64',
    warning: '#f9f871',
    danger: '#ff4f58', // you can keep this from old config if useful
  },

  backgroundImage: {
    'brand-gradient': 'linear-gradient(135deg, #121315, #1d2c40, #34486e, #627e9e, #6b95cd, #71bcf9)',
    'dark-gradient': 'linear-gradient(135deg, #080809f7, #0b1016, #070e0e, #070707, #050707, #090909)',
     'grid-pattern': 'linear-gradient(rgba(107, 205, 200, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 205, 200, 0.05) 1px, transparent 1px)',
  },
 backgroundSize: {
      'grid': '50px 50px',
    },
  boxShadow: {
    glow: '0 0 15px #a4cd6b',
  },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rainbow: "rainbow var(--speed, 4s) infinite linear",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        "spin-slow": "spin 1s linear infinite",
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) infinite linear",
      },
      fontFamily: {
        mono: ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        exo: ['"Exo 2"', 'ui-sans-serif', 'system-ui'],
         sans: ['Orbitron', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [animate],
} satisfies Config