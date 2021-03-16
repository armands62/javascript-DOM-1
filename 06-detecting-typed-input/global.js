// Your JavaScript goes here.
window.addEventListener('load', function(){
    const textField = document.getElementById("full_name");
    textField.addEventListener("keyup", function() {

    const greeting = document.getElementById("greeting");
    greeting.innerHTML = ("Hello there, " + textField.value + "!");

  });
});