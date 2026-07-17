console.log('JS Loaded');
// DOM Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Helper Functions
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Open modal
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }

btnsOpenModal.forEach(function(button) {
    button.addEventListener('click', openModal);
})

// Close when close button is clicked
btnCloseModal.addEventListener('click', closeModal);

// Close when overlay is clicked
overlay.addEventListener('click', closeModal);

// Close when escape key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
