import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				1200: '1200px'
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
					darker: 'hsl(var(--primary-darker) / <alpha-value>)',
					clearer: 'hsl(var(--primary-clearer) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				figtree: ['Figtree', ...fontFamily.sans],
				inter: ['Inter', ...fontFamily.sans],
				bigola: ['BigolaDisplay', ...fontFamily.sans]
			}
		}
	},
	plugins: []
} satisfies Config;
