const canvas = document.getElementById('myCanvas');
const ctx = canvas.getcontext('2d'); 
const CANVAS_WIDTH = canvas.width = 500; 
const CANVAS_HEIGHT = canvas.height = 400;

const playImage = new Image();
playerImage.src = 'SpirteSheet.png';

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(50, 50, 100, 100);
    requestAnimationFrame(animate);
};

animate();
