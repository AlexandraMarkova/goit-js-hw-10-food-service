const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('.theme-switch__toggle');

 checkboxRef.addEventListener('change', onBodyLite);

 function onBodyLite(event) { 
     document.body.classList.toggle('dark-theme');
 }




