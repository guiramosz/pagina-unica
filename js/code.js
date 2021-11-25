// inicializa a biblioteca de animação AOS
AOS.init();

//FUNÇÃO ENCAPSULADA:Preenche o SELECT com os dados da API do IBGE
(function(){
    var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    var select = document.getElementById('estado');
    

    /* Consulta a API com o método fetch e com um laço de repetição incrementa as tags options */
    /* 1º then() captura os dados, 2° then() trata os dados, catch() tratamento do erro */
    fetch(url).then(response => response.json()).then(json => {
        var options = '<option>Selecione</option>';
        //DESAFIO: inserir abaixo dessa linha um código para ordenar em ordem aflfabetica o objeto json
        /* Laço de repetição */
        for (let index = 0; index < json.length; index++) {
            options += '<option>'+json[index].nome+'</option>';
            console.log(options);

        }
        select.innerHTML = options;
    }).catch(erro => console.log(erro));
})();
