let link = document.querySelector('.button-login');
let popup = document.querySelector('.modal-login')

let button_close = document.querySelector('.modal-close');

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

button_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});