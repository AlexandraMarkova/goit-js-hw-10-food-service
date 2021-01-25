const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('.theme-switch__toggle');

checkboxRef.addEventListener('change', onBodyTheme);

function onBodyTheme() {
  document.body.classList.toggle(Theme.DARK);
  
  if (document.body.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', 'dark-theme'); 
  } else localStorage.removeItem('theme');
 }

getLocalTheme();
function getLocalTheme() {
  const localTheme = localStorage.getItem('theme');

  if (localTheme) {
    onBodyTheme();
    checkboxRef.checked = true;
  }
}


