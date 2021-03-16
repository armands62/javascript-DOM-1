// Your JavaScript goes here.
window.addEventListener('load', function(){
    const Toggle = document.getElementsByClassName('toggle_me');
    const Button = document.getElementById("button");

    Button.addEventListener('click', function(){
        Array.from(Toggle).forEach((e) => {
            if(e.style.display == 'none') {
                e.style.display = 'flex'
            }else{
                e.style.display = 'none'
            }
        });
    });
});