const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#121212',
        },
      },
    },
    fontFamily: {
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
  plugins: [
    createThemes(
      {
        light: {
          primary: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf', // primary
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
          secondary: {
            50: '#f1e4e4',
            100: '#dbc8c8',
            200: '#c4a7a7',
            300: '#ac8585',
            400: '#946969',
            500: '#7d4d4d',
            600: '#694343',
            700: '#553939',
            800: '#412e2e',
            900: '#2e2323',
          },
        },
        dark: {
          primary: {
            50: '#dbe7e5',
            100: '#c6dedb',
            200: '#a0c5c2',
            300: '#7badab',
            400: '#569599',
            500: '#417e7d',
            600: '#36676b',
            700: '#2d5358',
            800: '#244546',
            900: '#1d383a',
          },
          secondary: {
            50: '#b58a8a',
            100: '#a17878',
            200: '#8d6666',
            300: '#795555',
            400: '#654343',
            500: '#513232',
            600: '#3d2424',
            700: '#291515',
            800: '#150707',
            900: '#0a0000',
          },
        },
      },
      {
        defaultTheme: {
          /**
           * when `@media (prefers-color-scheme: light)` is matched,
           * the default theme is the "light" theme
           */
          light: 'light',
          /**
           * when `@media (prefers-color-scheme: dark)` is matched,
           * the default theme is the "dark" theme
           */
          dark: 'dark',
        },
        strict: true,
      }
    ),
  ],
};
