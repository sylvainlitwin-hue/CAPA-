import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F2EFE6',
          deep: '#E8E4D8',
          edge: '#DCD7C8',
        },
        ink: {
          DEFAULT: '#141414',
          soft: '#3A3A38',
          mute: '#6E6B63',
        },
        blue: {
          DEFAULT: '#1358D8',
          deep: '#0E3F9E',
        },
        signal: '#C62D16',
      },
      fontFamily: {
        sans: ['var(--font-grotesk)', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderColor: {
        rule: 'rgba(20,20,20,0.20)',
        'rule-strong': 'rgba(20,20,20,0.45)',
        'rule-invert': 'rgba(242,239,230,0.22)',
      },
      // Aucun arrondi nulle part : c'est une page imprimée, pas une interface.
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        full: '0',
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.032em',
        label: '0.14em',
        wider: '0.08em',
      },
      maxWidth: {
        measure: '60ch',
        'measure-sm': '46ch',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};

export default config;
