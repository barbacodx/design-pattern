# Bubble Sort React Component - Typescript Design Pattern

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
</br>Sorter Component in Typescript for React.</br></br>
Example with Collection Numbers</br>
( 5 1 4 2 8 ) –> ( 1 2 4 5 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.


## How to use Sorter Class(example)

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

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## To Do 
 * Inheritance CLASS SORTER *
- Implement abstract method without interface
- Interface used between different classes - Promote loose coupling
- Abstract classes used for similar classes - Strongly couples classes together


