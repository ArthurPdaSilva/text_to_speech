const forms = document.getElementById("forms");
const message = document.getElementById("message");

forms.addEventListener("submit", generateSpeech);

function generateSpeech(e) {
  e.preventDefault();

  const msg = new SpeechSynthesisUtterance(message.value);
  window.speechSynthesis.speak(msg);
}
