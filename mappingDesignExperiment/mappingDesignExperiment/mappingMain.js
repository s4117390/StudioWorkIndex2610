//// FIND ELEMENTS
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");
const changeRed = document.getElementById("change-red");
const changeCornflower = document.getElementById("change-cornflower");
const changeGreenyellow = document.getElementById("change-greenyellow");

//// INIT VARIABLES
let stageWidth = stageContainer.offsetWidth;
let stageHeight = stageContainer.scrollHeight;

//// KONVA SETUP

// first create stage
const stage = new Konva.Stage({
    container: "konva-stage",
    width: stageWidth,
    height: stageHeight
});

// then first layer
const baseLayer = new Konva.Layer();

//drawCircle();

// add layer to stage
stage.add(baseLayer);

//// DRAWING FUNCTION

let circleColour = "#FF00C1";

function drawCircle(){
    // create circle
    let initCircle = new Konva.Circle({
        x: stageWidth * Math.random(),
        y: stageHeight * Math.random(),
        radius: 50 * Math.random(),
        fill: circleColour
    });

    // add circle to layer
    baseLayer.add(initCircle);
}

circleButton.addEventListener("click", drawCircle);

//changing our circle colour
//I chose radio buttons because they for a exclusive selection, making sure user choice.
//limited but certain, A constricted amount of user choice leads to a tighter colour palette.
//to change my colour, I need to find the value of the input clicked, and then update the circle const.

function changeColourRadio(clickEvent){
    //find the value of whichever of the radio buttons was clicked
    let newColour = clickEvent.target.value
    //set the new circle colour to theat colour
    circleColour = newColour
}

//add eventListeners
changeRed.addEventListener("change", changeColourRadio);
changeCornflower.addEventListener("change", changeColourRadio);
changeGreenyellow.addEventListener("change", changeColourRadio);