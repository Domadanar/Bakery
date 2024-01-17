const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-mobile-btn-open');
const modalBtnClose = document.querySelector('.modal-mobile-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);