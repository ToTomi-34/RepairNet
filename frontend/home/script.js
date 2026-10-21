let user = "José"

function nameUserInTitle() {

    let title = document.getElementById("homeTitle");

    title.innerText=`Olá, ${user}! O que você gostaria de resolver hoje?`
}

nameUserInTitle()

let local = "Recife"

function localRecomendations() {

    let title = document.getElementById("recomendationsHeaderText");

    title.innerText=`Baseado nas suas habilidades e solicitações recentes em ${local}`
}

localRecomendations()