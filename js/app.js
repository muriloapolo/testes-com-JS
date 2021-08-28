var altura = 0;
var largura = 0;
var vidas = 1;
//Seleciona o tamanho do display para exibir elementos
function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(altura, largura);
}
ajustaTamanhoPalcoJogo();

//Cria automaticamente elementos no corpo da p?gina
function posicaoRandomica() {
  //Verificar se há um elemento na tela

  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    //Implementar a remoção das vidas
    if (vidas > 3) {
      alert("Game Over!");
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
