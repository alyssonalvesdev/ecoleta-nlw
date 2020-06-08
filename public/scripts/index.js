const buttomPesquisa = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

    //Abrir pesquisa
//Remove a classe hide assim abre a pesquisa 
buttomPesquisa.addEventListener("click", () => {
    modal.classList.remove("hide")
})

    //Fechar Pesquisa
//Add a classe hide assim fecha a pesquisa
close.addEventListener("click", () =>{
    modal.classList.add("hide")
})


