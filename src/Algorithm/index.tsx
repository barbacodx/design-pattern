import React from 'react';
import { Sorter } from './Sorter';



const Algorithme = (props: any) => {

     const sorter = new Sorter([10, 3, -5, 0]);
     sorter.sort();
     console.log(sorter.collection);

    return (
        <h3>Algorithme component Numbers: { sorter.collection }</h3>
    );
}

export default Algorithme;