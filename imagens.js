//imagens e sons do jogo

let imagemDaEstrada;
let imagemDaVaquinha;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDaVaquinha = loadImage("imagens/vaquinha.png");
  imagemCarro = loadImage("imagens/carro1.png")
  imagemCarro2 = loadImage("imagens/carro2.png")
  imagemCarro3 = loadImage("imagens/carro3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,   imagemCarro, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}