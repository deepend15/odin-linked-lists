class LinkedList {
  static Node = class {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  };

  findLastNode(obj) {
    if (obj.nextNode === null) {
      return obj;
    } else {
      return this.findLastNode(obj.nextNode);
    }
  }

  append(value) {
    if (!this.value) {
      this.value = value;
      this.nextNode = null;
    } else {
      let newNode = new LinkedList.Node(value);
      if (this.nextNode === null) {
        this.nextNode = newNode;
      } else {
        const lastNode = this.findLastNode(this.nextNode);
        lastNode.nextNode = newNode;
      }
    }
  }

  prepend(value) {
    let newNode = new LinkedList.Node(this.value, this.nextNode);
    this.value = value;
    this.nextNode = newNode;
  }
}

const list = new LinkedList();
console.log(list);
list.append(1);
console.log(list);
list.append(2);
console.log(list);
console.log(list.nextNode);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
console.log(list.nextNode.nextNode.nextNode.nextNode.nextNode);
list.prepend(0);
console.log(list);
console.log(list.nextNode);
console.log(list.nextNode.nextNode.nextNode.nextNode.nextNode.nextNode);
list.prepend(-1);
list.prepend(-2);
list.prepend(-3);
console.log(list);
console.log(list.nextNode.nextNode.nextNode.nextNode.nextNode);
