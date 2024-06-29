x = 0;
y = 0;

screen_Width = 0;
screen_Height = 0;
apple = 0;
speak_data = "";
to_number = Number(content);

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "apples_drawn";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    if(Number.isImteger(to_number)){
      draw_apple = "set";
  else{
   text("The speech has not recognized a number ");
  }
    }
}

function setup() {
  screen_Width = window.innerWidth;
screen_Height = window.innerHeight;
 createCanvas(screen_Width, screen_Height-150);
 canvas.position(0, 150);
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  if(draw_apple == "set"){
    for (let i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 700);
          y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
   }
   document.getElementById("status").inerHTML = "apples_drawn";
   speak()
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
 loadImage = (apple);
}

