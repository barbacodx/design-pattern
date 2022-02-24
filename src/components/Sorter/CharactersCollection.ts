export class CharactersCollection{
    constructor(public data:string){}

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
     return (
         this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
     );
    }
    //swap string
    swap(leftIndex: number, rightIndex: number): void {
        //get characters
        const characters = this.data.split('');
        //init swap
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        //join characters
        this.data = characters.join('');
    }


}