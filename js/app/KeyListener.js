import { Game, player1, player2 } from "./Game.js";

export class KeyListener {
    keys;

    constructor() {
        this.keys = [];
    }

    render() {
        // player 1
        if (this.keys.includes('w')) {
            player1.moveUp();
        }

        if (this.keys.includes('q')) {
            player1.moveDown();
        }
        // player 2
        if (this.keys.includes('[')) {
            player2.moveUp();
        }

        if (this.keys.includes(']')) {
            player2.moveDown();
        }
    }

    listen() {
        document.addEventListener('keydown', this.addKey.bind(this));
        document.addEventListener('keyup', this.removeKey.bind(this));
    }

    addKey(e) {
        // player1 keys
        if (e.key == 'w' && !this.keys.includes('w')) {
            let keyPos = this.keys.indexOf('q');
            if (keyPos != -1) this.keys.splice(keyPos, 1);
            this.keys.push('w');
        }

        if (e.key == 'q' && !this.keys.includes('q')) {
            let keyPos = this.keys.indexOf('w');
            if (keyPos != -1) this.keys.splice(keyPos, 1);
            this.keys.push('q');
        }

        // player 2 keys
        if (e.key == '[' && !this.keys.includes('[')) {
            let keyPos = this.keys.indexOf(']');
            if (keyPos != -1) this.keys.splice(keyPos, 1);
            this.keys.push('[');        }

        if (e.key == ']' && !this.keys.includes(']')) {
            let keyPos = this.keys.indexOf('[');
            if (keyPos != -1) this.keys.splice(keyPos, 1);
            this.keys.push(']');        }
    }

    removeKey(e) {

        // player 1 keys
        
        if (e.key == 'w') {
            let keyPos = this.keys.indexOf(e.key);
            if (keyPos != -1) this.keys.splice(keyPos, 1);
        }

        if (e.key == 'q') {
            let keyPos = this.keys.indexOf(e.key);
            if (keyPos != -1) this.keys.splice(keyPos, 1);
        }

        // player 2 keys

        if (e.key == '[') {
            let keyPos = this.keys.indexOf(e.key);
            if (keyPos != -1) this.keys.splice(keyPos, 1);
        }

        if (e.key == ']') {
            let keyPos = this.keys.indexOf(e.key);
            if (keyPos != -1) this.keys.splice(keyPos, 1);
        }
    }

}