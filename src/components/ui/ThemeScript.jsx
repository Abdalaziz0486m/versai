// src/components/ThemeScript.jsx
// يوضع هذا الكود في head للحماية من Flash of wrong theme

const ThemeScript = () => {
  const script = `
      (function() {
        try {
          // Get theme from localStorage
          const savedTheme = localStorage.getItem('theme');
          const theme = savedTheme && ['light', 'dark', 'system'].includes(savedTheme) 
            ? savedTheme 
            : 'system';
          
          // Determine actual theme
          let actualTheme;
          if (theme === 'system') {
            actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          } else {
            actualTheme = theme;
          }
          
          // Apply theme immediately
          const root = document.documentElement;
          if (actualTheme === 'dark') {
            root.classList.add('dark');
            root.setAttribute('data-theme', 'dark');
          } else {
            root.classList.remove('dark');
            root.setAttribute('data-theme', 'light');
          }
          
          // Store the current theme
          localStorage.setItem('theme', theme);
        } catch (e) {
          console.warn('Theme initialization failed:', e);
        }
      })();
    `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: script,
      }}
    />
  );
};

export default ThemeScript;
