var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
};

var Colour_List = [
    '#FF6F61',
    '#34568B',
    '#88B04B',
    '#F7CAC9',
];

window.addEventListener('mousedown',
    function (event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
)

window.addEventListener('resize', function (event){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

window.addEventListener('mousedown', function (event){
    click();
    init();
})

function Circle(x,y,radius, colour, amplitude, period) {

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.colour = colour;
    this.amplitude = amplitude;
    this.period = period;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.colour;
        c.fill();
    }

    this.update = function (){
        // this.x += 3;
        // this.y = (Math.sin((this.x * this.period* Math.PI)/180) * this.amplitude) + 400;
        this.draw();

    }

}

// var circle = new Circle(200, 300, 30,5)

// let pen = new Circle(200,400, 5, 'black',80,1);
var All_Circles = [];
let x = 200;
let y = 400;
let speed = 1;
let radius = 3;
let amplitude = 80;
let period = 1;
let colour = 'black';
let index = 0;
let endIndex = 500;

function click() {
    index += 1;
}

function init() {

    All_Circles = [];
    for (let i = 0; i<index; i++) {
        All_Circles.push()
        x += speed;
        y = (Math.sin((x * period* Math.PI)/180) * amplitude) + 400;
        All_Circles.push(new Circle(x,y,radius,colour,amplitude,period));
    }
}

function animate(){
    requestAnimationFrame(animate)
    // c.clearRect(0,0,innerWidth,innerHeight)
    for (let i = 0; i < All_Circles.length; i++) {
        All_Circles[i].update();
        All_Circles[i].draw();
    }
    // pen.update();
    // pen.draw();
}

click();
init();
animate();

