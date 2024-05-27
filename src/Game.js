function drawBoard() {
    let gameRules = "Game Rules:\n\n" +
                    "1. Navigate the game board from the yellow to green.\n" +
                    "2. Avoid the obstacles on the board.\n" +
                    "3. Click 'Start' to begin the game and start the timer.\n" +
                    "4. Try to reach the end in the shortest time possible!";
  
    if (confirm(gameRules)) {
      startGame();
    }
  }
  

function startGame() {
    let pictureTriangles = [
      
        //End
      { positions: [-1, 1, -1, 0.7, -0.7, 1], color: [0.4, 0.7, 0.3, 1.0]},
      { positions: [-0.7, 0.7, -1, 0.7, -0.7, 1], color: [0.4, 0.7, 0.3, 1.0]},
        //Start
      { positions: [-1, -1, -1, -0.7, -0.7, -1], color: [1, 0.7, 0.3, 1.0]},
      { positions: [-0.7, -0.7, -1, -0.7, -0.7, -1], color: [1, 0.7, 0.3, 1.0]},
      //Obsticles
      { positions: [-0.7, -1, -0.5, -1, -0.8, 0.2], color: [0.4, 0.4, 0.7, 1.0]},

      { positions: [-1, 0.5, -0.6, 0.5, -0.3, 0.2], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [-0.3, -0.7, -0.6, 0.5, -0.3, 0.2], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [-0.3, -0.7, 0.7, -0.8, 0.7, -0.5], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [1, -0.3, 1, -0.2, 0.0, -0.2], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [-0.1, -0.3, -0.1, -0.5, 0.0, -0.2], color: [0.4, 0.4, 0.7, 1.0]},

      { positions: [0.2, 0.8, 0.4, 0.6, 0.6, 0.8], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [0.6, 0.8, 0.8, 0.6, 0.8, 0.8], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [0.4, 0.6, 0.6, 0.4, 0.8, 0.6], color: [0.4, 0.4, 0.7, 1.0]},

      { positions: [-0.5, 0.4, 0.2, 0.8, 0.6, 0.4], color: [0.4, 0.4, 0.7, 1.0]},

      { positions: [0.6, 0.2, 0.8, 0.0, 0.8, 0.2], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [0.2, 0.2, 0.4, 0.0, 0.6, 0.2], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [0.4, 0.0, 0.6, -0.2, 0.8, 0.0], color: [0.4, 0.4, 0.7, 1.0]},
      { positions: [0.2, -0.2, 0.4, -0.4, 0.6, -0.2], color: [0.4, 0.4, 0.7, 1.0]},  
      { positions: [-0.3, -0.1, -0.3, 0.2, 0.2, 0.0], color: [0.4, 0.4, 0.7, 1.0]},  
    

      
    ];
    
    
    g_shapesList = [];
    
    for (let i = 0; i < pictureTriangles.length; i++) {
      let tri = new TriangleDraw();
      tri.positions = pictureTriangles[i].positions;
      tri.color = pictureTriangles[i].color;
      tri.size = pictureTriangles[i].size;
      g_shapesList.push(tri);
    }
    
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = null;
    gameStarted = true;

    renderAllShapes();
  }

  function gameClick(ev, x, y) {
    if (isInStartBox(x, y) && !timerInterval) {
      startTime = new Date().getTime();
      timerInterval = setInterval(updateTimer, 1000);
    }
  
    
    if (isInEndBox(x, y)) {
      clearInterval(timerInterval);
      let elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
      endPopUp(elapsedTime);
      timerInterval = null;
      gameStarted = false; 
    }

    if (isInsideObstacle(x, y)) {
        clearInterval(timerInterval);
        alert("Game Over! You hit an obstacle.");
        timerInterval = null;
        gameStarted = false; 
      }
  
    
  }







  function startTimer() {//I had ChatGPT help me with the timer
    let startTime = new Date().getTime();
  
    let timerInterval = setInterval(function() {
      let currentTime = new Date().getTime();
      let elapsedTime = Math.floor((currentTime - startTime) / 1000);
      document.getElementById("timer").innerHTML = "Time: " + elapsedTime + " seconds";
    }, 1000);
  }

  function isInStartBox(x, y) {
    return x >= -1 && x <= -0.7 && y >= -1 && y <= -0.7;
  }
  
  function isInEndBox(x, y) {
    return x >= -1 && x <= -0.7 && y >= 0.7 && y <= 1;
  }
  
  function updateTimer() {
    let currentTime = new Date().getTime();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000);
    document.getElementById("timer").innerHTML = "Time: " + elapsedTime + " seconds";
  }

  function endPopUp(elapsedTime) {
    let message = "Congratulations! You reached the end!\n\n" +
      "Your time: " + elapsedTime + " seconds";
    alert(message);
  }

  function isInsideObstacle(x, y) {
    for (let i = 4; i < 19; i++) {
      let triangle = g_shapesList[i];
      let positions = triangle.positions;
  
      if (isPointInsideTriangle(x, y, positions[0], positions[1], positions[2], positions[3], positions[4], positions[5])) {
        return true;
      }
    }
    return false;
  }
  
  function isPointInsideTriangle(x, y, x1, y1, x2, y2, x3, y3) {//I got this function from ChatGPT but I had to tweak it to actually work
    let area = 0.5 * (-y2 * x3 + y1 * (-x2 + x3) + x1 * (y2 - y3) + x2 * y3);
    let s = 1 / (2 * area) * (y1 * x3 - x1 * y3 + (y3 - y1) * x + (x1 - x3) * y);
    let t = 1 / (2 * area) * (x1 * y2 - y1 * x2 + (y1 - y2) * x + (x2 - x1) * y);
  
    return s > 0 && t > 0 && (s + t) < 1;
  }