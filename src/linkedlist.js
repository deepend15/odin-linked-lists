class LinkedList {
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
    let response = false;
    if (!list.value) {
      return response;
    } else {
      for (let currentNode = this; ; currentNode = currentNode.nextNode) {
        if (currentNode.value === value) {
          response = true;
          break;
        }
        if (currentNode.nextNode === null) {
          break;
        }
      }
      return response;
    }
  }
}

const list = new LinkedList();
list.append(1);