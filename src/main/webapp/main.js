
var canvas,
	ctx,
	width,
	height,score;
	

function init(){
	score =0;
	canvas = document.getElementById("canvas");
	
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');

	window.onkeydown = keyLogger.keyDownListener;
	window.onkeyup = keyLogger.keyUpListener;
	
	//Init player
	player.x = width/1.2;
	player.y = height/1.2;
	
	//Main game loop
	
	setInterval(function(){
 
		document.getElementById("PUNTOS").value="Score:" + score;
	updateGame(0.01);
	renderGame();	
		
	},10);
	
}

function updateGame(dt){
var img = new Image();
img.src = "fondo1.jpg";
ctx.drawImage(img,0, 0);
	bullets.update(dt);
	targets.update(dt);
	player.update(dt);
}

function renderGame(){
var img = new Image();
img.src = "fondo1.jpg";
ctx.drawImage(img, 0, 0);
	renderBackground();
	player.render(ctx);
	bullets.render(ctx);
	targets.render(ctx);
}
function renderBackground(){
	
        var img = new Image();
img.src = "fondo1.jpg";
ctx.drawImage(img, 0, 0);
	
}

