# TODO: Convert Tailwind v3 config to v4

## Task: Add @theme directive with custom configuration

### Steps:
1. [x] Add @theme directive with custom font family
2. [x] Add custom color variables (black-*, white-*)
3. [x] Add custom background image variable
4. [x] Convert all @apply utilities to plain CSS for Tailwind v4 compatibility
5. [x] Fix CSS syntax errors

## Notes:
- Tailwind v4 uses CSS variables within @theme instead of JavaScript config
- Current file: src/index.css
- Font already imported via @import url('https://fonts.cdnfonts.com/css/general-sans')

## Configuration Added:
```css
@theme {
  --font-generalsans: 'General Sans', sans-serif;

  --color-black: #000;
  --color-black-100: #010103;
  --color-black-200: #0E0E10;
  --color-black-300: #1C1C21;
  --color-black-500: #3A3A49;
  --color-black-600: #1A1A1A;

  --color-white: #FFFFFF;
  --color-white-800: #E4E4E6;
  --color-white-700: #D6D9E9;
  --color-white-600: #AFB0B6;
  --color-white-500: #62646C;

  --background-image-terminal: url('/assets/terminal.png');
}
```

## Body Background Fix:
- Changed from raw CSS to use Tailwind's custom color system
- `bg-black-100` maps to `#010103`


