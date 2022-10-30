import { KeyListener } from "./KeyListener.js";
import { Player1 } from "./Player1.js";
import { Player2 } from "./Player2.js";

export class Game {
    instance
    player1;
    player2;
    frame;
    keyListener = new KeyListener();

    constructor() {
        this.player1 = new Player1();
        this.player2 = new Player2();
        this.frame = document.getElementsByClassName('frame')[0];
    }

    render() {
        this.keyListener.render();
    }

    run() {
        this.frame.appendChild(this.player1.element);
        this.frame.appendChild(this.player2.element);
        this.keyListener.listen();
        let renderUpdater = setInterval(this.render.bind(this), 10);
    }
}

let instance = new Game();
export let player1 = instance.player1;
export let player2 = instance.player2;

export function getGameInstance() {
    return instance;
}