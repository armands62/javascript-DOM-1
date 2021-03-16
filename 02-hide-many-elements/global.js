window.addEventListener('load', function(){
    const Hide = document.getElementsByClassName('hide_me');
    const Button = document.getElementById("button");

    Button.addEventListener('click', function(){
        Array.from(Hide).forEach((e) => {
            e.style.display = "none";
        })
    });
});