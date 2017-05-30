var player = new Player();

function Player(){
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.v = 0;
	this.angle = 0;
	this.lastShootTime = 0;
	
	
	this.stats = {maxV:100,dAngle:0.03,acc:10,shootDelayMs:500};
	
	this.update = function(dt){
		
		if(keyLogger.keyStatus.left){

			this.angle -= this.stats.dAngle;
			if(this.angle < 0){
				this.angle += 2*Math.PI;}
		}
		if(keyLogger.keyStatus.right){

			this.angle += this.stats.dAngle;
			if(this.angle > 2*Math.PI){
				this.angle -= 2*Math.PI;}
		}
		
		
		
		this.vx = this.v * Math.cos(this.angle);
		this.vy = this.v * Math.sin(this.angle);
		
		this.x += this.vx * dt;
		this.y += this.vy * dt;
		
		var time = utils.getTime();
		if(keyLogger.keyStatus.fire &&
			time - this.lastShootTime >= this.stats.shootDelayMs){

			bullets.push({
				x:this.x,
				y:this.y,
				angle:this.angle,
				v:250
			});
			this.lastShootTime = time;
		}
		
	};
	
	this.render = function(ctx){
		ctx.fillStyle="#FF0000";
		ctx.beginPath();
		ctx.arc(this.x,this.y,10,0,6.28);
		ctx.fill();
	
		ctx.strokeStyle="#FF0000";
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		var pointerLength = 25;
		ctx.lineTo(
			this.x + pointerLength * Math.cos(this.angle),
			this.y + pointerLength * Math.sin(this.angle)
			);
		ctx.stroke();
	};
	
}