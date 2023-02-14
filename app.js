let formulaire = document.querySelector('input');

let errorMsg = document.querySelector('.error');

let submit = document.getElementsById('#submit')

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    invalForm(username,0 ,"le champ ne doit pas etre vide");
    invalForm(email,1 ,"le champ ne doit pas etre vide");
    invalForm(password,2 ,"le champ ne doit pas etre vide");
});
let invalForm = (input, serial, message)=>{
    if (input.value.trim()=== "") {
        errorMsg[serial].innerHTML = message;
        input.style.border ="2px solid red"
    }
    else{
        errorMsg[serial].innerHTML = message;
        input.style.border ="2px solid green"
    }
}