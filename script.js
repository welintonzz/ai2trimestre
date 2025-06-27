// Perguntas e afirmações
const questionario = {
    titulo: "Máquinas Inteligentes x Trabalho Humano",
    perguntas: [
        {
            pergunta: "Você acredita que as máquinas inteligentes vão substituir a maioria dos empregos humanos no futuro?",
            alternativas: [
                "Sim, a automação vai substituir a maioria dos trabalhos humanos",
                "Não, as máquinas vão criar novos tipos de emprego"
            ],
            afirmacoes: [
                "Você acredita que a automação substituirá a maioria dos trabalhos humanos.",
                "Você não acredita que a automação substituirá a maioria dos trabalhos, mas sim que criará novos empregos."
            ]
        },
        {
            pergunta: "Qual setor você acha que será mais impactado pela substituição de humanos por máquinas?",
            alternativas: [
                "Setores de produção e manufatura",
                "Setores de serviços e atendimento"
            ],
            afirmacoes: [
                "Você identificou que os setores de produção e manufatura serão os mais impactados pela automação.",
                "Você acredita que os setores de serviços e atendimento serão os mais afetados pela substituição por máquinas."
            ]
        },
        {
            pergunta: "Como você avalia o impacto da IA na qualidade dos empregos restantes?",
            alternativas: [
                "Os empregos restantes se tornarão mais qualificados e bem remunerados",
                "A qualidade dos empregos vai piorar com a pressão das máquinas"
            ],
            afirmacoes: [
                "Você avalia que os empregos remanescentes se tornarão mais qualificados e melhor remunerados.",
                "Você tem a percepção de que a qualidade dos empregos pode piorar com a competição das máquinas."
            ]
        },
        {
            pergunta: "Qual deve ser a resposta da sociedade à substituição de trabalhadores por máquinas?",
            alternativas: [
                "Investir em educação e requalificação profissional",
                "Criar políticas que limitem a automação em certos setores"
            ],
            afirmacoes: [
                "Você defende que a resposta adequada é investir em educação e requalificação profissional.",
                "Você acredita que a solução está em políticas que limitem a automação em certos setores."
            ]
        },
        {
            pergunta: "Você se sente preparado para um mercado de trabalho dominado por máquinas inteligentes?",
            alternativas: [
                "Sim, estou me preparando para trabalhar junto com as máquinas",
                "Não, me sinto ameaçado pela ascensão das máquinas"
            ],
            afirmacoes: [
                "Você se sente preparado e está se adaptando para trabalhar em colaboração com as máquinas inteligentes.",
                "Você expressa sentir-se ameaçado pela ascensão das máquinas no mercado de trabalho."
            ]
        }
    ]
};

// Variáveis globais
let respostas = [];
let perguntaAtual = 0;

// Elementos DOM
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaNavegacao = document.querySelector('.caixa-navegacao');
const btnVoltar = document.querySelector('.btn-voltar');
const caixaResultado = document.querySelector('.caixa-resultado');
const tituloResultado = document.querySelector('.titulo-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const btnRecomecar = document.querySelector('.btn-recomecar');

// Funções
function mostrarPergunta(index) {
    document.title = `Pergunta ${index + 1} - ${questionario.titulo}`;
    caixaPerguntas.textContent = questionario.perguntas[index].pergunta;
    caixaAlternativas.innerHTML = '';
    
    questionario.perguntas[index].alternativas.forEach((alternativa, i) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => selecionarResposta(i));
        caixaAlternativas.appendChild(botao);
    });
    
    caixaNavegacao.style.display = index > 0 ? 'block' : 'none';
    caixaResultado.style.display = 'none';
}

function selecionarResposta(respostaIndex) {
    respostas[perguntaAtual] = respostaIndex;
    
    if (perguntaAtual < questionario.perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta(perguntaAtual);
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.title = `Resultado - ${questionario.titulo}`;
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';
    caixaNavegacao.style.display = 'none';
    
    // Gerar texto personalizado com as respostas
    let resultadoHTML = "<p>Com base nas suas respostas, podemos afirmar que:</p><ul>";
    
    questionario.perguntas.forEach((pergunta, index) => {
        resultadoHTML += `<li>${pergunta.afirmacoes[respostas[index]]}</li>`;
    });
    
    resultadoHTML += `</ul><p class="conclusao">Essa é a sua visão sobre o impacto das máquinas inteligentes no mercado de trabalho.</p>`;
    
    textoResultado.innerHTML = resultadoHTML;
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

// Iniciar questionário
mostrarPergunta(0);
