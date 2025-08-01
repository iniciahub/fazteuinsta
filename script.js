document.addEventListener('DOMContentLoaded', function() {

    // --- ANIMAÇÃO DE REVELAR AO ROLAR (SCROLL REVEAL) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar depois que for visível para não repetir
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // O elemento é considerado visível quando 10% dele estiver na tela
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    // --- CONTADOR ANIMADO ---
    const contadorElement = document.getElementById('contador');

    const animateCounter = (element, target) => {
        let current = 0;
        const duration = 2000; // 2 segundos
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
            current += 1;
            element.innerText = `+${current}`;
            if (current === target) {
                clearInterval(timer);
            }
        }, stepTime);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(contadorElement, 300);
                // Parar de observar depois de animar
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Começa a animar quando 50% do contador estiver visível
    });

    if (contadorElement) {
        counterObserver.observe(contadorElement);
    }

});
