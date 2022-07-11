export class Sorter {

 constructor(
     public collection: number[] | string[]){}
     //method
    sort(): void {
     //destructur ing length property array
      const { length } = this.collection;

      // bubble sort cycle
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

               //method collection is for only an array numbers[]
                //instanceOf for any type
                if(this.collection instanceof Array) {
                    //collection === numbers[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        //move number before - Swapping
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                //method for only collection string []
                // use typeof check for string - boolean -symbol ecc
               // if(typeof this.collection === 'string') {
               //     //this.coll
               // }


            }
        }
    }

}


// const sorter = new Sorter([10, 3, -5, 0]);
// sorter.sort();
// console.log(sorter.collection);
