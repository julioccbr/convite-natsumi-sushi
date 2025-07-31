// Função para mostrar o convite
function showInvitation() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('invitation-screen').classList.remove('hidden');

    // Adicionar efeito de entrada
    const card = document.querySelector('.invitation-card');
    card.style.animation = 'card-appear 0.8s ease-out';
}

// Função para responder ao convite
function respond(answer) {
    const invitationScreen = document.getElementById('invitation-screen');
    const maybeScreen = document.getElementById('maybe-screen');

    if (answer === 'yes') {
        invitationScreen.classList.add('hidden');
        document.getElementById('yes-screen').classList.remove('hidden');
        createConfetti();
        startCountdown();
    } else if (answer === 'maybe') {
        invitationScreen.classList.add('hidden');
        maybeScreen.classList.remove('hidden');
    } else if (answer === 'no') {
        invitationScreen.classList.add('hidden');
        maybeScreen.classList.add('hidden');
        document.getElementById('no-screen').classList.remove('hidden');
    }
}

// Função para criar confetti
function createConfetti() {
    const container = document.querySelector('.confetti-container');
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            container.appendChild(confetti);

            // Remover confetti após animação
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 50);
    }
}

// Função para contagem regressiva
function startCountdown() {
    // Definir data do date (próxima quarta-feira às 19h)
    const now = new Date();
    const daysUntilWednesday = (3 - now.getDay() + 7) % 7;
    const targetDate = new Date();
    targetDate.setDate(now.getDate() + daysUntilWednesday);
    targetDate.setHours(19, 0, 0, 0);

    const timer = setInterval(() => {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdown-timer').innerHTML = "É hoje! 🎉";
            clearInterval(timer);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown-timer').innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Função para reiniciar
function restart() {
    // Esconder todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));

    // Mostrar tela inicial
    document.getElementById('welcome-screen').classList.remove('hidden');

    // Limpar confetti
    const confettiContainer = document.querySelector('.confetti-container');
    confettiContainer.innerHTML = '';
}

// Efeitos de hover na abelha
document.addEventListener('DOMContentLoaded', function () {
    const bee = document.querySelector('.bee');
    if (bee) {
        bee.addEventListener('mouseenter', function () {
            this.style.animation = 'bee-excited 0.5s infinite';
        });

        bee.addEventListener('mouseleave', function () {
            this.style.animation = 'bee-fly 3s infinite ease-in-out';
        });
    }

    // Adicionar efeito de clique na abelha
    const beeContainer = document.querySelector('.bee-container');
    if (beeContainer) {
        beeContainer.addEventListener('click', function () {
            this.style.transform = 'scale(0.8)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }

    // Efeitos de hover nos motivos
    const reasons = document.querySelectorAll('.reason');
    reasons.forEach(reason => {
        reason.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });

        reason.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito de digitação no título
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        setTimeout(typeWriter, 1000);
    }
});

// Adicionar sons de efeito (opcional)
function playSound(type) {
    // Aqui você pode adicionar sons se quiser
    // Por exemplo, usando Web Audio API
    console.log(`Som de ${type} tocado!`);
}

// Efeito de partículas flutuantes
function createFloatingParticles() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(255, 255, 255, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite linear`;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';

        container.appendChild(particle);
    }
}

// Inicializar partículas quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    createFloatingParticles();
});

// Adicionar CSS para animação de flutuação
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);
