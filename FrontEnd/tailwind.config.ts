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
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm, professional silver/charcoal base - NO stark whites or light reds
        background: '#EBEBEB',  // Warm cream-silver
        surface: '#F5F3EF',     // Warm off-white for cards
        border: '#B8B5AD',      // Muted silver-gray
        muted: '#8A8780',       // Warm gray
        foreground: '#2C2C2C',  // Deep charcoal for text
        
        deepBlack: '#1a1a1a',
        
        // Deep, earthy brick red (not bright or light)
        primary: '#6B2E2E',     // Deep warm brick red
        primaryLight: '#8B4A4A', // Slightly lighter but still deep
        primaryDark: '#4A2020',   // Very dark brick
        
        // Silver accents (professional, neutral)
        highlight: '#A8A5A0',   // Warm silver
        glow: '#6B2E2E',        // Same as primary for consistency
        
        success: '#4CAF50',
        warning: '#FFC107',
        danger: '#f44336',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #E8E6E1, #F5F3EF, #E8E6E1)',
        'dark-gradient': 'linear-gradient(135deg, #E8E6E1, #F5F3EF, #DCD9D2)',
        'grid-pattern': 'linear-gradient(rgba(107, 46, 46, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 46, 46, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        glow: '0 0 15px rgba(107, 46, 46, 0.25)', // Softer, darker red glow
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
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [animate],
} satisfies Config