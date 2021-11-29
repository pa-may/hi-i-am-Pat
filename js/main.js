'use strict';

window.onload = function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navClose = document.getElementById('nav-close');
  const navLink = document.querySelectorAll('.nav__link');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  navLink.forEach((c) =>
    c.addEventListener('click', () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('active');
    })
  );

  const skillsContent = document.getElementsByClassName('skills__content');

  var i;

  for (i = 0; i < skillsContent.length; i++) {
    const arrowDown = document.getElementsByClassName('skills__arrow');

    skillsContent[i].addEventListener('click', function () {
      this.classList.toggle('open');
      arrowDown.classList.toggle('open');
    });
  }

  const modalViewer = document.querySelectorAll('.services__modal');
  const modalBtns = document.querySelectorAll('.services__btn');
  const modalClose = document.querySelectorAll('.services__modal-close');

  const modal = function (modalClick) {
    modalViewer[modalClick].classList.add('active-modal');
  };

  modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
      modal(i);
    });
  });

  modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
      modalViewer.forEach((modalViewer) => {
        modalViewer.classList.remove('active-modal');
      });
    });
  });
};
