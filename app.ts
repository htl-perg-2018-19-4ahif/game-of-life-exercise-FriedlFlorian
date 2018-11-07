window.onload = () => {
  const boardSize = 800;
  const pixelSize = 4;
  const population = 0.3;
  let count = 0; 

  
  // Get reference to canvas
  const canvas = <HTMLCanvasElement>document.getElementById('canvas');
  canvas.width = canvas.height = boardSize;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';

  // Call 'draw' function whenever browser renders a frame on the screen
  window.requestAnimationFrame(draw);

  const generateBoard = (boardSize: number, population: number) => {
    return new Array(boardSize).fill(false).map(() => new Array(boardSize).fill(false).map(() => Math.random() < population));
  };
  

  function draw() {
    // Demo code showing how to draw in the canvas
    ctx.clearRect(0, 0, boardSize, boardSize);
    ctx.fillRect(10, 10, 30, 30);

    

    for(let i = 0; i< generateBoard.length; i++){
      for(let j = 0; j< generateBoard.length; j++){
        for(let x = i-1; x<= i+1; x++){
          for(let y = j-1; y<= j+1; y++){
            if(generateBoard[i][j] = true && x != i && y != j){
              count++;
            }
          }
        }
        generateBoard[i][j] = false;
        if(count >= 2 && count <= 3){
          generateBoard[i][j] = true;
        }
      }
    }

    window.requestAnimationFrame(draw);
  }
};