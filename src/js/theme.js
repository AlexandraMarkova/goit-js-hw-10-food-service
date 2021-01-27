const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

 const checkboxRef = document.querySelector('.theme-switch__toggle');

checkboxRef.addEventListener('change', onBodyTheme);

 
function onBodyTheme() {
  const darkTheme = document.body.classList.contains(Theme.DARK);
  
  if (!darkTheme) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', 'dark-theme');
  } else if (darkTheme) {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme', 'dark-theme');
  }
  }


getLocalTheme();
function getLocalTheme() {
  const localTheme = localStorage.getItem('theme');

  if (localTheme) {
    onBodyTheme();
    checkboxRef.checked = true;
  }
}


//  Решение не по ТЗ==========================================================================

// function onBodyTheme() {
//   document.body.classList.toggle(Theme.DARK);
  
//   if (document.body.classList.contains(Theme.DARK)) {
//     localStorage.setItem('theme', 'dark-theme'); 
//   } else localStorage.removeItem('theme');
//  }

// getLocalTheme();
// function getLocalTheme() {
//   const localTheme = localStorage.getItem('theme');

//   if (localTheme) {
//     onBodyTheme();
//     checkboxRef.checked = true;
//   }
// }


