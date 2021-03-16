window.addEventListener('load', function(){
    const Show = document.getElementsByClassName('show_me');
    const Button = document.getElementById("button");

    Button.addEventListener('click', function(){
        Array.from(Show).forEach((e) => {
            e.style.display = "initial";
        })
    });
});