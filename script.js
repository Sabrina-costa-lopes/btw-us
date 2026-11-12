
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


const success1 = document.getElementById("success1");
const nextRiddle = document.getElementById("nextRiddle");

const riddle2 = document.getElementById("riddle2");
const answer2 = document.getElementById("answer2");
const checkAnswer2 = document.getElementById("checkAnswer2");
const feedback2 = document.getElementById("feedback2");
const hint2 = document.getElementById("hint2");
const hintText2 = document.getElementById("hintText2");

const success2 = document.getElementById("success2");
const nextRiddle2 = document.getElementById("nextRiddle2");


const riddle3 = document.getElementById("riddle3");
const answer3 = document.getElementById("answer3");
const checkAnswer3 = document.getElementById("checkAnswer3");
const feedback3 = document.getElementById("feedback3");
const hint3 = document.getElementById("hint3");
const hintText3 = document.getElementById("hintText3");
const success3 = document.getElementById("success3");
const nextRiddle3 = document.getElementById("nextRiddle3");


const riddle4 = document.getElementById("riddle4");
const answer4 = document.getElementById("answer4");
const checkAnswer4 = document.getElementById("checkAnswer4");
const feedback4 = document.getElementById("feedback4");
const hint4 = document.getElementById("hint4");
const hintText4 = document.getElementById("hintText4");
const success4 = document.getElementById("success4");
const nextRiddle4 = document.getElementById("nextRiddle4");


const riddle5 = document.getElementById("riddle5");
const answer5 = document.getElementById("answer5");
const checkAnswer5 = document.getElementById("checkAnswer5");
const feedback5 = document.getElementById("feedback5");
const hint5 = document.getElementById("hint5");
const hintText5 = document.getElementById("hintText5");
const success5 = document.getElementById("success5");
const openFinalEnvelope = document.getElementById("openFinalEnvelope");



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

    success1.classList.remove("hidden");


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


/* TRANSIÇÃO PARA O SEGUNDO ENIGMA */

nextRiddle.addEventListener("click", () => {
    riddle1.classList.remove("active");
    riddle2.classList.add("active");
});

/* RESPOSTA DO SEGUNDO ENIGMA */

const hints2 = [
    "A soma dos dois algarismos precisa resultar em 9.",
    "Um dos algarismos é o dobro do outro.",
    "Os algarismos são 6 e 3. O maior vem primeiro."
];

let hintLevel2 = 0;

checkAnswer2.addEventListener("click", () => {
    const answer = answer2.value.trim();

    if (answer === "63") {
        feedback2.textContent = "Correto. O relógio voltou a funcionar.";
        feedback2.style.color = "#B69A61";

        checkAnswer2.disabled = true;
        answer2.disabled = true;
        success2.classList.remove("hidden");
    } else {
        feedback2.textContent = "O tempo continua parado. Tente novamente.";
        feedback2.style.color = "#c87979";
    }
});

answer2.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer2.click();
    }
});

hint2.addEventListener("click", () => {
    if (hintLevel2 < hints2.length) {
        hintText2.textContent = hints2[hintLevel2];
        hintLevel2++;
    } else {
        hintText2.textContent = "Você já recebeu todas as pistas.";
    }
});


/* TRANSIÇÃO PARA O TERCEIRO ENIGMA */

nextRiddle2.addEventListener("click", () => {
    riddle2.classList.remove("active");
    riddle3.classList.add("active");
});

/* RESPOSTA DO TERCEIRO ENIGMA */

const hints3 = [
    "O alfabeto segue uma sequência. Cada letra tem uma vizinha.",
    "A mensagem foi avançada exatamente uma posição.",
    "D vira C, P vira O. Faça o mesmo com as outras letras."
];

let hintLevel3 = 0;

checkAnswer3.addEventListener("click", () => {
    const answer = answer3.value.trim().toUpperCase();

    if (answer === "CODE") {
        feedback3.textContent = "Mensagem decifrada. Acesso concedido.";
        feedback3.style.color = "#B69A61";

        checkAnswer3.disabled = true;
        answer3.disabled = true;

        success3.classList.remove("hidden");
    } else {
        feedback3.textContent = "Código incorreto. A mensagem continua protegida.";
        feedback3.style.color = "#c87979";
    }
});

answer3.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer3.click();
    }
});

hint3.addEventListener("click", () => {
    if (hintLevel3 < hints3.length) {
        hintText3.textContent = hints3[hintLevel3];
        hintLevel3++;
    } else {
        hintText3.textContent = "Você já recebeu todas as pistas.";
    }
});

/* AVANÇA PARA O QUARTO ENIGMA */


/* TRANSIÇÃO PARA O QUARTO ENIGMA */

