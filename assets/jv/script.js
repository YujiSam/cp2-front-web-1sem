// Seleciona o elemento do menu hambúrguer pelo ID '#Menu'
const hamMenu = document.querySelector('#Menu');

// Seleciona o menu que fica fora da tela pelo ID '#Menu-Off'
const OffScreenMenu = document.querySelector('#Menu-Off');

// Adiciona um ouvinte de evento ao menu hambúrguer para lidar com cliques
hamMenu.addEventListener('click', () => {
    // Alterna a classe 'active' no menu hambúrguer e no menu fora da tela
    hamMenu.classList.toggle('active');
    OffScreenMenu.classList.toggle('active');
})

// Inicializa o índice do slide em 1 (primeiro slide)
let slideIndex = 1;

// Chama a função para exibir o slide correspondente ao índice atual
showSlides(slideIndex);

// Função para avançar ou retroceder slides
function plusSlides(n) {
  // Atualiza o índice do slide com a adição do valor 'n'
  showSlides(slideIndex += n);
}

// Função para definir o slide atual com base no número fornecido
function currentSlide(n) {
  // Define o índice do slide para 'n' e chama a função para exibir o slide correspondente
  showSlides(slideIndex = n);
}

// Função para exibir slides com base no índice atual
function showSlides(n) {
  let i; // Declaração de variável para uso em loop
  let slides = document.getElementsByClassName("mySlides"); // Coleta todos os elementos com a classe 'mySlides'
  let dots = document.getElementsByClassName("dot"); // Coleta todos os elementos com a classe 'dot'
  
  // Se o índice for maior do que a quantidade de slides, reinicia para o primeiro
  if (n > slides.length) {slideIndex = 1}
  
  // Se o índice for menor do que 1, define para o último slide
  if (n < 1) {slideIndex = slides.length}
  
  // Oculta todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove a classe 'active' de todos os pontos indicativos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Mostra o slide correspondente ao índice atual
  slides[slideIndex - 1].style.display = "block";
  
  // Adiciona a classe 'active' ao ponto indicativo correspondente ao slide atual
  dots[slideIndex - 1].className += " active";
}
