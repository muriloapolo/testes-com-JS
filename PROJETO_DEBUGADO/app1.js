var altura = 0;
var largura = 0;
var vidas = 1;

var tempo = 15;
//Recupera  área da tela
function areaDoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}
areaDoJogo();
//Cronômetro
var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(geraMosquitos);
    window.location.href = "won1.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);
//Posicao randomica com num inteiro arredondado para baixo
function posicaoRandom() {
  //Controla Pontos de Vida
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas > 3) {
      window.location.href = "over1.html"; //alterar para uma nova página
    } else {
      document.getElementById("v" + vidas).src = "assets/coracao_vazio.png";
      vidas++;
    }
  }
  console.log(vidas);
  /*-------------Gera Pos Random----------------*/
  var posX = Math.floor(largura * Math.random()) - 90;
  var posY = Math.floor(altura * Math.random()) - 90;

  posX = posX < 0 ? 0 : posX;
  posY = posY < 0 ? 0 : posY;
  //Criar Elemento na página
  var mosquito = document.createElement("img");
  mosquito.src = "assets/mosquito.png";
  document.body.appendChild(mosquito);
  mosquito.className = tamanhoAleatorio() + " " + alteraLado(); //função de tamanho aleatório
  mosquito.style.position = "absolute";
  mosquito.style.left = posX + "px";
  mosquito.style.top = posY + "px";
  mosquito.id = "mosquito";

  //Verifica existência
  //Remover mosquito com clique
  mosquito.onclick = function () {
    this.remove();
  };
}
//Tamanhos aleatórios
function tamanhoAleatorio() {
  var tamanho = Math.floor(Math.random() * 3);

  switch (tamanho) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}
//Alterar Lado/direção dos elemento.
function alteraLado() {
  var lado = Math.floor(Math.random() * 2);
  switch (lado) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
