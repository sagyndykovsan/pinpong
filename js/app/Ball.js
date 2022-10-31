import { game } from "./Game.js";


export class Ball {
    element;
    player1;
    player2
    posX;
    posY;
    defaultPosX = 700;
    defaultPosY = 340;
    speedY = 0;
    defaultSpeedY = 10;
    speedX = 6;
    directionX;
    directionY;
    isBallTouched = false;

    constructor(player1, player2) {
        this.posX = 700;
        this.posY = 340;
        this.directionX = -1;

        this.player1 = player1;
        this.player2 = player2;


        this.element = document.createElement('div');
        this.element.style.width = '30px';
        this.element.style.height = '30px';
        this.element.style.background = 'transparent';
        this.element.style.position = 'absolute'
        this.element.style.left = this.posX + 'px';
        this.element.style.top = this.posY + 'px';
    }

    render() {
        this.checkCollision();
        this.move();
        this.outOfBorderY();
        this.outOfBorderX()
    }

    outOfBorderY() {
        if (this.posY < 1 || this.posY+30 > 753) {
            this.speedY *= -1;
        }
    }

    outOfBorderX() {
        if (this.posX+34 < 0) {
            this.player2.points++;
            this.reset();
            game.stopRound();
        }

        if (this.posX > 1550) {
            this.player1.points++;
            this.reset();
            game.stopRound();
        }
    }




    checkCollision() {

        if (this.player1.posY < this.posY+30 && this.player1.posY+120 > this.posY &&
            this.posX < 50) {

            if (this.isBallTouched == true) {
                return;
            } else {
                this.isBallTouched = true;
                setTimeout((function() {this.isBallTouched = false}).bind(this), 200);
            }

            if (this.posX > 27) {
                this.directionX *= -1;
            }
            

            if (this.player1.accel != 0) {
                this.speedY = Math.trunc(this.defaultSpeedY * (this.player1.accel / 100));
                if (this.speedY > 10) this.speedY = 10;
                if (this.speedY < -10) this.speedY = -10;
            }

            return;
        }

        if (this.player2.posY < this.posY+30 && this.player2.posY+120 > this.posY &&
            this.posX > 1456) {
 
            if (this.isBallTouched == true) {
                return;
            } else {
                this.isBallTouched = true;
                setTimeout((function() {this.isBallTouched = false}).bind(this), 200);
            }

            if (this.posX < 1479) {
                this.directionX *= -1;
            }


            if (this.player2.accel != 0) {
                this.speedY = Math.trunc(this.defaultSpeedY * (this.player2.accel / 100));
                if (this.speedY > 10) this.speedY = 10;
                if (this.speedY < -10) this.speedY = -10;
            }

            return;
        }
    }

    move() {
        this.posX += this.speedX * this.directionX;
        this.element.style.left = this.posX + 'px';

        if (this.speedY != 0) {
            this.posY += this.speedY;
            this.element.style.top = this.posY + 'px';
        }
    }

    reset() {
        this.speedY = 0;
        this.posY = this.defaultPosY;
        this.posX = this.defaultPosX;
        this.element.style.top = this.posY + 'px';
        this.element.style.left = this.posX + 'px';
    }
}