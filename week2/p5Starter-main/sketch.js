let chartWidth = 400;
let chartHeight = 400;
let data = [345, 123, 120, 45, 50, 4]
let margin = 20;
let spacing = 30;
let remaningSpace = chartWidth - (margin * 2) - (spacing * data.length - 1);
let barWidth = remaningSpace / data.length;
let barcount;



function setup() {

    createCanvas(500, 500);
    background(255);
}

function draw() {

    background(100);

    translate(50, 450);
    stroke(0);
    strokeWeight(3);
    // lines
    //x axis
    line(0, 0, 0, -400);
    //y axis
    line(0, 0, 400, 0);

    //moves rectangles
    translate(30, 0)
    //rectangle graph loop
    for (let i = 0; i < 7; i++) {
        noStroke();
        fill(0, 200, 150);
        rect(i * (barWidth + spacing), 0, barWidth, -data[i]);

    }

}