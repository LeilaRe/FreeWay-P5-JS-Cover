//listas carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3.8, 3.2, 4, 2.4, 1.8];
let larguraCarros = 40;
let alturaCarros =  40;

//altura = 40, comprimento = 32

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros);
}
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
   }
  }
 }

function passouTodaATela(xCarros){
  return xCarros < - 50;
}