import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();

// append & prepend

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("dog");
list.prepend("rabbit");

console.log("List: ", list.toString());

// head & tail

console.log("Head: ", list.head());
console.log("Tail: ", list.tail());

// size

console.log("List size: ", list.size());

// at

console.log("Index 0: ", list.at(0));
console.log("Index 6: ", list.at(6));

// pop

list.pop();
console.log("List (popped): ", list.toString());

// contains

console.log("Contains 'rabbit'? ", list.contains("rabbit"));
console.log("Contains 'turtle'? ", list.contains("turtle"));

// find

console.log("Index of 'rabbit': ", list.find("rabbit"));
console.log("Index of 'hamster': ", list.find("hamster"));

// insertAt

list.insertAt("ferret", 3);
console.log("Insert 'ferret' at index 3: ", list.toString());

// removeAt

list.removeAt(4);
console.log("Remove node at index 4: ", list.toString());
