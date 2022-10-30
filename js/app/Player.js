export class Player {
    element;
    posX;
    posY;

    constructor() {
        this.posX = 20;
        this.posY = 300;

        this.element = document.createElement('div');
        this.element.style.width = '30px';
        this.element.style.height = '120px';
        this.element.style.background = '#000000';
        this.element.style.position = 'absolute'
        this.element.style.left = this.posX + 'px';
        this.element.style.top = this.posY + 'px';
    }
}