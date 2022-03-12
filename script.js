/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"



// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const patternLength = 8;
const maxPatternValue = 8;


//Global variables
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // only have values between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 2000; //how long to hold each clue's light/sound
var pattern = new Array(patternLength); 
var numOfStrikes;



function startGame(){
  //initalize game variables
  generatePattern();
  progress = 0;
  numOfStrikes = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  
}


function stopGame() {
  
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  
}



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 350.5,
  6: 240.42,
  7: 205.46,
  8: 528.0
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
  playMyAudio()
  
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  pauseMyAudio()


}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    //playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
  //  if (clueHoldTime > 100){
  //    clueHoldTime -= 50;
  //    delay += clueHoldTime;      speeds up the clue playback each time, until it hits a constant rate 
  //    delay += cluePauseTime;
  //    console.log(clueHoldTime);
  //  }
    //else{
    console.log(clueHoldTime);
    delay += clueHoldTime;
    delay += cluePauseTime;
    //}

  }
}


function loseGame(){
  stopGame();
  clueHoldTime = 1000;
  alert("That's three strikes! Game Over :( Try again!");
}


function winGame(){
  stopGame();
  clueHoldTime = 1000;
  alert("Game Over. Congratulations, You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    numOfStrikes += 1;
    if (numOfStrikes == 1){
      alert("Incorrect, try again! That's strike: " + numOfStrikes + "! Be careful!");  
    }
    else if (numOfStrikes == 2) {
      alert("Incorrect, try again! That's strike: " + numOfStrikes + "! One more strike and it's over!");

    }
    else if (numOfStrikes == 3){
      loseGame();
    }
      
  }  
  
}


function generatePattern() {
  Math.floor(Math.random() * maxPatternValue);
  for(let i=0;i<=patternLength;i++){ 
    const RNG = Math.floor(Math.random() * maxPatternValue);
    if(RNG != 0) {
      pattern[i] = RNG;
    } 
    else {
      pattern[i] = 1;
    }
      
  }
  console.log(pattern);
}



function playMyAudio(){
  document.getElementById("NeverGonna").play();
}

function pauseMyAudio(){
  document.getElementById("NeverGonna").pause();
}