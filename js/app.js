var altura = 0;
var largura = 0;
var vidas = 1;
/*Tempo para determinar vitoria / derrota */
var tempo = 15;
var dificuldadeDoJogo = 1500;

//Seleciona o nível de dificuldade do jogo
var nivel = window.location.search;
nivel = nivel.replace("?", "");
console.log(nivel);

if (nivel === "normal") {
  //1500ms
  dificuldadeDoJogo = 1500;
} else if (nivel === "dificil") {
  //1000ms
  dificuldadeDoJogo = 1000;
} else if (nivel === "supremo") {
  //750ms
  dificuldadeDoJogo = 750;
}
//Seleciona o tamanho do display para exibir elementos
function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(altura, largura);
}
ajustaTamanhoPalcoJogo();
/*Função para Crônometro */
var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

//Cria automaticamente elementos no corpo da p?gina
function posicaoRandomica() {
  //Verificar se há um elemento na tela

  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    //Implementar a remoção das vidas
    if (vidas > 3) {
      window.location.href = "game_over.html";
    } else {
      document.getElementById("v" + vidas).src = "assets/coracao_vazio.png";
      vidas++;
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;
  console.log(posicaoX, posicaoY);

  var mosquito = document.createElement("img");
  mosquito.src = "assets/mosquito.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.position = "absolute";
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.id = "mosquito";

  //Remoção de Elemento por clique
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}
/*Gerar Tamanho do Elemento */
function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

/*Alterar Lado do Mosquito */
function ladoAleatorio() {
  var classe1 = Math.floor(Math.random() * 2); //Gera o valor para o switch
  switch (classe1) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
  console.log(classe1);
}
