'use strict';

document.querySelector('body').insertAdjacentHTML(
  'beforebegin',
  `
  <header class="header" id="header">
  <nav class="nav container">
    <a href="index.html" class="nav__logo"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.43 200.17"><path d="M635.92,136.4c-5.24-8-16.83-11.65-34.45-10.72-26.79,1.31-50,12.07-68.63,20.72-2,.94-4,1.86-6,2.76-.62.31-61.5,29.91-83.34,5.08-9.56-13.11,10.44-53.18,19-67.54l.07-.13c0-.06,3.49-6.76,6.93-13.18,4.28-8.21,13.64-28.74,8.13-42.22A17.35,17.35,0,0,0,466.3,21c-11.88-3.75-26,9.15-43.2,39.46a66.54,66.54,0,0,0,3.58-14.12C428,35.57,426.38,28,421.77,24c-5-4.41-11.47-2.82-11.66-2.77C395.36,24.54,378,57.76,361.39,93.16c-7.08,14.85-13,27.59-17.71,37.83-3.25,7-6.07,13.13-8.37,18-3.58,7.3-5.86,10.89-7.19,12.64-2.46-20.4,23-63.72,38.4-90.06,4.88-8.31,9.09-15.49,11.74-20.66,4.75-9.54,5.59-18,2.49-25.16-4.4-10.15-15.15-13.84-16.46-14.25-8.72-3.43-21.42-.82-30.4,2.77a85.35,85.35,0,0,0-21.17,12.13,158.81,158.81,0,0,0-24.24,24.26A54,54,0,0,0,277,35.42c-14.38-13.34-34.62-13.93-36.56-14A84.57,84.57,0,0,0,210.68,25c-14.91,4.5-35.17,15.3-46.92,41.27-.42.94-10.21,23.2-2.54,38.61,3.27,6.57,9.16,10.87,17.51,12.79A3.62,3.62,0,0,0,182.9,113c-2-6.38-3.88-20.05,6.71-39.91.15-.26,15.41-26.55,42.3-31.93,14.12-2.77,24.86-.86,31.92,5.68L264,47c.67.52,16.21,13,1.09,41.55a61.17,61.17,0,0,1-33.44,29.32c2-3.47,3.93-6.9,5.86-10.25,8.41-14.59,15.67-27.2,18-37.15.93-4,.26-7.5-2-10.27-4.86-6-15.45-6.49-19.91-6.42A4.23,4.23,0,0,0,230.42,55a4.18,4.18,0,0,0-1.21,3.39c2,15.48-10.08,35.54-21.79,55-1.91,3.16-3.88,6.42-5.76,9.62a111.41,111.41,0,0,1-18.22-2.75c-13.05-2.57-55.12-11.88-55.55-12-16.23-3.54-54.23-11.84-90.69-1.88-17,4.6-26.86,11.65-29.27,21-3.15,12.19,7.59,23.78,11,27.05l.15.13a3.67,3.67,0,0,0,3,.75,3.73,3.73,0,0,0,2.56-1.89l.1-.21C36.91,124.3,83.14,124.25,126.81,128c12.86.75,31.09,3.05,54.14,6.83,5.2.93,9.47,1.56,13.35,2a72.54,72.54,0,0,0-6.57,17.94c-2.29,11.57-.75,20.72,4.6,27.2a23.56,23.56,0,0,0,16.94,8.37h.23a3.75,3.75,0,0,0,3.24-4.19l0-.31-.1-.28c-4.2-12-1.27-27.28,9.5-49.55,9.27-1.11,25.72-4.34,40.84-13.66a69.83,69.83,0,0,0,13.91-11.14,22,22,0,0,0,9.11,4.7c6.53,1.82,12.9,1.21,16.7.84a3.31,3.31,0,0,0,3-2.65,3.39,3.39,0,0,0-1.77-3.68,13.53,13.53,0,0,1-7-8.45c-2.25-7.57.72-18.83,8.6-32.58,23.66-41.78,48.16-49.21,54.4-47.18.9.29,1.1.66,1.23,1,2.86,7.92-22.4,49.27-41.65,79.68-28.06,44.4-19.05,62.74-11.16,69.73,4.12,3.58,9.63,5.46,16.85,5.75h.13c3.39,0,9.67-.8,13.72-5.41l.1-.12c10.25-13.26,29.19-54.35,44.41-87.37,7.73-16.75,14.4-31.22,17.72-37.13l.07-.14a.47.47,0,0,1,.05-.1c-.66,6-7.57,22.15-12.79,34.35-8.19,19.15-16.66,38.95-17.1,49.92-.4,10.24,6.41,17.42,18.22,19.23a9.41,9.41,0,0,0,10.55-5.89c9.73-23.26,39.89-90.91,52.93-102.67-.34,3.23-2.57,11.64-13.38,32.51-33.1,62-8.52,88.17-6.51,90.15,13,14.77,33.68,17.46,53.37,15.57,26.36-2.53,51-13.25,53.15-14.22,44.61-17.44,73.48-17.75,88.22-1a3.77,3.77,0,0,0,6.17-.59l0,0C636.88,160,642.48,146.48,635.92,136.4Z"/></svg></a>


    <div class="nav__menu" id="nav-menu">
      <ul class="nav__list grid">
        <li class="nav__item">
          <a href="index.html" class="nav__link active-link"
            ><i class="uil uil-estate nav__icon"></i>Home
          </a>
        </li>
        <li class="nav__item">
          <a href="#about" class="nav__link">
            <i class="uil uil-user nav__icon"></i>About</a
          >
        </li>
        <li class="nav__item">
            <a href="#services" class="nav__link">
              <i class="uil uil-file-alt nav__icon"></i>Skills</a
            >
        </li>
        <li class="nav__item">
          <a href="#services" class="nav__link">
            <i class="uil uil-briefcase-alt nav__icon"></i>Services</a
          >
        </li>
       
        <li class="nav__item">
          <a href="#portfolio" class="nav__link">
            <i class="uil uil-scenery nav__icon"></i>Portfolio
          </a>
        </li>
        <li class="nav__item">
          <a href="#contact" class="nav__link">
            <i class="uil uil-message nav__icon"></i>Contact Me
          </a>
        </li>
      </ul>
      <i class="uil uil-times nav__close" id="nav-close"></i>
    </div>

    <div class="nav__btns">
      <i class="ui uil-moon change-theme" id="theme-btn"></i>
      <div class="nav__toggle" id="nav-toggle">
        <i class="uil uil-apps"></i>
      </div>
    </div>
  </nav>
</header>
  `
);

document.querySelector('body').insertAdjacentHTML(
  'beforeend',
  `
  
  <footer class="footer">
  <div class="footer__bg">
    <div class="footer__container container grid">
      <div>
        <h1 class="footer__title">Pat</h1>
        <span class="footer__subtitle">Frontend developer</span>
      </div>
      <ul class="footer__links">

        <li>
          <a href="#services" class="footer__link">Services</a>
        </li>

        <li>
          <a href="portfolio" class="footer__link">Portfolio</a>
        </li>

        <li>
          <a href="#contact" class="footer__link">Contact Me</a>
        </li>

      </ul>

      <div class="footer__socials">
        <a href="" class="footer__social"><i class="ul uil-linkedin-alt"></i></a>
        <a href="" class="footer__social"> <i class="uil uil-instagram"></i></a>
        <a href="" class="footer__social"> <i class="uil uil-facebook-f"></i></a>

      </div>

    </div>

    <p class="footer__copy">&#169;Perspective Studio. All rights reserved</p>
  </div>
</footer>

  
  `
);
