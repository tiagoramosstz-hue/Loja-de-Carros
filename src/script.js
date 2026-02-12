// script.js - Carrossel Interativo
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do carrossel
    const items = document.querySelectorAll('.item');
    const prevBtn = document.querySelector('.arrows button:first-child');
    const nextBtn = document.querySelector('.arrows button:last-child');
    const indicators = document.querySelectorAll('.indicators li');
    const numberIndicator = document.querySelector('.number');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    // Função para atualizar o carrossel
    function updateCarousel() {
        // Remove a classe 'active' de todos os itens
        items.forEach(item => {
            item.classList.remove('active');
        });
        
        // Remove a classe 'active' de todos os indicadores
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Adiciona a classe 'active' ao item atual
        items[currentIndex].classList.add('active');
        
        // Adiciona a classe 'active' ao indicador atual
        indicators[currentIndex].classList.add('active');
        
        // Atualiza o número do indicador (com zero à esquerda)
        numberIndicator.textContent = (currentIndex + 1).toString().padStart(2, '0');
    }
    
    // Função para ir para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    
    // Função para ir para o slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }
    
    // Função para ir para um slide específico
    function goToSlide(index) {
        if (index >= 0 && index < totalItems) {
            currentIndex = index;
            updateCarousel();
        }
    }
    
    // Event Listeners para os botões de navegação
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Event Listeners para os indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Auto-play (opcional - descomente se quiser)
    /*
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Inicia o auto-play
    startAutoPlay();
    
    // Pausa o auto-play quando o mouse está sobre o carrossel
    const carouselSection = document.querySelector('section');
    carouselSection.addEventListener('mouseenter', stopAutoPlay);
    carouselSection.addEventListener('mouseleave', startAutoPlay);
    
    // Pausa o auto-play quando em foco nos botões
    prevBtn.addEventListener('focus', stopAutoPlay);
    nextBtn.addEventListener('focus', stopAutoPlay);
    prevBtn.addEventListener('blur', startAutoPlay);
    nextBtn.addEventListener('blur', startAutoPlay);
    */
    
    // Inicializa o carrossel
    updateCarousel();
    
    // Efeito de swipe para dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;
    const carouselContainer = document.querySelector('.list');
    
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe
        
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe para a esquerda = próximo slide
            nextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe para a direita = slide anterior
            prevSlide();
        }
    }
    
    // Log para debug
    console.log('Carrossel inicializado com sucesso!');
    console.log(`Total de slides: ${totalItems}`);
});