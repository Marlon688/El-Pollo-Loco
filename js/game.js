let canvas;
let world;
let keyboard = new Keyboard();

function init() {
     canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  

  console.log("My Character is", world.character);
}


window.addEventListener("keydown", (e) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  
  if (event.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (event.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (event.keyCode == 32) {
    keyboard.Space = true;
  }

});

window.addEventListener("keyup", (e) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  
  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (event.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (event.keyCode == 32) {
    keyboard.Space = false;
  }
console.log(e);
});