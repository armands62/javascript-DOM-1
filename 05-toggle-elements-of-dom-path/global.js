// Your JavaScript goes here.
window.addEventListener('load', function(){
    const Toggle = document.querySelectorAll('.second_five li')
    const Button = document.getElementById("toggle_button");

    Button.addEventListener('click', function(){
        Toggle.forEach((e) => {
            if(e.style.display == 'flex') {
                e.style.display = 'none'
            } else {
                e.style.display = 'flex'
            }
        });
    });
});