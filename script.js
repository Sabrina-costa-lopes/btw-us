
const invitation = document.getElementById("invitation");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");
const riddle1 = document.getElementById("riddle1");

const openInvitation = document.getElementById("openInvitation");
const openEnvelope = document.getElementById("openEnvelope");
const startGame = document.getElementById("startGame");

const answer1 = document.getElementById("answer1");
const checkAnswer1 = document.getElementById("checkAnswer1");
const feedback1 = document.getElementById("feedback1");

const errorChallenge = document.getElementById("errorChallenge");
const funnyQuestion = document.getElementById("funnyQuestion");
const funnyAnswer = document.getElementById("funnyAnswer");
const submitFunnyAnswer = document.getElementById("submitFunnyAnswer");
const funnyFeedback = document.getElementById("funnyFeedback");

const hintArea = document.getElementById("hintArea");
const hintText1 = document.getElementById("hintText1");
const retryAnswer = document.getElementById("retryAnswer");

// Perguntas aleatórias da Outra Mãe
const funnyQuestions = [
    "Se um pinguim batesse na sua porta, você o deixaria entrar?",
    "Quantos patos seriam necessários para derrotar um cavalo?",
    "Você confiaria sua vida a um esquilo de terno?",
    "Se seus pensamentos tivessem uma trilha sonora, qual seria?",
    "Você prefere enfrentar uma galinha gigante ou cem galinhas minúsculas?",
    "Se pudesse trocar seus olhos por botões, escolheria quais?",
    "Qual seria seu nome se você fosse um vilão de desenho?",
    "Você sobreviveria uma semana dentro da casa da Outra Mãe?",
    "Se um rato começasse a falar com você, qual seria sua primeira pergunta?",
    "Qual é a coisa mais suspeita que você já fez por comida?"
];

// Três níveis de pistas
const hints = [
    "Não olhe apenas para o conteúdo. Existe algo importante na organização do texto.",
    "Observe a primeira letra de cada linha.",
    "Leia as iniciais das oito linhas, de cima para baixo."
];

let hintLevel = 0;

// Transição para o envelope
openInvitation.addEventListener("click", () => {
    invitation.classList.remove("active");
    envelopeScreen.classList.add("active");
});

// Abre o envelope
openEnvelope.addEventListener("click", () => {
    openEnvelope.classList.add("opened");
    openEnvelope.innerHTML = "<span>CONVITE ABERTO</span>";

    setTimeout(() => {
        envelopeScreen.classList.remove("active");
        letterScreen.classList.add("active");
    }, 700);
});

// Inicia o primeiro enigma
startGame.addEventListener("click", () => {
    letterScreen.classList.remove("active");
    riddle1.classList.add("active");
});

// Sorteia uma pergunta
function showFunnyQuestion() {
    const randomIndex = Math.floor(Math.random() * funnyQuestions.length);
    funnyQuestion.textContent = funnyQuestions[randomIndex];
}

// Verifica a resposta do enigma
checkAnswer1.addEventListener("click", () => {
    const answer = answer1.value.trim().toUpperCase();

    if (answer === "CORALINE") {
        feedback1.textContent = "A primeira porta reconhece você.";
        feedback1.style.color = "#B69A61";

        errorChallenge.classList.add("hidden");
        checkAnswer1.disabled = true;
        answer1.disabled = true;
    } else {
        feedback1.textContent = "";
        hintArea.classList.add("hidden");
        funnyFeedback.textContent = "";
        funnyAnswer.value = "";

        showFunnyQuestion();
        errorChallenge.classList.remove("hidden");
    }
});

// Permite responder com Enter
answer1.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer1.click();
    }
});

// Responde ao interrogatório
submitFunnyAnswer.addEventListener("click", () => {
    if (funnyAnswer.value.trim() === "") {
        funnyFeedback.textContent = "A Outra Mãe espera uma resposta...";
        funnyFeedback.style.color = "#c87979";
        return;
    }

    if (hintLevel < hints.length) {
        hintText1.textContent = hints[hintLevel];
        hintLevel++;

        hintArea.classList.remove("hidden");
        funnyFeedback.textContent = "Muito bem. Você ganhou um fragmento.";
        funnyFeedback.style.color = "#B69A61";
    } else {
        funnyFeedback.textContent = "Você já recebeu todas as pistas. Tente novamente.";
        funnyFeedback.style.color = "#B69A61";
    }

    funnyAnswer.value = "";
});

// Permite responder ao interrogatório com Enter
funnyAnswer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submitFunnyAnswer.click();
    }
});

// Volta para tentar o enigma
retryAnswer.addEventListener("click", () => {
    errorChallenge.classList.add("hidden");
    answer1.focus();
});
