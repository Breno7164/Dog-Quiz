var tela = 1;
var largura = 200;
var altura = 50;
var xmenu = 195;
var xmenu2 = 10;
var xmenu3 = 539;
var xmenu4 = 200;
var ymenu1 = 165;
var ymenu2 = 245;
var ymenu3 = 485;
var ymenu4 = 50;
var ymenu5 = 480;
var xopcao1 = 80;
var yopcao1 = 480
var xopcao2 = 320;
var yopcao2 = 480
var raio = 25;
var rect_lar = 425;
var rect_alt = 322;
var dog_img = [];
var count = 0;
var pontos = 0;
var botao;
var status1 = true;

var racas = ["Beagle", "Border Collie", "Bull Terrier", "Corgi", "Dachshund", "Doberman",
"Golden Retriver", "Husky Siberiano", "Labrador", "Pastor Alemão", "Pincher", "Pitbull",
"São Bernardo", "Shih Tzu", "Yorkshire"];

function preload(){
  img = loadImage('imagens/fundo_inicial.jpg');
  img2 = loadImage('imagens/fundo_inicial_2.png');
  logo = loadImage('imagens/logo.png');
  fim_logo = loadImage('imagens/fim.png');
  dog_logo = loadImage('imagens/dog.png');
  dog_img[0] = loadImage('cachorros/beagle.jpg');
  dog_img[1] = loadImage('cachorros/beagle.jpg');
  dog_img[2] = loadImage('cachorros/border-collie.jpg');
  dog_img[3] = loadImage('cachorros/bull-terrier.jpg');
  dog_img[4] = loadImage('cachorros/corgi.jpg');
  dog_img[5] = loadImage('cachorros/dachshund.jpg');
  dog_img[6] = loadImage('cachorros/doberman.jpg');
  dog_img[7] = loadImage('cachorros/golden-retriever.jpg');
  dog_img[8] = loadImage('cachorros/husky-siberiano.jpg');
  dog_img[9] = loadImage('cachorros/labrador.jpg');
  dog_img[10] = loadImage('cachorros/pastor-alemão.jpg');
  dog_img[11] = loadImage('cachorros/pincher.jpg');
  dog_img[12] = loadImage('cachorros/pitbull.jpg');
  dog_img[13] = loadImage('cachorros/sao-bernardo.jpg');
  dog_img[14] = loadImage('cachorros/shih-tzu.jpg');
  dog_img[15] = loadImage('cachorros/yorkshire.jpg');
}

function setup(){
  createCanvas(600, 600);
}

function mousePressed(){
  if (mouseIsPressed && mouseX > xopcao1 && mouseX < xopcao1 + largura && mouseY > yopcao1 && mouseY < yopcao1 + altura){
      count = count + 1;
    }
  if (mouseIsPressed && mouseX > xopcao2 && mouseX < xopcao2 + largura && mouseY > yopcao2 && mouseY < yopcao2 + altura){
      count = count + 1;
    }
  if(count == 16){
    count = 0;
    tela = 4;
  }
  if(status1 == false){
    status1 = true;
  }
}

