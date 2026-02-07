// Configuration des messages pour le site de pardon
const config = {
    // Message principal d'excuse
    mainMessage: `j'ai pas fait expres lvrt 🥀​`,

    // Raisons / ce que tu as compris
    reasons: [
       "enft j'ai miss click et de base je voulais juste le signaler"
    ],

    // Promesse personnalisée
    promise: `debloque moi sur tiktok plss 😉​`,

    // Signature
    signature: `Moi`,

    // Messages pour les réponses
    acceptedMessage: "WEEEEEEEEEEEEEEEEEE 🕺​💃",
    thinkingMessage: "ALLER MRD 🚶🏽‍♂️‍➡️"
};

// Joli style pour charger les textes progressivement
function typeText(element, text, speed = 40) {
    element.innerHTML = '';
    let index = 0;
    
    const typing = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text[index];
            index++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

// Créer les étoiles
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Fonction pour confettis
function createConfetti() {
    const confettiCount = 50;
    const colors = ['#df5f85', '#bd4827', '#f093fb', '#f5576c', '#ffecd2'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 1}s linear forwards`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Gestion du pardon
function handleForgiveness(accepted) {
    const popup = document.getElementById('compassPopup');
    const popupContent = popup.querySelector('.popup-content');
    
    if (accepted) {
        popupContent.innerHTML = `
            <p>💫 ${config.acceptedMessage} 💫</p>
            <p style="font-size: 3em; margin-top: 20px;">💮​🥹​💮​</p>
        `;
        createConfetti();
    } else {
        popupContent.innerHTML = `
            <p>${config.thinkingMessage}</p>
        `;
    }
    
    popup.classList.remove('hidden');
    
    // Fermer le popup après 3 secondes
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3000);
}

// Initialisation du site
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    
    // Afficher le message principal
    const messageElement = document.getElementById('message');
    typeText(messageElement, config.mainMessage, 30);
    
    // Afficher les raisons
    const reasonsList = document.getElementById('reasonsList');
    config.reasons.forEach((reason, index) => {
        const li = document.createElement('li');
        li.textContent = reason;
        li.style.opacity = '0';
        reasonsList.appendChild(li);
        
        // Animation de fade-in pour chaque raison
        setTimeout(() => {
            li.style.transition = 'opacity 0.6s ease-out';
            li.style.opacity = '1';
        }, 400 + index * 100);
    });
    
    // Afficher la promesse
    const promiseElement = document.getElementById('promise');
    setTimeout(() => {
        typeText(promiseElement, config.promise, 20);
    }, 800);
    
    // Afficher la signature
    const signatureElement = document.getElementById('signature');
    setTimeout(() => {
        signatureElement.innerHTML = config.signature.replace(/\n/g, '<br>');
        signatureElement.style.opacity = '0';
        signatureElement.style.animation = 'fadeIn 1s ease-out forwards';
    }, 1200);
});
