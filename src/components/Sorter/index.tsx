import React from 'react';
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection} from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const SorterC = () => {
    //numbers Collection
    const numberCollection = new NumbersCollection([9, 3, -5, 0]);
    const sorter = new Sorter(numberCollection);
    sorter.sort();
    console.log(numberCollection.data);

    //characters Collection
    const charactersCollection = new CharactersCollection('Riccardo');
    const charactersSorter = new Sorter(charactersCollection);
    charactersSorter.sort();
    console.log(charactersCollection.data);

    //linkedList collection
    const linkedList = new LinkedList();
    linkedList.add(500);
    linkedList.add(-20);
    linkedList.add(300);
    linkedList.add(3);
    const sorterLinked = new Sorter(linkedList);
    sorterLinked.sort();
    linkedList.print();


    return (
        <div>
            <h3>Sorter Numbers Collection : { numberCollection.data} </h3>
            <h3>Sorter Characters Collection : { charactersCollection.data} </h3>
        </div>



    );
}

export default SorterC;
