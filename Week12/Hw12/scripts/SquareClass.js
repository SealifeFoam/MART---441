class Square{

    constructor(xSquare,ySquare,objectHeight,objectWidth, color) 
    {
        this.xSquare = xSquare;
        this.ySquare = ySquare;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;
    }

    get x()
    {
        return this.xSquare;
    }

    set x(value)
    {
        this.xSquare = value;
    }
    get y()
    {
        return this.ySquare;
    }
    set y(value)
    {
        this.ySquare = value;
    }

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    get mainColor()
    {
        return this.color;
    }
}