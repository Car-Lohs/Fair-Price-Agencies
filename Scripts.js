// Select the menu links
const menuLinks = document.querySelectorAll('#menuList a');

// Add an event listener for each menu link
menuLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

// Function to scroll to the corresponding section
function scrollToSection(event) {
  event.preventDefault();
  const sectionId = this.getAttribute('href');
  const section = document.querySelector(sectionId);
  section.scrollIntoView({behavior: 'smooth'});
}
