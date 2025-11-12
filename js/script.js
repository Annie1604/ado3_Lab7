function init() {
  const alertButton = document.getElementById('entrybutton');
  const textInput = document.getElementById('entryinput');
  const textOutput = document.getElementById('textoutput');

  alertButton.addEventListener('click', function() {
    const inputText = textInput.value.trim();

    if (inputText === "") {
      alert("Please enter a message before clicking!");
      return;
    }

    const yourName = "Annie"; 
    alert(`${yourName}: ${inputText}`);
    textOutput.textContent = inputText;
  });
}
window.addEventListener('load', init);
