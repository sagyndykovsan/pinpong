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
    stats;
    resetBtn;

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

        this.stats = document.createElement('div');
        this.stats.innerHTML = '0 : 0';
        this.stats.style.top = '30px'
        this.stats.style.left = '50%'
        this.stats.style.position = 'absolute';
        this.stats.style.fontFamily = 'Roboto';
        this.stats.style.transform = 'translate(-50%, 0)';
        this.stats.style.fontSize = '100px';
        this.frame.appendChild(this.stats);

        this.resetBtn = document.createElement('div');
        this.resetBtn.innerHTML = 'RESET';
        this.resetBtn.style.top = '150px'
        this.resetBtn.style.cursor = 'pointer';
        this.resetBtn.style.left = '50%'
        this.resetBtn.style.position = 'absolute';
        this.resetBtn.style.fontFamily = 'Roboto';
        this.resetBtn.style.transform = 'translate(-50%, 0)';
        this.resetBtn.style.fontSize = '24px';
        this.resetBtn.addEventListener('click', this.resetStats.bind(this));
        this.frame.appendChild(this.resetBtn);
    }

    showGui() {
        this.message.hidden = false;
        this.stats.hidden = false;
        this.resetBtn.hidden = false;
    }

    hideGui() {
        this.message.hidden = true;
        this.stats.hidden = true;
        this.resetBtn.hidden = true;
    }

    updateStats() {
        this.stats.innerHTML = `${this.player1.points} : ${this.player2.points}`;
    }

    resetStats() {
        this.player1.points = 0;
        this.player2.points = 0;
        this.stats.innerHTML = `${this.player1.points} : ${this.player2.points}`;
    }

    stopRound() {
       clearInterval(this.renderUpdater);
       this.ball.element.style.background = 'transparent';
       this.showGui();
       this.updateStats();
    }

    start() {
        this.renderUpdater = setInterval(this.render.bind(this), 10);
        this.ball.element.style.background = '#000';
        this.hideGui();
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