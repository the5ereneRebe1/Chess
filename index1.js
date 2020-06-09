import Game from './game.js';
import Player from './player.js';

let game = new Game(document);
let player1 = new Player("Himanshu","black");
let player2 = new Player("Minanshu","white");
game.setPlayers(player1,player2);
updateTurn(player1);
game.startGame();


function updateTurn(player){
    const playing = document.getElementById("playing");
    const t = document.createTextNode(''+player.name);
    playing.appendChild(t);
}