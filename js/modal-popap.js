var writeLink = document.querySelector(".write-button");
var modalPopup = document.querySelector(".modal-writeus");

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
  });
