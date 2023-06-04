const forms = document.getElementById("forms");
forms.addEventListener("submit", generateSpeech);
const message = document.getElementById("message");

function generateSpeech(e) {
  e.preventDefault();
  const msg = new SpeechSynthesisUtterance(message.value);
  window.speechSynthesis.speak(msg);
}
