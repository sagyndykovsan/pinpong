export class Player2 {
    element;
    posX;
    posY;
    accel = 0;
    points = 0;

    constructor() {
        this.posX = 20;
        this.posY = 300;

        this.element = document.createElement('div');
        this.element.style.width = '30px';
        this.element.style.height = '120px';
        this.element.style.background = '#000000';
        this.element.style.position = 'absolute'
        this.element.style.right = this.posX + 'px';
        this.element.style.top = this.posY + 'px';
    }

    isOutOfBorder() {
        if (this.posY > 750 - 120) {
            this.posY = 750 - 120;
            this.element.style.top = this.posY + 'px';
            return true;
        }

        if (this.posY < 1) {
            this.posY = 1;
            this.element.style.top = this.posY + 'px';
            return true;
        }

        return false;
    }

    moveUp() {
        if (this.isOutOfBorder()) return;
        
        this.posY -= 7;
        this.element.style.top = this.posY + 'px';
    }

    moveDown() {
        if (this.isOutOfBorder()) return;

        this.posY += 7;
        this.element.style.top = this.posY + 'px';
    }

    increaseAccel() {
        if (this.accel < 100) {
            this.accel += 3
        }
    }

    decreaseAccel() {
        if (this.accel > -100) {
            this.accel -= 3
        }
    }

    resetAccel() {
        this.accel = 0;
    }
}