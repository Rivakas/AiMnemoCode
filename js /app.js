// Web3 klaidų prevencija
window.addEventListener('error', function(e) {
    if (e.filename.includes('inpage.js')) {
        e.preventDefault();
        console.warn('MetaMask klaida buvo ignoruota');
        return false;
    }
});

// Pasirenkame foninio video elementą
const video = document.querySelector('.video-background')

// Inicializuojame Swiper.js slankiklį su nustatymais
const swiperText = new Swiper('.swiper', {
    speed: 1600,       // Slinkimo greitis milisekundėmis
    mousewheel: {  },  // Įjungiame pelės ratuko valdymą
    pagination: {      // Puslapių indikatoriaus nustatymai
        el: '.swiper-pagination', // Elemento klasė
        clickable: true // Galima spausti ant indikatoriaus taškų
    },
    navigation: { // Navigacijos mygtukų nustatymai
        prevEl: '.swiper-button-prev', // Ankstesnės skaidrės mygtukas
        nextEl: '.swiper-button-next' // Kitos skaidrės mygtukas
    }
})

// Keičiame video poziciją keičiantis skaidrei
swiperText.on('slideChange', function() {
    gsap.to(video, 1.6, { // Animuojame video su GSAP
        currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex, // Apskaičiuojame video laiką
        ease: Power2.easeOut // Animacijos eigos funkcija
    })
})

// Valdome video permatomumą skaidrių keitimosi metu
swiperText.on('slideChangeTransitionStart', function() {
    video.classList.add('change') // Pridedame klasę perėjimo pradžioje
}).on('slideChangeTransitionEnd', function() {
    video.classList.remove('change') // Pašaliname klasę perėjimo pabaigoje
})
