let user = "José"

function nameUserInTitle() {

    let title = document.getElementById("homeTitle");

    title.innerText=`Olá, ${user}! O que você gostaria de resolver hoje?`
}

nameUserInTitle()