

function meuCep(){
    let cep = document.getElementById('cep').value;
    $.ajax({
        url:`https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: (response) => exibirCep(response)
    })
    
}

function exibirCep(response){
    let cep = response;

    $('#exibir-cep').append(`<h2>Cep: ${cep.cep}</h2>
                              <h2>Cidade: ${cep.localidade}</h2>
                              <h2>Bairro: ${cep.bairro}</h2>
                              <h2>Rua: ${cep.logradouro}</h2>                      `)

    
}