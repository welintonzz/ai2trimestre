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
                "Você defende que a solução para evitar o desemprego em massa está no investimento em cursos de requalificação profissional, preparando os trabalhadores para novas funções que exigem habilidades diferentes, especialmente nas áreas de tecnologia e serviços humanos.",
                "Você acredita que a redução da jornada de trabalho sem corte de salários é a melhor forma de distribuir as oportunidades de emprego, permitindo que mais pessoas sejam contratadas para realizar o mesmo volume de trabalho."
            ]
        },
        {
            pergunta: "O que as empresas devem fazer para manter o equilíbrio entre eficiência e responsabilidade social?",
            alternativas: [
                "Criar planos de transição para os funcionários afetados pela automação",
                "Reservar parte dos lucros gerados pela automação para programas sociais"
            ],
            afirmacoes: [
                "Para você, as empresas devem demonstrar responsabilidade social criando planos de transição bem estruturados para os funcionários que serão afetados pela automação, mostrando compromisso com seus colaboradores.",
                "Na sua visão, o caminho é as empresas destinarem parte dos lucros obtidos com a automação para programas sociais, compartilhando os ganhos de produtividade com a sociedade como um todo."
            ]
        },
        {
            pergunta: "Como os governos podem lidar com a desigualdade gerada pela automação?",
            alternativas: [
                "Implementar a renda básica universal (RBU)",
                "Criar impostos específicos sobre o uso de robôs em empresas"
            ],
            afirmacoes: [
                "Você considera que a implementação da renda básica universal é a medida mais eficaz para garantir uma rede de proteção social e evitar a pobreza extrema em um cenário de crescente automação.",
                "Na sua opinião, a criação de impostos específicos sobre o uso de robôs nas empresas seria a forma mais adequada de financiar programas sociais e educacionais, equilibrando os efeitos da automação."
            ]
        },
        {
            pergunta: "Qual é a melhor forma de preparar as novas gerações para um futuro com robôs?",
            alternativas: [
                "Reformar o currículo escolar com foco em habilidades digitais e pensamento crítico",
                "Estimular o ensino de profissões criativas e sociais"
            ],
            afirmacoes: [
                "Você acredita que a reforma do currículo escolar com ênfase em habilidades digitais e pensamento crítico é essencial para preparar os jovens para as profissões do futuro que não serão facilmente automatizadas.",
                "Para você, o foco deve estar no estímulo ao ensino de profissões criativas e sociais, como artes, psicologia e pedagogia, áreas onde a presença humana continuará sendo insubstituível."
            ]
        },
        {
            pergunta: "O que a sociedade pode fazer para lidar com as mudanças provocadas pelos robôs no mercado de trabalho?",
            alternativas: [
                "Promover debates e políticas públicas sobre o futuro do trabalho",
                "Incentivar o empreendedorismo digital e sustentável"
            ],
            afirmacoes: [
                "Na sua visão, a sociedade deve priorizar a promoção de debates amplos e políticas públicas bem formuladas sobre o futuro do trabalho, criando soluções coletivas e participativas.",
                "Você defende que o incentivo ao empreendedorismo digital e sustentável é a chave para criar novas oportunidades de negócios adaptadas à realidade tecnológica atual."
            ]
        }
    ],
    textoFinal: "Com base nas suas respostas, sua visão sobre o impacto da automação no mercado de trabalho pode ser resumida da seguinte forma:"
};

let respostas = [];
let perguntaAtual = 0;

const elementos = {
    pergunta: document.querySelector('.caixa-perguntas'),
    alternativas: document.querySelector('.caixa-alternativas'),
    navegacao: document.querySelector('.caixa-navegacao'),
    btnVoltar: document.querySelector('.btn-voltar'),
    resultado: document.querySelector('.caixa-resultado'),
    tituloResultado: document.querySelector('.titulo-resultado'),
    textoResultado: document.querySelector('.texto-resultado'),
    btnRecomecar: document.querySelector('.btn-recomecar')
};

function mostrarPergunta(index) {
    document.title = `Pergunta ${index + 1} - ${questionario.titulo}`;
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
    document.title = `Resultado - ${questionario.titulo}`;
    elementos.pergunta.style.display = 'none';
    elementos.alternativas.style.display = 'none';
    elementos.navegacao.style.display = 'none';
    
    let resultadoHTML = `<p><strong>${questionario.textoFinal}</strong></p>`;
    
    questionario.perguntas.forEach((pergunta, index) => {
        resultadoHTML += `<p>${pergunta.afirmacoes[respostas[index]]}</p>`;
    });
    
    resultadoHTML += `<p class="conclusao">Esta análise reflete suas opiniões sobre como a sociedade deve se adaptar aos desafios trazidos pela automação no mercado de trabalho.</p>`;
    
    elementos.textoResultado.innerHTML = resultadoHTML;
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
