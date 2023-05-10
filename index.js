function hideImage() {
  var textboxInput = document.getElementById("textbox-input");
  var textboxRight = document.getElementById("textbox-right");
  var image = document.getElementById("image");
  var copiar = document.getElementById("copiar");
  var textBelowImage = document.getElementById("text-below-image");
  if (textboxInput.value.trim() !== "") {
      image.style.display = "none";
      textBelowImage.style.display = "none";
      copiar.style.display = "flex";
      textboxRight.value = textboxInput.value;
  } else {
      image.style.display = "block";
      textBelowImage.style.display = "block";
      copiar.style.display = "none";
      textboxRight.value = "";
  }
}
function encryptText() {
  var textboxRight = document.getElementById("textbox-right");
  var text = textboxRight.value.toLowerCase();
  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/a/g, "ai");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  textboxRight.value = text;
}
function decryptText() {
  var textboxInput = document.getElementById("textbox-input");
  var textboxRight = document.getElementById("textbox-right");
  var text = textboxInput.value.toLowerCase();
  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ai/g, "a");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  textboxRight.value = text;
  }
function copyText(message) {
  var textboxRight = document.getElementById("textbox-right");
  var notification = document.getElementById("notification");
  textboxRight.select();
  document.execCommand("copy");
  notification.innerHTML = "Texto copiado";
  notification.style.opacity = "1";
  notification.style.pointerEvents = "auto";
  setTimeout(function() {
    hideNotification();
  }, 2000);
}
function hideNotification() {
  var notification = document.getElementById("notification");
  notification.style.opacity = "0";
  notification.style.pointerEvents = "none";
}