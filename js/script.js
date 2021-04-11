

function meuCep(){
    limparTela();
    let cep = document.getElementById('cep').value;
    $.ajax({
        url:`https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: (response) => exibirCep(response)
    })
    
}

function exibirCep(response){
    let cep = response;

    $('#exibir-cep').append(`<h2 class="saida-user">${cep.localidade}, ${cep.logradouro}, ${cep.bairro}</h2>`)

    
}

function limparTela() {
    $('.saida-user').remove();
    
}