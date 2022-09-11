"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
/* This is for  sorting Array */
const numbersCollection = new NumberCollection_1.NumberCollection([10, -6, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
/* This is for  sorting String */
const charactersCollection = new CharactersCollection_1.CharactersCollection("axXaxaaa");
charactersCollection.sort();
console.log(charactersCollection.data);
/* This is for  sorting LinkedList */
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-30);
linkedList.add(50);
linkedList.sort();
linkedList.print();
