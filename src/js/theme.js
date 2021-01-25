const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('.theme-switch__toggle');

 checkboxRef.addEventListener('change', onBodyLite);

function onBodyLite(event) {
   
  document.body.classList.toggle(Theme.DARK);
  
  if (document.body.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', 'dark-theme'); 
  } else localStorage.removeItem('theme');
 }

const localTheme = localStorage.getItem('theme');

if (localTheme) { 
   onBodyLite();
  checkboxRef.checked = true;
}



