// Efeito digitando no título
const text = "Agrinho 2025 - O Futuro do Campo é Agora";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Função scroll suave ao clicar nos botões
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}
