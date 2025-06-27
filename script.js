const questionario = {
    titulo: "Automação e Emprego",
    perguntas: [
        {
            pergunta: "Como podemos evitar que a automação cause desemprego em massa?",
            alternativas: [
                "Investir em cursos de requalificação para trabalhadores",
                "Reduzir a jornada de trabalho sem reduzir salários"
            ],
            afirmacoes: [
                "Você acredita que investir em cursos de requalificação é fundamental para preparar os trabalhadores para novas funções em áreas de tecnologia e serviços humanos.",
                "Na sua visão, reduzir a jornada de trabalho sem cortar salários permitiria empregar mais pessoas, distribuindo melhor as oportunidades."
            ]
        },
        {
            pergunta: "O que as empresas devem fazer para equilibrar eficiência e responsabilidade social?",
            alternativas: [
                "Criar planos de transição para funcionários afetados",
                "Destinar parte dos lucros da automação para programas sociais"
            ],
            afirmacoes: [
                "Você defende que empresas devem criar planos de transição para reduzir o impacto negativo da automação nos trabalhadores.",
                "Para você, as empresas deveriam destinar parte dos lucros para programas sociais, fortalecendo seu compromisso com a comunidade."
            ]
        },
        {
            pergunta: "Como os governos podem lidar com a desigualdade da automação?",
            alternativas: [
                "Implementar renda básica universal",
                "Criar impostos sobre uso de robôs"
            ],
            afirmacoes: [
                "Você considera a renda básica universal essencial para garantir uma rede de segurança contra a pobreza extrema.",
                "Na sua opinião, impostos sobre robôs seriam eficazes para financiar programas sociais e educacionais."
            ]
        },
        {
            pergunta: "Como preparar novas gerações para um futuro com robôs?",
            alternativas: [
                "Reformar currículos com habilidades digitais",
                "Estimular profissões criativas e sociais"
            ],
            afirmacoes: [
                "Você acredita que reformar currículos com foco em habilidades digitais é crucial para preparar jovens para empregos do futuro.",
                "Para você, estimular profissões criativas é vital, pois áreas como artes sempre precisarão do toque humano."
            ]
        },
        {
            pergunta: "Como a sociedade deve lidar com as mudanças no mercado de trabalho?",
            alternativas: [
                "Promover debates sobre futuro do trabalho",
                "Incentivar empreendedorismo digital"
            ],
            afirmacoes: [
                "Você defende que promover debates é fundamental para criar soluções coletivas sobre o futuro do trabalho.",
                "Na sua visão, incentivar o empreendedorismo digital é chave para criar novas oportunidades na era da automação."
            ]
        }
    ],
    textoFinal: "Sua análise sobre automação no mercado de trabalho:"
};

let respostas = [];
let perguntaAtual = 0;

const elementos = {
    pergunta: document.querySelector('.caixa-perguntas'),
    alternativas: document.querySelector('.caixa-alternativas'),
    navegacao: document.querySelector('.caixa-navegacao'),
    btnVoltar: document.querySelector('.btn-voltar'),
    resultado: document.querySelector('.caixa-resultado'),
    textoResultado: document.querySelector('.texto-resultado'),
    btnRecomecar: document.querySelector('.btn-recomecar')
};

function mostrarPergunta(index) {
    elementos.pergunta.textContent = questionario.perguntas[index].pergunta;
    elementos.alternativas.innerHTML = '';
    
    questionario.perguntas[index].alternativas.forEach((alternativa, i) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => selecionarResposta(i));
        elementos.alternativas.appendChild(botao);
    });
    
    elementos.navegacao.style.display = index > 0 ? 'block' : 'none';
    elementos.resultado.style.display = 'none';
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
    const afirmacoes = questionario.perguntas.map((pergunta, i) => {
        return pergunta.afirmacoes[respostas[i]];
    });

    elementos.textoResultado.innerHTML = `
        <p><strong>${questionario.textoFinal}</strong></p>
        <p>${afirmacoes.join(' ')}</p>
        <p>Esta visão integrada reflete suas perspectivas sobre os desafios e oportunidades da automação no mundo do trabalho.</p>
    `;
    
    elementos.pergunta.style.display = 'none';
    elementos.alternativas.style.display = 'none';
    elementos.navegacao.style.display = 'none';
    elementos.resultado.style.display = 'block';
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
    elementos.pergunta.style.display = 'block';
    elementos.alternativas.style.display = 'block';
    mostrarPergunta(0);
}

elementos.btnVoltar.addEventListener('click', voltarPergunta);
elementos.btnRecomecar.addEventListener('click', recomecarQuestionario);

mostrarPergunta(0);
