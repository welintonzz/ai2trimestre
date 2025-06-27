// Variáveis globais
let perguntas = [
    {
        pergunta: "Qual sua opinião sobre o impacto da IA no mercado de trabalho?",
        alternativas: [
            "Vai substituir muitos empregos",
            "Vai criar novos tipos de trabalho",
            "Vai transformar, mas não substituir empregos",
            "Não tenho opinião formada"
        ]
    },
    {
        pergunta: "Como você acha que a IA deve ser regulamentada?",
        alternativas: [
            "Regulamentação rigorosa internacional",
            "Leis flexíveis por país",
            "Auto-regulamentação pelas empresas",
            "Nenhuma regulamentação"
        ]
    },
    {
        pergunta: "Você confiaria em um sistema de IA para tomar decisões importantes?",
        alternativas: [
            "Sim, totalmente",
            "Depende da situação",
            "Apenas com supervisão humana",
            "Não confiaria"
        ]
    }
];

let respostas = [];
let perguntaAtual = 0;

// Elementos DOM
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaNavegacao = document.querySelector('.caixa-navegacao');
const btnVoltar = document.querySelector('.btn-voltar');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const btnRecomecar = document.querySelector('.btn-recomecar');

// Funções
function mostrarPergunta(index) {
    caixaPerguntas.textContent = perguntas[index].pergunta;
    caixaAlternativas.innerHTML = '';
    
    perguntas[index].alternativas.forEach((alternativa, i) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => selecionarResposta(i));
        caixaAlternativas.appendChild(botao);
    });
    
    // Mostrar/ocultar botão voltar
    caixaNavegacao.style.display = index > 0 ? 'block' : 'none';
    caixaResultado.style.display = 'none';
}

function selecionarResposta(respostaIndex) {
    respostas[perguntaAtual] = respostaIndex;
    
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta(perguntaAtual);
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';
    caixaNavegacao.style.display = 'none';
    
    // Aqui você pode personalizar o resultado baseado nas respostas
    textoResultado.textContent = "Obrigado por participar da nossa enquete sobre IA! Suas respostas nos ajudam a entender melhor as percepções públicas sobre inteligência artificial.";
    caixaResultado.style.display = 'block';
}

function voltarPergunta() {
    if (perguntaAtual > 0) {
        perguntaAtual--;
        mostrarPergunta(perguntaAtual);
    }
}

function recomecarEnquete() {
    perguntaAtual = 0;
    respostas = [];
    caixaPerguntas.style.display = 'block';
    caixaAlternativas.style.display = 'block';
    mostrarPergunta(0);
}

// Event Listeners
btnVoltar.addEventListener('click', voltarPergunta);
btnRecomecar.addEventListener('click', recomecarEnquete);

// Iniciar enquete
mostrarPergunta(0);
