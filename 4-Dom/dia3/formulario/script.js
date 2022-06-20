"use stript"

const form =document.forms[0]
console.log(form)


const {user, pass} = form.elements
/* const user = form.elements.use
   const pass = form.elements.pass
*/
console.log(user, pass)

function handleFormSubmit(e){
    e.preventDefault()
    console.log(user.value);
    console.log(pass.value)
    console.log(check.checked)

    //LIMPIAR EL FORMULARIO
    user.value = "";
    pass.value = ""

    check.checked = false

}

form.addEventListener("submit", handleFormSubmit)