function setUpTabs() {
  document.querySelectorAll('.tabs-button').forEach(button => {
    button.addEventListener('click', () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      tabToActivate = tabsContainer.querySelector(`.project-content[data-tab="${tabNumber}"]`);

      sideBar.querySelectorAll('.tabs-button').forEach(button => {
        button.classList.remove('tabs-button-active');
      });

      tabsContainer.querySelectorAll('.project-content').forEach(tab => {
        tab.classList.remove('active-content');
      });


      button.classList.add('tabs-button-active');
      tabToActivate.classList.add('active-content');

      // document.querySelectorAll('.tabs').forEach(tabsContainer => {
      // 	tabsContainer.querySelector('.tabs-sidebar .tabs-button').click();
      // });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setUpTabs();
});

// SMOOTH SCROLL METHODOLOGIES

// document.querySelectorAll('.li-link').forEach((el)=>{
//   el.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log(e);

//     const id = this.getAttribute('href');
//     // document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   });
// });

document.querySelector('.nav-list').addEventListener('click', (e) =>{
  e.preventDefault()

  if(e.target.classList.contains('li-link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});

    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');

    navList.classList.toggle('nav-list-active');

    // burger animation
    burger.classList.toggle('toggle');
  }
});

// FUNCTION FOR SMOOTHSCROLL

// function smoothScroll(target, duration) {
//   const targetEl = document.querySelector(target);
//   let targetPosition = targetEl.getBoundingClientRect().top;
//   let startPosition = window.pageYOffset;
//   let distance = targetPosition - startPosition;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     let timeElapsed = currentTime - startTime;
//     const run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t * b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// const homeLink = document.querySelector('#home-link');
//   homeLink.addEventListener('click', () => {
//   smoothScroll('.first-section', 1000);
  
//   const burger = document.querySelector('.burger');
//   const navList = document.querySelector('.nav-list');
//   const navLinks = document.querySelectorAll('.nav-links');

//   navList.classList.toggle('nav-list-active');

//   // burger animation
//   burger.classList.toggle('toggle');
// });

// const aboutLink = document.querySelector('#about-link');
//   aboutLink.addEventListener('click', () => {
//   smoothScroll('.section2', 1000);

//   const burger = document.querySelector('.burger');
//   const navList = document.querySelector('.nav-list');
//   const navLinks = document.querySelectorAll('.nav-links');
  
//   navList.classList.toggle('nav-list-active');

//   // burger animation
//   burger.classList.toggle('toggle');
// });

// const projectLink = document.querySelector('#project-link');
//   projectLink.addEventListener('click', () => {
//   smoothScroll('.section3', 1500);

//   const burger = document.querySelector('.burger');
//   const navList = document.querySelector('.nav-list');
//   const navLinks = document.querySelectorAll('.nav-links');
  
//   navList.classList.toggle('nav-list-active');

//   // burger animation
//   burger.classList.toggle('toggle');
// });

// const contactLink = document.querySelector('#contact-link');
//   contactLink.addEventListener('click', () => {
//   smoothScroll('.section4', 1500);

//   const burger = document.querySelector('.burger');
//   const navList = document.querySelector('.nav-list');
//   const navLinks = document.querySelectorAll('.nav-links');
  
//   navList.classList.toggle('nav-list-active');

//   // burger animation
//   burger.classList.toggle('toggle');
// });

// HAMBURGER TOGGLE
function navSlide() {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-links');

  burger.addEventListener('click', () => {
    // navLinks.classList.toggle('nav-list-active');
    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = '';
    //   } else {
    //     link.style.animation = 'navLinkFade 0.5s ease-in forwards ${index / 5}s'
    //   }
    // });

    navList.classList.toggle('nav-list-active');

    // burger animation
    burger.classList.toggle('toggle');
  });

}
navSlide();

// FOCUS IN AND OUT OF INPUT
function inputFocus() {
  const inputBox = document.querySelectorAll('.input-group input');
  const textareaBox = document.querySelector('.input-group textarea');

  inputBox.forEach(input => {
    input.addEventListener('blur', () => {
      const inputValue = input.value;
      if (inputValue === '') {
        input.classList.remove('has-value');
      } else {
        input.classList.add('has-value');
      }
    });
  });

  textareaBox.addEventListener('blur', blurredTextarea);
  function blurredTextarea() {
    const inputValue = textareaBox.value;
    if (inputValue === '') {
      textareaBox.classList.remove('has-value');
    } else {
      textareaBox.classList.add('has-value');
    }
  }

}
inputFocus();

// FORM VALIDATION

function formValidation() {
  const nameInput = document.querySelector('.name-input');
  const emailInput = document.querySelector('.email-input');
  const textareaInput = document.querySelector('.textarea-input');
  const submitBtn = document.querySelector('form');

  submitBtn.addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput);
    console.log(textareaInput);
  }

}
formValidation();

// ////////////////////////////////////////////
// ////////////////////////////////////////////
// ////////////////////////////////////////////
// ////////////////////////////////////////////
// ////////////////////////////////////////////
// implementing sticky navigation and smoothscroll
const nav = document.querySelector('.nav');
const section2 = document.querySelector('.section2');
// const initialCoords = section2.getBoundingClientRect(); 
// window.addEventListener('scroll', function(){
//   console.log(window.scrollY);

//   if(window.scrollY > initialCoords.top){
//     nav.classList.add('sticky');
//   }else{
//     nav.classList.remove('sticky');
//   }
// });

// using the observer intersection api to implement sticky navigation and smooth scroll

// const obsCallBack = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }
// const options = {
//   root: null,
//   threshold: [0.1, 1]
// }
// const observer = new IntersectionObserver(obsCallBack, options);
// observer.observe(section2);

const section1 = document.querySelector('.first-section');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries){
  const [entry] = entries;
  
  if(!entry.isIntersecting){
    nav.classList.add('sticky');
  }else{
    nav.classList.remove('sticky');
  }
}
const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
observer.observe(section1);

