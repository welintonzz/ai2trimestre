const questionario = {
    titulo: "Robótica e Mercado de Trabalho",
    perguntas: [
        {
            pergunta: "Como podemos evitar que a automação cause desemprego em massa?",
            alternativas: [
                "Investir em cursos de requalificação para trabalhadores",
                "Reduzir a jornada de trabalho sem reduzir salários"
            ],
            afirmacoes: [
                "• Investir em cursos de requalificação prepara as pessoas para novas funções que exigem habilidades diferentes, especialmente nas áreas de tecnologia e serviços humanos.",
                "• Reduzir a jornada de trabalho sem cortar salários permite que mais pessoas sejam empregadas, distribuindo melhor as oportunidades de trabalho."
            ]
        },
        {
            pergunta: "O que as empresas devem fazer para manter o equilíbrio entre eficiência e responsabilidade social?",
            alternativas: [
                "Criar planos de transição para os funcionários afetados pela automação",
                "Reservar parte dos lucros gerados pela automação para programas sociais"
            ],
            afirmacoes: [
                "• Criar planos de transição mostra compromisso com os trabalhadores e reduz o impacto negativo da substituição por robôs.",
                "• Reservar parte dos lucros para programas sociais faz a empresa contribuir com a sociedade e fortalece sua imagem pública."
            ]
        },
        {
            pergunta: "Como os governos podem lidar com a desigualdade gerada pela automação?",
            alternativas: [
                "Implementar a renda básica universal (RBU)",
                "Criar impostos específicos sobre o uso de robôs em empresas"
            ],
            afirmacoes: [
                "• Implementar a RBU garante uma renda mínima para todos, mesmo que não estejam empregados, evitando pobreza extrema.",
                "• Criar impostos sobre robôs pode financiar programas sociais e educacionais, equilibrando os efeitos da automação."
            ]
        },
        {
            pergunta: "Qual é a melhor forma de preparar as novas gerações para um futuro com robôs?",
            alternativas: [
                "Reformar o currículo escolar com foco em habilidades digitais e pensamento crítico",
                "Estimular o ensino de profissões criativas e sociais"
            ],
            afirmacoes: [
                "• Reformar o currículo escolar com foco em habilidades digitais prepara os jovens para funções não substituíveis por máquinas.",
                "• Estimular profissões criativas e sociais é eficaz, pois áreas como artes e pedagogia sempre precisarão de humanos."
            ]
        },
        {
            pergunta: "O que a sociedade pode fazer para lidar com as mudanças provocadas pelos robôs no mercado de trabalho?",
            alternativas: [
                "Promover debates e políticas públicas sobre o futuro do trabalho",
                "Incentivar o empreendedorismo digital e sustentável"
            ],
            afirmacoes: [
                "• Promover debates ajuda a construir soluções mais justas e participativas sobre o futuro do trabalho.",
                "• Incentivar o empreendedorismo digital estimula novos negócios adaptados às necessidades do mundo moderno."
            ]
        }
    ],
    textoFinal: "Sua visão sobre automação no mercado de trabalho:"
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
    
    let resultadoHTML = `<p><strong>${questionario.textoFinal}</strong></p><ul>`;
    
    questionario.perguntas.forEach((pergunta, index) => {
        resultadoHTML += `<li>${pergunta.afirmacoes[respostas[index]]}</li>`;
    });
    
    resultadoHTML += `</ul><p class="conclusao">Essa análise reflete suas opiniões sobre como lidar com os impactos da automação.</p>`;
    
    textoResultado.innerHTML = resultadoHTML;
    caixaResultado.style.display = 'block';
}

function voltarPergunta() {
    if (perguntaAtual > 0) {
        perguntaAtual--;
        mostrarPergunta(perguntaAtual);
    }
}

function recomecarQuestionario() {
    perguntaAtual = 0;
    respostas = [];
    caixaPerguntas.style.display = 'block';
    caixaAlternativas.style.display = 'block';
    mostrarPergunta(0);
}

// Event Listeners
btnVoltar.addEventListener('click', voltarPergunta);
btnRecomecar.addEventListener('click', recomecarQuestionario);

// Iniciar questionário
mostrarPergunta(0);
