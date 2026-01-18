/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Define Theme C */
:root {
  --color-primary: #1A2A56; /* Navy */
  --color-secondary: #3F4E2A; /* Army Olive */
  --color-accent: #D89A1F; /* Saffron */
  --color-background: #F2F3F4; /* Steel Grey */
  --color-card: #FFFFFF;
  --color-text: #0B0C0E;
  --color-border: #CED1D6;
}

/* Base application styling */
body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
}

button, input, textarea {
  font-family: 'Inter', sans-serif;
}

