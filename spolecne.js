document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-tlacitko');
  
    menuButton.addEventListener('click', () => {
        const menuOpen = document.querySelector('#menu-polozky');menuOpen.classList.toggle('show');
    });
  });


  //změna ikony na křážek - opravit
  /*const menuIcon = document.querySelector('#menu-tlacitko');
if (menuIcon.classList.contains('fas fa-xmark')) {
    menuIcon.classList.remove('fas fa-xmark');
} else {
    menuIcon.classList.add('fas fa-xmark');
}*/