'use strict';

const showModalButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const hideModalAndOverlay = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });
});

closeModal.addEventListener('click', hideModalAndOverlay);

overlay.addEventListener('click', hideModalAndOverlay);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideModalAndOverlay();
  }
});
