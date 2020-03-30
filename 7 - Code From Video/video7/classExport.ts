//Generally speaking: One class should be in one file.
//(Yes nested classes are a thing, but that's for later!!!)
export class Square {
    //Properties
    private width: number;
    private height: number;

    //Constructor
    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    //Methods
    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    getArea(): number {
        return this.height * this.width;
    }
};













