// Variáveis
let imagePicker = document.querySelector("#imagem1")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const button = document.querySelector("#btnPicker")

// Eventos
imagePicker.addEventListener('mouseenter', function() {
    imagePicker.classList.add('animar')
});

imagePicker.addEventListener('mouseleave', function() {
    imagePicker.classList.remove('animar');
});

imagePicker.addEventListener('click', toggleScreen)
button.addEventListener('click', toggleScreen)
button.addEventListener('click', abrirOutroBiscoito)


// Funções
function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function gerarTextoAleatorio() {
    const textosAleatorios = [
      "Acredite em você mesmo e tudo será possível.",
      "O segredo do sucesso é a constância do propósito.",
      "A persistência é o caminho do êxito.",
      "Nada é tão nosso quanto os nossos sonhos.",
      "A vitória sorri para os que trabalham arduamente.",
      "Grandes aventuras esperam por você.",
      "Seja a mudança que você deseja ver no mundo.",
      "Acredite em si mesmo e tudo é possível.",
      "Boas coisas estão por vir.",
      "A vida é cheia de surpresas agradáveis.",
      "A felicidade está nas pequenas coisas.",
      "Seja gentil sempre que possível. Sempre é possível.",
      "Cada saída é uma entrada em algum lugar.",
      "Grandes realizações começam com pequenas ações.",
      "O otimismo é a chave para o sucesso.",
      "A cada dificuldade, surge uma oportunidade."
    ];
    return textosAleatorios[Math.floor(Math.random() * textosAleatorios.length)];
  }
function atualizarTextoAleatorio() {
    const mensagemElemento = document.querySelector('.screen2 p');
    const textoAleatorio = gerarTextoAleatorio();
    mensagemElemento.textContent = textoAleatorio;
}
function abrirOutroBiscoito() {
    atualizarTextoAleatorio();
}