nextRiddle3.addEventListener("click", () => {
    riddle3.classList.remove("active");
    riddle4.classList.add("active");
});

/* RESPOSTA DO QUARTO ENIGMA */

const hints4 = [
    "O terceiro homem poderia descobrir sua cor se enxergasse dois chapéus brancos.",
    "O silêncio do terceiro homem revela que pelo menos um dos dois primeiros usa chapéu preto.",
    "Se o primeiro homem usasse branco, o segundo saberia que o seu próprio chapéu é preto. Mas ele ficou em silêncio."
];

let hintLevel4 = 0;

checkAnswer4.addEventListener("click", () => {
    const answer = answer4.value.trim().toUpperCase();

    if (answer === "PRETO") {
        feedback4.textContent = "Dedução correta. A quarta porta foi aberta.";
        feedback4.style.color = "#B69A61";

        checkAnswer4.disabled = true;
        answer4.disabled = true;

        success4.classList.remove("hidden");
    } else {
        feedback4.textContent = "A lógica ainda não está completa. Observe os silêncios.";
        feedback4.style.color = "#c87979";
    }
});

answer4.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer4.click();
    }
});

hint4.addEventListener("click", () => {
    if (hintLevel4 < hints4.length) {
        hintText4.textContent = hints4[hintLevel4];
        hintLevel4++;
    } else {
        hintText4.textContent = "Você já recebeu todas as pistas.";
    }
});

/* AVANÇA PARA O QUINTO ENIGMA */


/* TRANSIÇÃO PARA O QUINTO ENIGMA */

nextRiddle4.addEventListener("click", () => {
    riddle4.classList.remove("active");
    riddle5.classList.add("active");
});

/* RESPOSTA DO QUINTO ENIGMA */

const hints5 = [
    "É uma peça fundamental do xadrez.",
    "Não é a mais poderosa, mas sua captura encerra a partida.",
    "Seu nome começa com R. É a peça que representa o monarca."
];

let hintLevel5 = 0;

checkAnswer5.addEventListener("click", () => {
    const answer = answer5.value.trim().toUpperCase();

    if (answer === "REI") {
        feedback5.textContent = "A última fechadura reconheceu você.";
        feedback5.style.color = "#B69A61";

        checkAnswer5.disabled = true;
        answer5.disabled = true;

        success5.classList.remove("hidden");
    } else {
        feedback5.textContent = "A porta continua fechada. Pense no que pode abri-la.";
        feedback5.style.color = "#c87979";
    }
});

answer5.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer5.click();
    }
});

hint5.addEventListener("click", () => {
    if (hintLevel5 < hints5.length) {
        hintText5.textContent = hints5[hintLevel5];
        hintLevel5++;
    } else {
        hintText5.textContent = "Você já recebeu todas as pistas.";
    }
});

/* ABERTURA DA ETAPA FINAL */


/* =================================
   RECOMPENSA FINAL — DEZ VALES
================================= */

const rewardsScreen = document.getElementById("rewardsScreen");
const finalEnvelope = document.getElementById("finalEnvelope");
const revealCoupons = document.getElementById("revealCoupons");
const couponsArea = document.getElementById("couponsArea");
const couponsGrid = document.getElementById("couponsGrid");
const couponCounter = document.getElementById("couponCounter");

const couponDetail = document.getElementById("couponDetail");
const couponTitle = document.getElementById("couponTitle");
const couponDescription = document.getElementById("couponDescription");
const redeemCoupon = document.getElementById("redeemCoupon");
const closeCoupon = document.getElementById("closeCoupon");

const coupons = [
    {
        title: "Sessão de filmes",
        description: "Cada um terá 20 minutos para preparar seus lanchinhos. Depois, vamos assistir a um filme e contar nossa parte favorita, dando uma nota de 0 a 10."
    },
    {
        title: "Zerar um jogo juntos",
        description: "Você escolhe um jogo e vamos tentar zerá-lo juntos. Podemos jogar lado a lado ou um assistir enquanto o outro joga."
    },
    {
        title: "Vale SIM",
        description: "Uma pergunta ou pedido especial. A resposta será SIM, desde que seja algo seguro e confortável para nós dois."
    },
    {
        title: "Refeição favorita",
        description: "Você escolhe sua refeição favorita e eu preparo tudo com carinho. O cardápio fica por sua conta!"
    },
    {
        title: "Cartinha especial",
        description: "Uma carta escrita por mim, contando o que estou sentindo e pensando sobre você no momento em que eu a escrever."
    },
    {
        title: "Grudinho",
        description: "Um tempo juntinhos, sem pressa e sem distrações. Só aproveitando a companhia um do outro."
    },
    {
        title: "Abraço performático",
        description: "Um abraço digno de cena final de filme: dramático, exagerado e com direito a trilha sonora imaginária."
    },
    {
        title: "Piada exclusiva",
        description: "Uma piada feita especialmente para você. A qualidade não é garantida, mas a intenção é excelente."
    },
    {
        title: "História nunca contada",
        description: "Cada um conta uma história que nunca compartilhou com o outro. Sem julgamentos, só curiosidade."
    },
    {
        title: "Beijo no pescoço",
        description: "Um beijo no pescoço, em um momento especial e se os dois estiverem a fim."
    }
];

