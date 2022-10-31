

export class Ball {
    element;
    player1;
    player2
    posX;
    posY;
    speedY = 0;
    defaultSpeedY = 12;
    speedX = 4;
    directionX;
    directionY;

    constructor(player1, player2) {
        this.posX = 700;
        this.posY = 340;
        this.directionX = -1;

        this.player1 = player1;
        this.player2 = player2;


        this.element = document.createElement('div');
        this.element.style.width = '30px';
        this.element.style.height = '30px';
        this.element.style.background = '#000000';
        this.element.style.position = 'absolute'
        this.element.style.left = this.posX + 'px';
        this.element.style.top = this.posY + 'px';
    }

    render() {
        this.checkCollision();
        this.move();
        this.outOfBorderY();

    }

    outOfBorderY() {
        if (this.posY < 1 || this.posY+30 > 753) {
            this.speedY *= -1;
        }
    }

    checkCollision() {
        if (this.player1.posY < this.posY+30 && this.player1.posY+120 > this.posY &&
            this.posX < 50) {
            this.directionX *= -1;

            if (this.player1.accel != 0) {
                this.speedY += Math.trunc(this.defaultSpeedY * (this.player1.accel / 100));
                if (this.speedY > 15) this.speedY = 15;
                console.log('w');
            }

            return;
        }

        if (this.player2.posY < this.posY+30 && this.player2.posY+120 > this.posY &&
            this.posX > 1456) {
            this.directionX *= -1;

            if (this.player2.accel != 0) {
                this.speedY += Math.trunc(this.defaultSpeedY * (this.player2.accel / 100));
                if (this.speedY > 15) this.speedY = 15;
                console.log('w');
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
}