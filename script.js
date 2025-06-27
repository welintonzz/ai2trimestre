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
                "Você acredita que investir em cursos de requalificação é fundamental para preparar os trabalhadores para novas funções que exigem habilidades diferentes, especialmente nas áreas de tecnologia e serviços humanos.",
                "Na sua visão, reduzir a jornada de trabalho sem cortar salários permitiria que mais pessoas fossem empregadas, distribuindo melhor as oportunidades de trabalho."
            ]
        },
        {
            pergunta: "O que as empresas devem fazer para manter o equilíbrio entre eficiência e responsabilidade social?",
            alternativas: [
                "Criar planos de transição para os funcionários afetados pela automação",
                "Reservar parte dos lucros gerados pela automação para programas sociais"
            ],
            afirmacoes: [
                "Você defende que as empresas devem criar planos de transição para demonstrar compromisso com os trabalhadores e reduzir o impacto negativo da substituição por robôs.",
                "Para você, o caminho ideal é reservar parte dos lucros para programas sociais, fazendo a empresa contribuir com a sociedade e fortalecer sua imagem pública."
            ]
        },
        {
            pergunta: "Como os governos podem lidar com a desigualdade gerada pela automação?",
            alternativas: [
                "Implementar a renda básica universal (RBU)",
                "Criar impostos específicos sobre o uso de robôs em empresas"
            ],
            afirmacoes: [
                "Você considera que implementar a renda básica universal garantiria uma rede de segurança mínima para todos, evitando a pobreza extrema em um cenário de crescente automação.",
                "Na sua opinião, criar impostos específicos sobre robôs seria a forma mais eficaz de financiar programas sociais e educacionais, equilibrando os efeitos da automação."
            ]
        },
        {
            pergunta: "Qual é a melhor forma de preparar as novas gerações para um futuro com robôs?",
            alternativas: [
                "Reformar o currículo escolar com foco em habilidades digitais e pensamento crítico",
                "Estimular o ensino de profissões criativas e sociais"
            ],
            afirmacoes: [
                "Você acredita que reformar o currículo escolar com ênfase em habilidades digitais é essencial para preparar os jovens para as profissões do futuro que não serão facilmente automatizadas.",
                "Para você, estimular profissões criativas e sociais é crucial, pois áreas como artes e pedagogia sempre precisarão da presença humana."
            ]
        },
        {
            pergunta: "O que a sociedade pode fazer para lidar com as mudanças provocadas pelos robôs no mercado de trabalho?",
            alternativas: [
                "Promover debates e políticas públicas sobre o futuro do trabalho",
                "Incentivar o empreendedorismo digital e sustentável"
            ],
            afirmacoes: [
                "Na sua visão, promover debates amplos é fundamental para construir soluções coletivas e políticas públicas eficazes sobre o futuro do trabalho.",
                "Você defende que incentivar o empreendedorismo digital é a chave para criar novas oportunidades de negócios adaptadas à realidade tecnológica."
            ]
        }
    ],
    textoFinal: "Sua visão sobre automação no mercado de trabalho:"
};

// ... (o resto do código permanece igual) ...

function mostrarResultado() {
    document.title = `Resultado - ${questionario.titulo}`;
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';
    caixaNavegacao.style.display = 'none';
    
    // Coletar todas as afirmações
    let afirmacoes = questionario.perguntas.map((pergunta, index) => {
        return pergunta.afirmacoes[respostas[index]];
    });

    // Juntar em um texto fluído
    let textoFluido = afirmacoes.join(' ');
    
    let resultadoHTML = `
        <p><strong>${questionario.textoFinal}</strong></p>
        <p>${textoFluido}</p>
        <p class="conclusao">Esta análise apresenta sua perspectiva integrada sobre os desafios e soluções relacionados à automação no mercado de trabalho contemporâneo.</p>
    `;
    
    textoResultado.innerHTML = resultadoHTML;
    caixaResultado.style.display = 'block';
}

// ... (o resto do código permanece igual) ...
