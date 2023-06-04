// Selecionando todos os elementos com o atributo "data-controle"
const controle = document.querySelectorAll("[data-controle]");

// Selecionando todos os elementos com o atributo "data-estatistica"
const estatisticas = document.querySelectorAll("[data-estatistica]");

// Objeto que contém as informações das peças e suas estatísticas
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

// Adicionando um ouvinte de evento para cada elemento com o atributo "data-controle"
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    });
});

// Função para manipular os dados com base na operação e controle selecionados
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

// Função para atualizar as estatísticas com base na peça selecionada
function atualizaEstatistica(peca) {
    console.log(pecas[peca]);

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}
// addEventListener: É um método que permite adicionar um ouvinte de eventos a um elemento HTML. No código 
// fornecido, está sendo usado para adicionar um ouvinte de evento de clique (click) a cada elemento do controle.
// target: É uma propriedade do objeto evento que representa o elemento alvo ao qual o evento foi direcionado.
//  No contexto do código, evento.target retorna o elemento HTML em que ocorreu o evento de clique.
// parentNode: É uma propriedade que retorna o nó pai do elemento atual. No código, evento.target.parentNode
 // retorna o elemento HTML pai do elemento em que ocorreu o evento de clique.
// function: A palavra-chave function é usada para definir uma função em JavaScript. As funções são blocos de
//  código que podem ser chamados e executados quando necessário. No código fornecido,
 // há duas funções: manipulaDados e atualizaEstatistica, que são chamadas em resposta ao evento de clique.