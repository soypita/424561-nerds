var writeLink = document.querySelector(".write-button");

var modalPopup = document.querySelector(".modal-writeus");

var closeLink = modalPopup.querySelector(".modal-close");

var userName = modalPopup.querySelector("[name=write-name]");

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
  userName.focus();
  });

closeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
});
