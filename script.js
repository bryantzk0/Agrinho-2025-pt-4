// Partículas
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('particles.json carregado');
});

// Efeito de digitação
const texto = document.querySelector(".digitando");
const textoOriginal = texto.textContent;
texto.textContent = "";

let i = 0;
function digitar() {
    if (i < textoOriginal.length) {
        texto.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(digitar, 150);
    }
}
digitar();

// Som ambiente
const som = document.getElementById('audio');
const botaoSom = document.getElementById('somBtn');
let tocando = false;

botaoSom.addEventListener('click', () => {
    if (!tocando) {
        som.play();
        botaoSom.textContent = '🔈';
        tocando = true;
    } else {
        som.pause();
        botaoSom.textContent = '🔊';
        tocando = false;
    }
});
