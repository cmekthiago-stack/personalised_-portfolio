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
      // clear existing active states
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  });
};

const roles = [
  "Frontend Designer",
  "Web Designer",
  "UI / UX Designer",
  "Web Developer",
  "Software Tester"
];

const spanElement = document.querySelector(".text-animation span");
let index = 0;

function updateRole() {
  if (!spanElement) return;
  spanElement.textContent = roles[index];
  index = (index + 1) % roles.length;
}

if (spanElement) {
  setInterval(updateRole, 2000);
  document.addEventListener("DOMContentLoaded", updateRole);
}    

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};