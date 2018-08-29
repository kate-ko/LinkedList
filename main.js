class LinkedList {
    constructor() {
        this._length = 0
        this.head = null
        this.curr = null
    }

    print() {
        let node = this.head

        while (node != null) {
            console.log(node.data)
            node = node.next
        }
    }

    addToTheEnd(data) {
        let newNode = new Node(data)
        this._length++

        if (this.head == null) {
            this.head = newNode
            this.curr = newNode
        }
        else {
            this.curr.next = newNode
            this.curr = newNode
        }
    }

    addToTheBeginning(data) {
        let newNode = new Node(data)
        this._length++;
        newNode.next = this.head;
        this.head = newNode;
    } 

    removeItemByIndex(index) {
        if (index > (this._length - 1)) {
            console.log("This index doesn't exist")
            return
        }

        this._length--

        // if we have to delete the head
        if (index == 0) {
            this.head = this.head.next
            return
        }

        // traverse through nodes looking for the previous to index-element
        let node = this.head
        for (let i = 0; i < index - 1; i++) {
            node = node.next
        }
        // if we have to delete the last one
        if (index == this._length - 1) {
            node.next = null
        }
        // if we have to delete one in the middle (not the last)
        else {
            node.next = node.next.next 
        } 
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

var list = new LinkedList()
var list2 = new LinkedList()

for (let i = 0; i < 10; i++) {
    list.addToTheEnd(i)
    list2.addToTheBeginning(i)
}

list.print()
list.removeItemByIndex(9)
list.print()
//list2.print()