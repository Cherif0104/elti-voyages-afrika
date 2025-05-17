
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#002C5F', // Updated to Chronoel Navy
					light: '#31A8E0',   // Updated to Chronoel Blue
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#31A8E0', // Updated to Chronoel Blue
					foreground: '#002C5F'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#31A8E0', // Updated to Chronoel Blue
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: {
					DEFAULT: '#34A853', // Green for success toasts
				},
				placeholder: {
					DEFAULT: '#F5F7FA', // Updated to Chronoel Gray
				},
			},
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'loader': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'count-up': {
					'0%': { 
						content: '0',
						opacity: '0'
					},
					'100%': { 
						opacity: '1'
					}
				},
				'bounce-subtle': {
					'0%, 100%': {
						transform: 'translateY(-2%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'zoom-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'zoom-out': {
					'0%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0.95)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'slide-out-right': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				},
				'shimmer': {
					'100%': {
						'transform': 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'loader': 'loader 3s ease-in-out',
				'count-up': 'count-up 2s forwards',
				'bounce-subtle': 'bounce-subtle 3s infinite',
				'zoom-in': 'zoom-in 0.3s ease-out',
				'zoom-out': 'zoom-out 0.3s ease-in',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-in',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'shine': 'shimmer 0.85s ease forwards'
			},
			backgroundImage: {
				'gradient-card': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
				'gradient-primary': 'linear-gradient(135deg, #002C5F 0%, #31A8E0 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #31A8E0 0%, #68c6f2 100%)',
				'gradient-overlay': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,44,95,0.8) 100%)',
				'pattern-dots': 'radial-gradient(currentColor 1px, transparent 1px)',
				'pattern-grid': 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
