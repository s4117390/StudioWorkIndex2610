// find elements to use
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");

// intro dialog setup
introDialog.showModal();

dialogCloseButton.addEventListener("click", closeDialog);

function closeDialog() {
    introDialog.close();
    Tone.start();
}

// tone synth init
const synth = new Tone.AMSynth({
    envelope: {
        attack: 0.05,
        decay: 0.1,
        sustain: 0.6,
        release: 0.8
    }
}).toDestination();

// list of notes
const notes = ["C4", "D4", "E4", "G4", "A4"];
let currentNote = "C4";

// choose a random note when button is pressed
function startNote() {
    currentNote = notes[Math.floor(Math.random() * notes.length)];
    synth.triggerAttack(currentNote);
    playButton.classList.add("active");
}

function endNote() {
    synth.triggerRelease();
    playButton.classList.remove("active");
}

// I used a dialog first because sound interaction needs user permission in the browser.
// I chose a press-and-hold interaction to make the sound feel more physical and direct.
// Random notes make the experience more playful and less predictable.
playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
playButton.addEventListener("mouseleave", endNote);