function popularUF(){
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