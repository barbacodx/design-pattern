export class NumbersCollection {
    //constructor
    constructor(public data: number[]){}
    //method length
    get length(): number{
        return this.data.length;
    }
    //method compare
    compare(leftIndex: number, rightIndex: number): boolean {
      return this.data[leftIndex] > this.data[rightIndex];
    }
    //method swap
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;

    }
}