function draw(){
  textStyle(NORMAL);
  
  //Tela do menu
  if (tela == 1){
    background(20);
    image(img, 0, 0);
    image(logo, 30, 300),
    //jogar
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(26);
    
    if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura){
      stroke(200);
      fill(0, 120, 0);
      rect(xmenu, ymenu1, largura, altura, 15);
      if(mouseIsPressed){
        count = 1;
        tela = 2;
        pontos = 0;
         }
    }
    
    fill(000);
    noStroke();
    text("Jogar", 295, 200);
    
    //informações
    if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura){
      stroke(200);
      fill(0, 120, 0);
      rect(xmenu, ymenu2, largura, altura, 15);
      if (mouseIsPressed){
        tela = 3
      }
    }
    
    fill(000);
    noStroke()
    text("Sobre", 295, 280);
  }
  
  //jogo funcionando
  if (tela == 2){
    background(10);
    image(img2, 0, 0);
    fill(000);
    noStroke();
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(23);
    
    text("Que raça é essa?", 190, 100);
    text(pontos + "  " + "Pontos", 450, 100);
    
    fill(0, 200, 480);
    rect(90, 120, rect_lar, rect_alt);
    image(dog_img[count], 100, 130);
    
    //opções
    stroke(200);
    fill(0, 200, 480);
    rect(xopcao1, yopcao1, largura, altura, 15);
    if (mouseIsPressed && mouseX > xopcao1 && mouseX < xopcao1 + largura && mouseY > yopcao1 && mouseY < yopcao1 + altura){
      tela = 2;
    }
    
    fill(000);
    noStroke();
    if(count == 1){
      text(racas[0], 175, 515);
    }
    if(count == 2){
      text(racas[3], 175, 515);
    }
    if(count == 3){
      text(racas[2], 175, 515);
    }
    if(count == 4){
      text(racas[4], 175, 515);
    }
    if(count == 5){
      text(racas[0], 175, 515);
    }
    if(count == 6){
      text(racas[5], 175, 515);
    }
    if(count == 7){
      text(racas[8], 175, 515);
    }
    if(count == 8){
      text(racas[7], 175, 515);
    }
    if(count == 9){
      text(racas[8], 175, 515);
    }
    if(count == 10){
      text(racas[7], 175, 515);
    }
    if(count == 11){
      text(racas[14], 175, 515);
    }
    if(count == 12){
      text(racas[11], 175, 515);
    }
    if(count == 13){
      text(racas[12], 175, 515);
    }
    if(count == 14){
      text(racas[12], 175, 515);
    }
    if(count == 15){
      text(racas[14], 175, 515);
    }
    
    stroke(200);
    fill(0, 200, 480);
    rect(xopcao2, yopcao2, largura, altura, 15);
    if (mouseIsPressed && mouseX > xopcao2 && mouseX < xopcao2 + largura && mouseY > yopcao2 && mouseY < yopcao2 + altura){
      tela = 2;
    }
    
    fill(000);
    noStroke();
    
    if(count == 1){
      text(racas[4], 420, 515);
    }
    if(count == 2){
      text(racas[1], 420, 515);
    }
    if(count == 3){
      text(racas[11], 420, 515);
    }
    if(count == 4){
      text(racas[3], 420, 515);
    }
    if(count == 5){
      text(racas[4], 420, 515);
    }
    if(count == 6){
      text(racas[1], 420, 515);
    }
    if(count == 7){
      text(racas[6], 420, 515);
    }
    if(count == 8){
      text(racas[9], 420, 515);
    }
    if(count == 9){
      text(racas[1], 420, 515);
    }
    if(count == 10){
      text(racas[9], 420, 515);
    }
    if(count == 11){
      text(racas[10], 420, 515);
    }
    if(count == 12){
      text(racas[5], 420, 515);
    }
    if(count == 13){
      text(racas[6], 420, 515);
    }
    if(count == 14){
      text(racas[13], 420, 515);
    }
    if(count == 15){
      text(racas[10], 420, 515);
    }
    
    if(mouseX > xopcao1 && mouseX < xopcao1 + largura && mouseY > yopcao1 && mouseY < yopcao1 + altura){
      if(mouseIsPressed && status1 == true){
        if(count == 1 || count == 2 || count == 4 || count == 7 || count == 9 || count == 10 || count == 13 || count == 14){
          pontos++;
        }
        rect(xopcao1, yopcao1, largura, altura, 15);
        botao = 1;
        status1 = false;
      }
    }
    
    if(mouseIsPressed && mouseX > xopcao2 && mouseX < xopcao2 + largura && mouseY > yopcao2 && mouseY < yopcao2 + altura){
      if(mouseIsPressed && status1 == true){
        if(count == 3 || count == 5 || count == 6 || count == 8 || count == 11 || count == 12 || count == 15){
          pontos++;
        }
        rect(xopcao2, yopcao2, largura, altura, 15);
        botao = 2;
        status1 = false;
      }
    }
    
    //sair
    if (dist(xmenu3, ymenu4, mouseX, mouseY) < raio){
      stroke(200);
      fill(0, 200, 480);
      ellipse(xmenu3, ymenu4, 2*raio, 2*raio);
      if (mouseIsPressed){
        tela = 1
      }
    }
    
    fill(000);
    textStyle(BOLD);
    noStroke();
    textSize(40);
    text("x", 540, 60);
  }
  
  //sobre o jogo
  if (tela == 3){
    background(10);
    image(img2, 0, 0);
    fill(000);
    textSize(20);
    noStroke();
    textStyle(BOLD);
    textAlign(CENTER);
    text("Este jogo educacional é recomendado para os alunos do 3º ano do ensino fundamental. Desenvolve a habilidade: EF03CI06, que ajuda a aperfeiçoar a identificação de grupos de animais. O jogo é um quiz, seu objetivo é adivinhar a qual raça o cachorro mostrado pertence.", 90, 90, 415, 415);
    text("Criado por Breno Barbosa.", 50, 300, 500, 500);
    
    //voltar
    if (mouseX > xmenu2 && mouseX < xmenu2 + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura){
      stroke(200);
      fill(0, 200, 480);
      rect(xmenu2, ymenu3, largura, altura, 15);
      if (mouseIsPressed){
        tela = 1
      }
    }
    
    fill(000);
    noStroke();
    text("Voltar", 110, 520);
    
  }
  
  //fim do jogo
  if(tela == 4){
    background(10);
    image(img2, 0, 0);
    fill(000);
    textSize(20);
    noStroke();
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(26);
    
    image(fim_logo, 100, 10);
    image(dog_logo, 150, 310);
    text("Sua pontuação foi: " + pontos, 300, 230);
    
    if (dist(xmenu3, ymenu4, mouseX, mouseY) < raio){
      stroke(200);
      fill(0, 200, 480);
      ellipse(xmenu3, ymenu4, 2*raio, 2*raio);
      if (mouseIsPressed){
        tela = 1
      }
    }
    
    fill(000);
    textStyle(BOLD);
    noStroke();
    textSize(40);
    text("x", 540, 60);
    
  }
}