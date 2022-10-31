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
    renderUpdater;
    message;

    constructor() {
        this.player1 = new Player1();
        this.player2 = new Player2();
        this.ball = new Ball(this.player1, this.player2);
        this.frame = document.getElementsByClassName('frame')[0];
        this.message = document.createElement('div');
        this.message.innerHTML = 'PRESS SPACE TO START';
        this.message.style.top = '50%'
        this.message.style.left = '50%'
        this.message.style.position = 'absolute';
        this.message.style.fontFamily = 'Roboto';
        this.message.style.fontSize = '32px';
        this.message.style.transform = 'translate(-50%, -50%)';
        this.frame.appendChild(this.message);
    }

    showMessage() {
        this.message.hidden = false;
    }

    hideMessage() {
        this.message.hidden = true;
    }

    stopRound() {
       clearInterval(this.renderUpdater);
       this.ball.element.style.background = 'transparent';
       this.showMessage();
    }

    start() {
        this.renderUpdater = setInterval(this.render.bind(this), 10);
        this.ball.element.style.background = '#000';
        this.hideMessage();
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
    }

}

export let game = new Game();

export let player1 = game.player1;
export let player2 = game.player2;
export let ball = game.ball;