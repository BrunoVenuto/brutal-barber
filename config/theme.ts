// config/theme.ts

// This file configures the main colors for the template.
// By default, the brand color is a bold yellow.
// To change the color of the entire template, you only need to change these HEX codes.

export const theme = {
  colors: {
    // The main accent color (used for buttons, borders, highlights)
    // Default: '#eab308' (Tailwind's yellow-500)
    brand: '#eab308',

    // A slightly darker shade for hover states or active button presses
    // Default: '#facc15' (Tailwind's yellow-400)
    brandHover: '#facc15',

    // You can also customize the dark background if you want a navy/dark gray instead of pure black
    background: '#0a0a0a',

    // Default text color
    text: '#ffffff',
  }
};
