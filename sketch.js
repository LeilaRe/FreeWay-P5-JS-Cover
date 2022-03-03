function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraCarro();
  movimentaCarro();
  mostrarVaquinha();
  movimentaVaquinha();
  voltaPosicaoInicialDoCarro();
  verificarColisao();
  incluiPontos();
  marcaPonto();
}



