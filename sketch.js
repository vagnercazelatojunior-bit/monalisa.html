let img;

function preload() {
  // Carrega a imagem salva na sua pasta
  img = loadImage('monalisa.jpg');
}

function setup() {
  // Cria uma tela vertical padrão para retratos
  createCanvas(500, 700);
  
  // Redimensiona a imagem para preencher o Canvas do p5.js
  img.resize(width, height);
  
  // Fundo inicial preto
  background(0);
}

function draw() {
  // Desenha 50 círculos por frame para agilizar a pintura
  for (let i = 0; i < 50; i++) {
    
    // Sorteia uma coordenada aleatória na tela
    let x = floor(random(width));
    let y = floor(random(height));
    
    // Captura a cor real do pixel da foto nessa coordenada
    let corPixel = img.get(x, y);
    
    // Aplica a cor com opacidade/transparência em 150 (esfumaçado)
    fill(red(corPixel), green(corPixel), blue(corPixel), 150);
    noStroke();
    
    // Calcula a distância do mouse até o círculo sorteado
    let distancia = dist(mouseX, mouseY, x, y);
    
    // Mapeia o tamanho do pincel: perto do mouse = pequeno/nítido, longe = grande/abstrato
    let tamanhoPincel = map(distancia, 0, width, 4, 24, true);
    
    // Renderiza a pincelada realista na tela
    ellipse(x, y, tamanhoPincel, tamanhoPincel);
  }
}