const STORAGE_KEY = "entreNos_valesResgatados";

function getRedeemedCoupons() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

        return Array.isArray(saved)
            ? saved.filter(id => Number.isInteger(id) && id >= 0 && id < coupons.length)
            : [];
    } catch {
        return [];
    }
}

let redeemedCoupons = getRedeemedCoupons();
let selectedCoupon = null;

// Abre a tela final depois do quinto enigma
openFinalEnvelope.addEventListener("click", () => {
    riddle5.classList.remove("active");
    rewardsScreen.classList.add("active");
});

// Abre o envelope
revealCoupons.addEventListener("click", () => {
    finalEnvelope.classList.add("opened");
    revealCoupons.classList.add("hidden");

    document.getElementById("envelopeInstruction").textContent =
        "O que estava escondido agora pertence a você.";

    setTimeout(() => {
        couponsArea.classList.remove("hidden");
        renderCoupons();
    }, 900);
});

// Atualiza os cartões
function renderCoupons() {
    couponsGrid.innerHTML = "";

    coupons.forEach((coupon, index) => {
        const redeemed = redeemedCoupons.includes(index);

        const card = document.createElement("button");
        card.type = "button";
        card.className = "coupon-card";

        if (redeemed) {
            card.classList.add("redeemed");
        }

        const number = document.createElement("span");
        number.className = "coupon-number";
        number.textContent = `VALE Nº ${String(index + 1).padStart(2, "0")}`;

        const title = document.createElement("h4");
        title.textContent = coupon.title;

        const status = document.createElement("span");
        status.className = "coupon-status";
        status.textContent = redeemed ? "JÁ RESGATADO ✓" : "ABRIR PRESENTE";

        card.append(number, title, status);

        card.addEventListener("click", () => {
            showCoupon(index);
        });

        couponsGrid.appendChild(card);
    });

    couponCounter.textContent =
        `${redeemedCoupons.length} de ${coupons.length} vales resgatados`;
}

// Abre um vale individual
function showCoupon(index) {
    selectedCoupon = index;

    const coupon = coupons[index];
    const redeemed = redeemedCoupons.includes(index);

    couponTitle.textContent = coupon.title;
    couponDescription.textContent = coupon.description;

    redeemCoupon.textContent = redeemed
        ? "VALE JÁ RESGATADO"
        : "RESGATAR ESTE VALE";

    redeemCoupon.disabled = redeemed;

    couponDetail.classList.remove("hidden");

    couponDetail.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Resgata um vale
redeemCoupon.addEventListener("click", () => {
    if (selectedCoupon === null) return;
    if (redeemedCoupons.includes(selectedCoupon)) return;

    redeemedCoupons.push(selectedCoupon);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(redeemedCoupons)
    );

    showCoupon(selectedCoupon);
    renderCoupons();
});

// Volta à lista
closeCoupon.addEventListener("click", () => {
    couponDetail.classList.add("hidden");
    selectedCoupon = null;

    couponsGrid.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});



/* =================================
   CHECKPOINTS — SALVAR PROGRESSO
================================= */

const GAME_SAVE_KEY = "entreNos_progressoCompleto";

