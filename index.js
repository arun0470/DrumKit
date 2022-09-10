// document.querySelector(".set").addEventListener("click",function (){alert("i got clicked");});

for(var i=0;i<document.querySelectorAll(".drum").length;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var innerhtml = this.innerHTML;
    makeSound(innerhtml);
    buttonAnimation(innerhtml);})
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);}
);


function makeSound(eventkey){
  switch (eventkey) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "l":
    var kickbass = new Audio("sounds/kick-bass.mp3");
    kickbass.play();
    break;
    default:alert("are puka kallu dengginiya kanapaduthunna letters nokku 😅😅😅");

  }
}

function buttonAnimation(currentKey){
  var targetEle = "."+currentKey;
  document.querySelector(targetEle).classList.add("pressed");
  setTimeout(function (){document.querySelector(targetEle).classList.remove("pressed");},100);
}

