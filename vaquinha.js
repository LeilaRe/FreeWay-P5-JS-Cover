//código do ator

let xVaquinha = 110;
let yVaquinha = 372;
let colisao = false;
let meusPontos = 0;

function mostrarVaquinha(){
  image(imagemDaVaquinha, xVaquinha, yVaquinha, 24, 21);
}

function movimentaVaquinha(){
  if (keyIsDown(UP_ARROW)){
    yVaquinha -= 3;
  }

  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yVaquinha += 3;
    }
  }
}

function verificarColisao(){
 for (let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle (xCarros [i], yCarros [i], larguraCarros, alturaCarros, xVaquinha, yVaquinha, 25);
   if (colisao){
     voltaVaquinhaPocisaoInicial();
     somDaColisao.play();
     if(pontosMaiorQueZero()){
     meusPontos -= 1;
     }
   }
 }
}

function voltaVaquinhaPocisaoInicial(){
  yVaquinha = 372;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0,255,127));
  text(meusPontos, width /5, 27);
}

function marcaPonto(){
  if(yVaquinha < 15){
    meusPontos += 1;
    voltaVaquinhaPocisaoInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
    return yVaquinha < 372;
}