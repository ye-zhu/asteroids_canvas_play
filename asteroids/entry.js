const Game = require('./game.js')
const Images = require('./images.js')

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.font = "18px monospace";
context.fillStyle = "#32CD32";
context.strokeStyle = "#ffffff";
canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight; //document.height is obsolete


let startGame = function () {
    new Game({
    context:context
  })
}

Images.loadImages(startGame)
context.fillText("LOADING...", canvas.width/2 - 50, canvas.height/2);
