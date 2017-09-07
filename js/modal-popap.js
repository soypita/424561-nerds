var writeLink = document.querySelector(".write-button");

var modalPopup = document.querySelector(".modal-writeus");

var closeLink = modalPopup.querySelector(".modal-close");

var writeName = modalPopup.querySelector("[name=write-name]");

var writeEmail = modalPopup.querySelector("[name=write-email]");

var writeMessage = modalPopup.querySelector("[name=write-message]");

var writeForm = modalPopup.querySelector(".login-form");

var storageName = localStorage.getItem("writeName");

var storageEmail = localStorage.getItem("writeEmail");

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
  if(storageName) {
    writeName.value = storageName;
  }
  if(storageEmail) {
    writeEmail.value = storageEmail;
  }
  storageName ? (storageEmail ? writeMessage.focus() : writeEmail.focus()) : writeName.focus();
  });

closeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
  if(!writeName.value || !writeEmail.value || !writeMessage.value) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("writeName", writeName.value);
    localStorage.setItem("writeEmail", writeEmail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
    }
  }
});
