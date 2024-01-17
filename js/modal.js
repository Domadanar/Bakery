const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open, .modal-mobile-btn-open');
const modalBtnClose = document.querySelectorAll('.modal-btn-close, .modal-mobile-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

modalBtnClose.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});
