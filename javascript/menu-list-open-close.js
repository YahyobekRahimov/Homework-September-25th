document.addEventListener('DOMContentLoaded', function () {
  const menuTitles = document.querySelectorAll('.menu-title, .menu-title2');
  const menuList = document.querySelector('.menu-list');
  let isMenuOpen = false; // Track whether the menu is open or closed

  // Function to open the menu
  function openMenu() {
    menuList.style.display = 'block';
    isMenuOpen = true;
  }

  // Function to close the menu
  function closeMenu() {
    menuList.style.display = 'none';
    isMenuOpen = false;
  }

  // Toggle the menu state when a title is clicked
  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Add click event listeners to menu titles to toggle the menu
  menuTitles.forEach(menuTitle => {
    menuTitle.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click from closing the menu immediately
      toggleMenu();
    });
  });

  // Add click event listener to document to close the menu when something else is clicked
  document.addEventListener('click', function () {
    if (isMenuOpen) {
      closeMenu();
    }
  });

  // Prevent the menu from closing when clicking inside the menu itself
  menuList.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});