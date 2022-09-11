import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

/* This is for  sorting Array */
const numbersCollection = new NumberCollection([10, -6, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

/* This is for  sorting String */
const charactersCollection = new CharactersCollection("axXaxaaa");
charactersCollection.sort();
console.log(charactersCollection.data);

/* This is for  sorting LinkedList */
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-30);
linkedList.add(50);

linkedList.sort();

linkedList.print();