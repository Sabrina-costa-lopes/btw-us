
const invitation = document.getElementById("invitation");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");

const openInvitation = document.getElementById("openInvitation");
const openEnvelope = document.getElementById("openEnvelope");
const startGame = document.getElementById("startGame");

// Abre a tela do envelope
openInvitation.addEventListener("click", () => {
    invitation.classList.remove("active");
    envelopeScreen.classList.add("active");
});

// Abre o envelope e revela a carta
openEnvelope.addEventListener("click", () => {
    openEnvelope.classList.add("opened");
    openEnvelope.innerHTML = "<span>CONVITE ABERTO</span>";

    setTimeout(() => {
        envelopeScreen.classList.remove("active");
        letterScreen.classList.add("active");
    }, 700);
});

// Inicia a sessão
startGame.addEventListener("click", () => {
    alert("A primeira porta será revelada em breve...");
});
