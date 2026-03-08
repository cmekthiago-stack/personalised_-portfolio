let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => { 
  let top = window.scrollY;
  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  });
};const roles = [
  "Frontend Designer",
  "Web Designer",
  "UI / UX Designer",
  "Web Developer", 
  "Software Tester"
];

const spanElement = document.querySelector(".text-animation span");

if (spanElement) {
  let index = 0;

  function updateRole() {
    spanElement.classList.remove('fade-in'); 
    void spanElement.offsetWidth;             
    spanElement.textContent = roles[index];
    spanElement.classList.add('fade-in');     
    index = (index + 1) % roles.length;
  }

  updateRole();  
  setInterval(updateRole, 2000);
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};