var pelota;

function setup(){
	createCanvas(600,600);
	pelota = new Pelota();
}

function draw(){
	background(0);
	pelota.update();
	pelota.render();
	
}

function Pelota(){
	this.size = 25;
	this.x = random(25, width-25);
	this.y = -25;
	this.speed = 12;

	this.render = function(){
		fill(255);
		ellipse(this.x, this.y, this.size, this.size);
	}

	this.update = function(){
		this.y += this.speed;

	}
}