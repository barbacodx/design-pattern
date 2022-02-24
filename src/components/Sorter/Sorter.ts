//Sorter Refactor
interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

//collection type NumbersCollection
export class Sorter {
    constructor(public collection: Sortable){}
    //method
    sort(): void {
        //destructuring length property array
        const { length } = this.collection;
        // bubble sort cycle
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //compare arrays
                if (this.collection.compare(j, j + 1)) {
                    //move number before - Swapping
                    this.collection.swap(j, j + 1);
                }
            }//end for 2
        }//end for 1
    }
}

/*TO DO ABSTRACT - Inheritance CLASS SORTER */
//Implement abstract method without interface
//Interface used between different classes - Promote loose coupling
//Abstract classes used for similar classes - Strongly couples classes together