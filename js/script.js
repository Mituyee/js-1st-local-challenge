var button = document.querySelector(".show-cat");
//console.log (button.outerHTML);
var cat = document.querySelector(".cat")
button.addEventListener ("click", function (){
    button.innerText = "It's working";
    cat.classList.add("show");
})
//console.log (button.outerHTML);
