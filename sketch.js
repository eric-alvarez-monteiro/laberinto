let pared = 1
let teleportImage;
let metaImage
let lavaImage
let llaveImage
let personaImage
let final = false;
let direccion;
let frameUltimoMovimiento = 0;
let framesEntreMovimientos = 10;
let level = 0
let distanciaVision = 2;

function preload() {
  teleportImage = loadImage ('./images/teleport.png');
  metaImage =loadImage ('./images/meta.png')
  lavaImage =loadImage ('./images/lava.png')
  llaveImage =loadImage ('./images/llave.png')
  personaImage =loadImage ('./images/persona.png')
}

function crearMaze3() {
  return [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, pared, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
}

let mazes = [];

let maze1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let maze2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 0, 3, 3, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 0, 0, 1, 3, 1, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 0, 3, 1, 0, 0, 3, 3, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 3, 3, 0, 3, 0, 1, 1, 1, 3, 1, 1, 0, 3, 0, 3, 0, 1],
  [1, 0, 1, 1, 1, 3, 1, 1, 0, 1, 0, 0, 0, 3, 3, 0, 1, 0, 1],
  [1, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 1, 0, 1],
  [1, 3, 3, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 0, 1, 0, 1, 0, 1],
  [1, 3, 3, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 1],
  [1, 0, 0, 0, 0, 3, 3, 0, 0, 1, 3, 0, 3, 0, 0, 0, 3, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 0, 1, 3, 1, 0, 0, 0, 3, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 3, 0, 0, 0, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let maze3 = crearMaze3();

let maze4 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 3, 3, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 3, 3, 3, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 5, 0, 1, 1, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let maze5 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 3, 3, 3, 3, 3, 3, 5, 6, 6, 3, 3, 3, 3, 3, 3, 3, 1],
  [1, 6, 3, 3, 3, 3, 3, 3, 3, 3, 6, 3, 3, 3, 3, 3, 3, 3, 1],
  [1, 6, 7, 3, 3, 3, 3, 3, 3, 3, 0, 6, 6, 0, 0, 7, 3, 3, 1],
  [1, 6, 3, 3, 3, 3, 3, 3, 3, 3, 6, 3, 3, 3, 0, 3, 3, 3, 1],
  [1, 0, 6, 6, 0, 3, 3, 3, 3, 3, 6, 3, 3, 3, 6, 3, 3, 3, 1],
  [1, 3, 3, 3, 6, 3, 3, 3, 3, 3, 6, 3, 3, 3, 6, 6, 3, 3, 1],
  [1, 3, 3, 3, 6, 3, 6, 0, 6, 3, 0, 3, 3, 3, 6, 3, 3, 3, 1],
  [1, 3, 3, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 6, 0, 3, 3, 3, 1],
  [1, 3, 3, 6, 3, 3, 3, 3, 6, 3, 0, 3, 0, 3, 3, 3, 3, 3, 1],
  [1, 3, 3, 6, 0, 6, 3, 3, 0, 0, 0, 3, 0, 0, 3, 6, 0, 6, 1],
  [1, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 3, 3, 6, 0, 0, 3, 7, 1],
  [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 2, 3, 3, 3, 3, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

mazes[0] = maze1;
mazes[1] = maze2;
mazes[2] = maze3;
mazes[3] = maze4;
mazes[4] = maze5;


maze = mazes[level];

let cellSize = 40;
let player = { 
  x: 1,
  y: 1 
};

let botonArriba, botonAbajo, botonIzquierda, botonDerecha;

function crearControlesTouch() {
  // Crear los botones
  botonArriba = createButton('⬆️');
  botonAbajo = createButton('⬇️');
  botonIzquierda = createButton('⬅️');
  botonDerecha = createButton('➡️');

  // Estilos
  const size = '120px';
  botonArriba.size(size, size);
  botonAbajo.size(size, size);
  botonIzquierda.size(size, size);
  botonDerecha.size(size, size);

  // Posicionamiento relativo al canvas
  let cx = width / 2;
  let cy = height + 5;

  botonArriba.position(cx - 30, cy);
  botonIzquierda.position(cx - 90, cy + 60);
  botonAbajo.position(cx - 30, cy + 60);
  botonDerecha.position(cx + 30, cy + 60);

  // Eventos
  botonArriba.mousePressed(() => {
    keyCode = UP_ARROW;
    moverPersonaje();
  });
  botonAbajo.mousePressed(() => {
    keyCode = DOWN_ARROW;
    moverPersonaje();
  });
  botonIzquierda.mousePressed(() => {
    keyCode = LEFT_ARROW;
    moverPersonaje();
  });
  botonDerecha.mousePressed(() => {
    keyCode = RIGHT_ARROW;
    moverPersonaje();
  });
}



function setup() {
  createCanvas(maze[0].length * cellSize, maze.length * cellSize);
  crearControlesTouch();
}

function draw() {  
  if (keyIsPressed) {
    moverPersonaje()
  }
  
  if (final) {
    return;
  }
  
  imageMode(CORNER);
  background(200);

  // Dibujar laberinto
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[0].length; x++) {
      if(!playerEstaCercaPosicion(x, y)) {
        continue;
      }
      if (maze[y][x] === 1) {
        stroke(0)
        fill(0);// pared
      } else if (maze[y][x] === 2) {
        stroke(0)
        fill(0)
      } else if (maze[y][x] === 3) {
        stroke('#E83900')
        fill('#E83900')
      } else if (maze[y][x] === 4) {
        stroke('#FFFFFF')
        fill('#FFFFFF')
      } else if (maze[y][x] === 5) {
        stroke('#F4F8C9')
        fill('#F4F8C9')
      } else if (maze[y][x] === 6) {
        stroke('#E83900')
        fill('#E83900')
      } else if (maze[y][x] === 7){
      stroke(0)
      } else{
        stroke(255)
        fill(255);
      }
      
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      if(maze[y][x] === 5) {
        image(teleportImage, x * cellSize, y * cellSize);
      }
       if(maze[y][x] === 2) {
        image(metaImage, x * cellSize, y * cellSize);
      }
      if(maze[y][x] === 3) {
        image(lavaImage, x * cellSize, y * cellSize);
      }
      if(maze[y][x] === 4) {
        image(llaveImage, x * cellSize, y * cellSize);
      }
      if(maze[y][x] === 6) {
        image(lavaImage, x * cellSize, y * cellSize);
      }
      if(maze[y][x] === 7) {
        stroke(0)
        image(metaImage, x * cellSize, y * cellSize);
      }
    }
    
    
  }

  // Dibujar jugador
  //fill('red');
  //stroke('red')
  //ellipse(player.x * cellSize + cellSize/2, player.y * cellSize + cellSize/2, cellSize * 0.6);
  colocarPersonaje()
}

