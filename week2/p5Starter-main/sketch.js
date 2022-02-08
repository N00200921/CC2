const chartWidth = 400;
const chartHeight = 300;
let data = [1200, 123, 120, 45, 50, 4];
const margin = 20;
const spacing = 15;
let remaningSpace = chartWidth - (margin * 2) - (spacing * data.length - 1);
let barWidth = remaningSpace / data.length;
let tickNum = 10;
let tickLength = 10;
let tickSpace = chartHeight / tickNum;
let tickIncriment = chartHeight/tickNum;
let colors;
let maxValue;
let scaledData = []



function setup() {

    createCanvas(500, 500);
    background(255);
    colors = [color('black'), color('pink'), color('blue')];

maxValue = max(data);
for (let i =0; i<data.length; i++){
    let newValue = map(data[i],0,maxValue,0,chartHeight)
    scaledData.push(newValue)
}
console.log(data);
console.log(scaledData);



}

function draw() {
    background(100);





    textSize(40);
    textAlign(RIGHT, TOP)
    text("LI", 100, 0);
    translate(50, 450);

    stroke(0);
    strokeWeight(3);
    // lines
    //x axis
    line(0, 0, 0, -chartHeight);
    //y axis
    line(0, 0, chartWidth, 0);

    for (let i = 0; i <= tickNum; i++) {
        stroke(0)
        strokeWeight(1);
        line(0, -tickSpace * i, -tickLength, -tickSpace * i);

        noStroke()
        fill(0)
        textSize(10);
        text(tickSpace * i, -10, -1 * tickSpace * i)
    }


    //moves rectangles
    translate(margin, 0)

    //rectangle graph loop
    for (let i = 0; i < 7; i++) {
        noStroke();
        fill(colors[i % 3]);
        rect(i * (barWidth + spacing), 0, barWidth, -scaledData[i]);

    }







}