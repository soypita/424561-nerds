var writeLink = document.querySelector(".write-button");
var modalPopup = document.querySelector(".modal-writeus");

var closeLink = document.querySelector(".modal-close");

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
  });

closeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
});