function saveGameState() {
    const state = {
        screen: document.querySelector(".screen.active")?.id || "invitation",

        answers: {
            answer1: answer1.value,
            answer2: answer2.value,
            answer3: answer3.value,
            answer4: answer4.value,
            answer5: answer5.value,
            funnyAnswer: funnyAnswer.value
        },

        hints: {
            hintLevel,
            hintLevel2,
            hintLevel3,
            hintLevel4,
            hintLevel5
        },

        hintTexts: {
            hintText1: hintText1.textContent,
            hintText2: hintText2.textContent,
            hintText3: hintText3.textContent,
            hintText4: hintText4.textContent,
            hintText5: hintText5.textContent
        },

        feedback: {
            feedback1: feedback1.textContent,
            feedback2: feedback2.textContent,
            feedback3: feedback3.textContent,
            feedback4: feedback4.textContent,
            feedback5: feedback5.textContent,
            funnyFeedback: funnyFeedback.textContent,
            funnyQuestion: funnyQuestion.textContent
        },

        visibility: {
            errorChallenge: !errorChallenge.classList.contains("hidden"),
            hintArea: !hintArea.classList.contains("hidden"),
            success1: !success1.classList.contains("hidden"),
            success2: !success2.classList.contains("hidden"),
            success3: !success3.classList.contains("hidden"),
            success4: !success4.classList.contains("hidden"),
            success5: !success5.classList.contains("hidden"),
            couponsArea: !couponsArea.classList.contains("hidden"),
            couponDetail: !couponDetail.classList.contains("hidden")
        },

        disabled: {
            answer1: answer1.disabled,
            answer2: answer2.disabled,
            answer3: answer3.disabled,
            answer4: answer4.disabled,
            answer5: answer5.disabled,
            checkAnswer1: checkAnswer1.disabled,
            checkAnswer2: checkAnswer2.disabled,
            checkAnswer3: checkAnswer3.disabled,
            checkAnswer4: checkAnswer4.disabled,
            checkAnswer5: checkAnswer5.disabled
        },

        envelopeOpened: finalEnvelope.classList.contains("opened"),
        selectedCoupon,
        redeemedCoupons
    };

    localStorage.setItem(GAME_SAVE_KEY, JSON.stringify(state));
}

// Restaura o progresso salvo
function restoreGameState() {
    let state;

    try {
        state = JSON.parse(localStorage.getItem(GAME_SAVE_KEY));
    } catch {
        state = null;
    }

    if (!state) return;

    // Restaura a tela atual
    const savedScreen = document.getElementById(state.screen);

    if (savedScreen && savedScreen.classList.contains("screen")) {
        document.querySelectorAll(".screen").forEach(screen => {
            screen.classList.remove("active");
        });

        savedScreen.classList.add("active");
    }

    // Restaura respostas digitadas
    Object.entries(state.answers || {}).forEach(([id, value]) => {
        const element = document.getElementById(id);

        if (element) element.value = value;
    });

    // Restaura níveis das pistas
    hintLevel = state.hints?.hintLevel ?? 0;
    hintLevel2 = state.hints?.hintLevel2 ?? 0;
    hintLevel3 = state.hints?.hintLevel3 ?? 0;
    hintLevel4 = state.hints?.hintLevel4 ?? 0;
    hintLevel5 = state.hints?.hintLevel5 ?? 0;

    // Restaura textos das pistas
    Object.entries(state.hintTexts || {}).forEach(([id, value]) => {
        const element = document.getElementById(id);

        if (element) element.textContent = value;
    });

    // Restaura mensagens e pergunta aleatória
    Object.entries(state.feedback || {}).forEach(([id, value]) => {
        const element = document.getElementById(id);

        if (element) element.textContent = value;
    });

    // Restaura áreas que estavam abertas ou fechadas
    Object.entries(state.visibility || {}).forEach(([id, visible]) => {
        const element = document.getElementById(id);

        if (element) {
            element.classList.toggle("hidden", !visible);
        }
    });

    // Restaura botões desativados após respostas corretas
    Object.entries(state.disabled || {}).forEach(([id, disabled]) => {
        const element = document.getElementById(id);

        if (element) element.disabled = disabled;
    });

    // Restaura o envelope final
    if (state.envelopeOpened) {
        finalEnvelope.classList.add("opened");
        revealCoupons.classList.add("hidden");

        document.getElementById("envelopeInstruction").textContent =
            "O que estava escondido agora pertence a você.";
    }

    // Restaura vales resgatados
    if (Array.isArray(state.redeemedCoupons)) {
        redeemedCoupons = state.redeemedCoupons.filter(
            id => Number.isInteger(id) && id >= 0 && id < coupons.length
        );
    }

    selectedCoupon = state.selectedCoupon ?? null;

    if (state.visibility?.couponsArea) {
        couponsArea.classList.remove("hidden");
        renderCoupons();
    }

    // Restaura o vale que estava aberto
    if (
        state.visibility?.couponDetail &&
        selectedCoupon !== null &&
        selectedCoupon >= 0 &&
        selectedCoupon < coupons.length
    ) {
        showCoupon(selectedCoupon);
    }
}

// Salva depois de cliques e alterações nos campos
document.addEventListener("click", saveGameState);
document.addEventListener("input", saveGameState);

// Observa mudanças nas telas e nos elementos visuais
const progressObserver = new MutationObserver(() => {
    saveGameState();
});

progressObserver.observe(document.getElementById("app"), {
    attributes: true,
    attributeFilter: ["class"],
    subtree: true
});

// Restaura o jogo ao abrir a página
restoreGameState();

// Salva o estado inicial
saveGameState();
