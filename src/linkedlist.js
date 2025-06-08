export class LinkedList {
  static Node = class {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  };

  head() {
    if (!this.value) return null;
    else return this;
  }

  tail() {
    if (!this.value) return null;
    else {
      let currentNode = this;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  append(value) {
    if (!this.value) {
      this.value = value;
      this.nextNode = null;
    } else {
      let newNode = new LinkedList.Node(value);
      let tail = this.tail();
      tail.nextNode = newNode;
    }
  }

  prepend(value) {
    if (!this.value) {
      this.value = value;
      this.nextNode = null;
    } else {
      let newNode = new LinkedList.Node(this.value, this.nextNode);
      this.value = value;
      this.nextNode = newNode;
    }
  }

  size() {
    if (!this.value) return 0;
    else {
      let list = this;
      let counter = 1;
      while (list.nextNode !== null) {
        list = list.nextNode;
        counter += 1;
      }
      return counter;
    }
  }

  at(index) {
    if (index < 0 || index > this.size() - 1) {
      return undefined;
    } else {
      let counter = 0;
      let returnedNode;
      for (let currentNode = this; ; currentNode = currentNode.nextNode) {
        if (counter === index) {
          returnedNode = currentNode;
          break;
        } else {
          counter += 1;
        }
      }
      return returnedNode;
    }
  }

  pop() {
    if (!this.value) return;
    else if (this.size() === 1) {
      delete this.value;
      delete this.nextNode;
    } else {
      let penultimateNode = this.at(this.size() - 2);
      penultimateNode.nextNode = null;
    }
  }

  contains(value) {
    if (!this.value) return false;
    else {
      for (let currentNode = this; ; currentNode = currentNode.nextNode) {
        if (currentNode.value === value) return true;
        if (currentNode.nextNode === null) return false;
      }
    }
  }

  find(value) {
    if (!this.value) {
      return null;
    } else {
      let index = 0;
      for (let currentNode = this; ; currentNode = currentNode.nextNode) {
        if (currentNode.value === value) return index;
        if (currentNode.nextNode === null) return null;
        index += 1;
      }
    }
  }

  toString() {
    if (!this.value) {
      return "null";
    } else {
      let arr = [];
      for (let currentNode = this; ; currentNode = currentNode.nextNode) {
        arr.push(currentNode.value.toString());
        if (currentNode.nextNode === null) break;
      }
      let arr2 = arr.map((value) => `( ` + value + ` )`);
      arr2.push("null");
      return arr2.join(" -> ");
    }
  }
}
