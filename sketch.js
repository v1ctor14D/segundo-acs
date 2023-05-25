function setup() {
    createCanvas(450, 450);
    background(199, 218, 145);
  
    strokeWeight(0);
    //quad
    fill(124, 179, 66);
    quad(30, 350, 500, 193, 500, 500, 15, 273);
    fill(56, 142, 60);
    quad(50, 500, 300, 193, 500, 500, 15, 273);
    //elipse del fondo
    strokeWeight(0);
    fill(39, 174, 96); //verde
    ellipse(250, 190, 350, 350);
    fill(48, 63, 159); //azul
    ellipse(220, 190, 250, 250);
    fill(150); //gris
    ellipse(15, 300, 250, 250);
    fill(204, 0, 51); //rojo
    ellipse(2, 300, 250, 250);
    fill(51, 102, 0); //verde oscuro
    ellipse(2, 300, 150, 150);
  
    //elipse frontal. Leer de arriba para abajo
    fill(250); //blanco
    ellipse(300, 70, 110, 110); //primera
    ellipse(250, 170, 110, 110); //segunda
    ellipse(200, 270, 110, 110); //tercera
    ellipse(155, 372, 110, 110); //cuarta
    fill(0)
      ellipse(300, 70, 100, 100);
    ellipse(250, 170, 100, 100);
    ellipse(200, 270, 100, 100); //tercera
    ellipse(155, 372, 100, 100);
  }
  
  function draw() {
    //Coordenadas
    console.log("x:" + mouseX + "y:" + mouseY);
    
    //primer circulo
     fill(230, 126, 34); //naranja
  
    strokeWeight(4);
    beginShape();
  
    if (mouseIsPressed) fill(195, 155, 211);
    
    ellipse(300, 70, 110, 110);
    endShape(CLOSE);
    
    //segundo circulo
     fill(26, 188, 156); //verde
  
    strokeWeight(4);
    beginShape();
  
    if (mouseIsPressed) fill(52, 152, 219);
  ellipse(250, 170, 110, 110);
    endShape(CLOSE);
    
    //tercer circulo
    fill(253, 550, 122); //amarillo
  
    strokeWeight(4);
    beginShape();
  
    if (mouseIsPressed) fill(236, 112, 99 );
    ellipse(200, 270, 110, 110);
    endShape(CLOSE);
    
    //cuarto circulo
    fill(165, 214, 167 ); //amarillo
  
    strokeWeight(4);
    beginShape();
  
    if (mouseIsPressed) fill(236, 64, 122  );
   ellipse(155, 372, 110, 110);
    endShape(CLOSE);
  
  }
  