import { Player } from "./Player.js";

export class Game {
    player1;
    player2;
    frame;

    constructor() {
        this.player1 = new Player();
        this.frame = document.getElementsByClassName('frame')[0];
    }

    render() {
        document.addEventListener('keydown', function(e) {
            console.log(e.key);
        });
    }

    run() {
        this.frame.appendChild(this.player1.element);

        let renderUpdater = setInterval(this.render(), 50);
    }
}