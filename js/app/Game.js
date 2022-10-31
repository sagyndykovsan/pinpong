import { KeyListener } from "./KeyListener.js";
import { Ball } from "./Ball.js";
import { Player1 } from "./Player1.js";
import { Player2 } from "./Player2.js";

let instance = null;

export class Game {
    instance
    player1;
    player2;
    ball;
    frame;
    keyListener = new KeyListener();

    constructor() {
        this.player1 = new Player1();
        this.player2 = new Player2();
        this.ball = new Ball(this.player1, this.player2);
        this.frame = document.getElementsByClassName('frame')[0];
    }

    start() {
        
    }

    render() {
        this.keyListener.render();
        this.ball.render();
    }

    run() {
        this.frame.appendChild(this.player1.element);
        this.frame.appendChild(this.player2.element);
        this.frame.appendChild(this.ball.element);
        this.keyListener.listen();
        let renderUpdater = setInterval(this.render.bind(this), 10);
    }

}

export let game = new Game();

export let player1 = game.player1;
export let player2 = game.player2;
export let ball = game.ball;