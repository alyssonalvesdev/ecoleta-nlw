function populateUFs() {

    const ufSelect = document.querySelector("select[name=uf]");
    const urlstate = "http://servicodados.ibge.gov.br/api/v1/localidades/estados";

    fetch(urlstate)
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs();

function getCities(event) {

    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const urlcity = `http://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(urlcity)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false;
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);



/*function popularUF(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(state => state.json())
        .then(estados =>{
            for(const estado of estados){
                ufSelect.innerHTML += `<option value="${estado.nome}">${estado.nome}</option>`
            }
        })
}

popularUF()

function getCidade(event){
    const cidadeSelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const ValorUf = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ValorUf}/municipios`

    cidadeSelect.innerHTML ="<option value>Selecione a Cidade</option>"
    cidadeSelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cidades => {
            
            for(const cidade of cidades){
                cidadeSelect.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`
            }

            cidadeSelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCidade);



*/
//Itens de Coleta

const itemColetado  = document.querySelectorAll(".items-grid li")

for (const item of itemColetado) {
    item.addEventListener("click", handleSelectedItem)
}

var selectedItems = []

//Selecionar input no HTML
const inputColetado = document.querySelector("input[name=items]")

function handleSelectedItem(event){
    const itemLi = event.target
    const itemId = itemLi.dataset.id


    //Adicionar ou remover uma classe
    itemLi.classList.toggle("selected")

    //Verificar se existem itens selecionados, se sim
    //pegar os itens selecionados
    const jaSelecionado = selectedItems.findIndex(function(item){
        const itemEncontrado = item == itemId
        return itemEncontrado 
    })
            //Modo simplificado
        /*const jaSelecionado = SelectedItems.findIndex(item => item ==itemId)*/

    //se já estiver selecionados, retirar
    if(jaSelecionado >= 0){
        //Tirar seleção
        const filtrarItem = selectedItems.filter(function(item){
            const itemDiferente = item != itemId
            return itemDiferente
        })

        selectedItems = filtrarItem
    }else{
    //se não, adcionar a seleção
        selectedItems.push(itemId)

    }

    //Atualizar Input no html
    inputColetado.value = selectedItems

}