let totalTentativas = 0;

const formQuiz = document.getElementById('formulario-quiz');
const painelResultado = document.getElementById('painel-resultado');
const tituloResultado = document.getElementById('titulo-resultado');
const mensagemResultado = document.getElementById('mensagem-resultado');
const elementoContador = document.getElementById('contador-tentativas');
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', function() {
    document.body.classList.toggle('modo-claro');
});

formQuiz.addEventListener('submit', function(event) {
    event.preventDefault();

    const r1 = document.querySelector('input[name="p1"]:checked');
    const r2 = document.querySelector('input[name="p2"]:checked');
    const r3 = document.querySelector('input[name="p3"]:checked');

    if (!r1 || !r2 || !r3) {
        alert("Por favor, responda todas as 3 perguntas antes de verificar!");
        return;
    }

    totalTentativas = totalTentativas + 1;

    let acertos = 0;
    if (r1.value === 'correto') acertos++;
    if (r2.value === 'correto') acertos++;
    if (r3.value === 'correto') acertos++;

    let textoTitulo = "";
    let textoMensagem = "";
    let classeEstilo = "";

    if (acertos === 3) {
        textoTitulo = "🎉 Excelente! 3/3 Acertos";
        textoMensagem = "Você demonstrou domínio total sobre os mecanismos de defesa digital! Sabe reconhecer anomalias visuais, falhas sonoras e possui a postura correta de checagem contra boatos.";
        classeEstilo = "sucesso";
    } else if (acertos === 2 || acertos === 1) {
        textoTitulo = "⚠️ Atenção! Você acertou " + acertos + " de 3";
        textoMensagem = "Bom esforço, mas você ainda corre riscos de ser enganado por mídias geradas por IA. Revise as dicas estruturadas no texto educacional acima e tente novamente.";
        classeEstilo = "atencao";
    } else {
        textoTitulo = "❌ Cuidado! 0/3 Acertos";
        textoMensagem = "Você errou todas as questões. Recomenda-se ler as seções de orientação biométrica e clonagem de voz acima para entender os padrões fundamentais de segurança.";
        classeEstilo = "erro";
    }

    tituloResultado.textContent = textoTitulo;
    mensagemResultado.textContent = textoMensagem;
    elementoContador.textContent = totalTentativas;

    painelResultado.className = `alerta-resultado ${classeEstilo}`;
    painelResultado.classList.remove('ocultar');
});
