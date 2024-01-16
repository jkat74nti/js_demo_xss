const text_ruta = document.querySelector("#text");
const area_ruta = document.querySelector("#texter");
const ul = document.querySelector("ul");

function add_comment(){
    
    ul.innerHTML="<li> "+area_ruta.value+"</li>"
    
}