function colocarPersonaje() {
  push();
  imageMode(CENTER); // centramos la imagen en su punto medio
  angleMode(RADIANS);
  translate(player.x * cellSize + cellSize / 2, player.y   * cellSize  + cellSize / 2);
  if (direccion == LEFT_ARROW) {
    rotate(HALF_PI);
  } 
  if(direccion == RIGHT_ARROW) {
    rotate(-HALF_PI);
  } 
  if(direccion == UP_ARROW) {
    rotate(PI);
  } 
  image (personaImage, 0,  0)
  pop();
}

function moverPersonaje() {
  if(!final && (frameCount - frameUltimoMovimiento < framesEntreMovimientos)) {
    return;
  }
  let newX = player.x;
  let newY = player.y;

  if (keyCode === LEFT_ARROW) {
    newX--;
    direccion = keyCode;
  }
  if (keyCode === RIGHT_ARROW) {
    newX++;
    direccion = keyCode;
  }
  if (keyCode === UP_ARROW) {
    newY--;
    direccion = keyCode;    
  } 
  if (keyCode === DOWN_ARROW) {
    newY++;
    direccion = keyCode;    
  }

  // Verificar colisiones
  if (maze[newY][newX] === 0 || maze[newY][newX] === 2 || 
      maze[newY][newX] === 3 || maze[newY][newX] === 4 ||
      maze[newY][newX] === 5 || maze[newY][newX] === 6 ||
      maze[newY][newX] === 7) {
    player.x = newX;
    player.y = newY;
    frameUltimoMovimiento = frameCount
  }
  
  if (maze[player.y][player.x] === 3) {
     player.x = 1
     player.y = 1
  }
  
   if (maze[player.y][player.x] === 4) {
     pared = 0;
     maze = crearMaze3();
  }
  
   if (maze[player.y][player.x] === 5) {
     if (player.y == 12, player.x == 2){
       player.x = 10
       player.y = 1
     }
   }
  if (maze[player.y][player.x] === 5) {
     if (player.y == 12, player.x == 8){
       player.x = 10
       player.y = 12
     }
   }
  if (maze[player.y][player.x] === 5) {
     if (player.y == 1, player.x == 8){
       player.x = 1
       player.y = 12
     }
   }
  if (maze[player.y][player.x] === 7) {
     player.x = 1
     player.y = 1
  }
  
  if (maze[player.y][player.x] === 2) {
    level++;
    if(level < mazes.length) {
      maze = mazes[level];  
      player.x = 1
      player.y = 1
    } else {
      background(255);
      fill (0)
      stroke (255)
      strokeWeight(5)
      textSize(100)
      text("Enhorabuena", 75, 300)
      final = true
    }
    
  }
}

function keyPressed() {
  frameUltimoMovimiento = 0;
}

function playerEstaCercaPosicion(x, y) {
  return abs(player.x - x) <= distanciaVision && abs(player.y - y) <= distanciaVision;
}