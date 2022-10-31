

export class Ball {
    element;
    player1;
    player2
    posX;
    posY;
    speed = 4;
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
        this.move();
        this.checkCollision();

    }

    checkCollision() {
        if (this.player1.posY < this.posY+30 && this.player1.posY+120 > this.posY &&
            this.posX < 50) {
            this.directionX *= -1;
            return;
        }

        if (this.player2.posY < this.posY+30 && this.player2.posY+120 > this.posY &&
            this.posX > 1456) {
            this.directionX *= -1;
            return;
        }
    }

    move() {
        this.posX += this.speed * this.directionX;
        this.element.style.left = this.posX + 'px';
    }
}