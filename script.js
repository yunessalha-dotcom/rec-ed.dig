let totalTentativas = 0;

const formQuiz = document.getElementById('formulario-quiz');
const painelResultado = document.getElementById('painel-resultado');
const tituloResultado = document.getElementById('titulo-resultado');
const mensagemResultado = document.getElementById('mensagem-resultado');
const elementoContador = document.getElementById('contador-tentativas');

formQuiz.addEventListener('submit', function(event) {
    event.preventDefault();

    const opcaoSelecionada = document.querySelector('input[name="resposta_usuario"]:checked');

    if (!opcaoSelecionada) {
        alert("Por favor, selecione uma das alternativas antes de enviar!");
        return;
    }

    totalTentativas = totalTentativas + 1; 
    const respostaDoUsuario = opcaoSelecionada.value;
    const respostaCorreta = 'falso';
    
    let textoTitulo = "";
    let textoMensagem = "";
    let classeEstilo = "";

    if (respostaDoUsuario === respostaCorreta) {
        textoTitulo = "🎉 Resposta Correta!";
        textoMensagem = "Exatamente! As ferramentas modernas de IA generativa conseguem simular nuances emocionais, respiração e entonação perfeitamente. Fique atento: não confie apenas no 'tom de voz' para validar uma informação.";
        classeEstilo = "sucesso";
    } else {
        textoTitulo = "❌ Resposta Incorreta.";
        textoMensagem = "Cuidado! Esse é um mito perigoso. Atualmente, clonagens de áudio via IA replicam emoções complexas de forma assustadoramente realista, sendo usadas frequentemente em golpes de engenharia social.";
        classeEstilo = "erro";
    }

    tituloResultado.textContent = textoTitulo;
    mensagemResultado.textContent = textoMensagem;
    elementoContador.textContent = totalTentativas;

    painelResultado.className = `alerta-resultado ${classeEstilo}`; 
    painelResultado.classList.remove('ocultar');
});
