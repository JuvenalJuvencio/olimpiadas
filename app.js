//function executa apenas uma vez
function pesquisar() {
   
    //console.log(dados);

    //dentro do JS se a variavel conter duas palavras, a segunda palavra precisa iniciar com letra maiúscula (camel case)
    

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    //se campoPesquisa for uma string sem nada, faça (== significa igual)
    if (!campoPesquisa) {
        section.innerHTML ="<p>Nada foi encontrado. Você precisa digitar algo.</p>"
        return
    };
    
    //.value é usado para trazer o que está dentro da tag
    campoPesquisa = campoPesquisa.toLowerCase()
    

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

//para cada dado dentro da lista de dado / repetição infinita
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase()

  
    //se titulo includes campoPesquisa então faça
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // as barras || são o 'else' ou 'se'
        //cria um novo elemento
        resultados += `
 <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}.</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>

`  

    }
    console.log(dado.titulo.includes(campoPesquisa))
    
    // !resultado = se resultado nao existir, faça... !indica ele mesmo
    if (!resultados) {
        resultados = "<p>Nada foi encontrado!!</p>"
    }

// $dados[0].titulo faz referencia a dados.js buscando o titulo
//l += é contagem sequencial, numero atual + 1
   
}

section.innerHTML = resultados

}


