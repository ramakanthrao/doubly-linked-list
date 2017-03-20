const Node = require('./node');

class LinkedList {
    constructor() {
		this._head = null;
		this._tail = null;
		this.length = 0;
	}

    append(data) {
		var temp = new Node(data);
		if(this.length === 0){
			this._tail = temp;
			this._head = temp;
		}else{
			this._tail.next = temp;
			temp.prev = this._tail;
			this._tail = temp;			
		}
		this.length++;
		return this;
	}
    head() {
		if(this._head !== null){
			return this._head.data;	
		}else{
			return null;
		}
	}

    tail() {
		if(this._tail !== null){
			return this._tail.data;	
		}else{
			return null;
		}
	}

    at(index) {
		if (index >= 0 && index < this.length) {
			if(index == 0){
				return this.head();
			}else if(index === this.length){
				return this.tail();
			}else{
				var temp = this._head;
				while (index--) {
					temp = temp.next;
				}
			return temp.data;
			}			
		}
	}

    insertAt(index, data) {
		var newNode = new Node(data);
		var temp = this._head;
		if(temp === null){
			this._head = newNode;
		}else{
			while (index--) {
				temp = temp.next;
			}
			newNode.next = temp;
			newNode.prev = temp.prev;
			temp.prev = newNode;			
		}
		this.length++;
		return this;			
	}

    isEmpty() {
		return this.length === 0;
	}

    clear() {
		this._head = null;
		this._tail = null;
		this.length = 0;
		return this;		
	}

    deleteAt(index) {
		if(index === 0){
			this._head = this._head.next;
		}else{
			var temp = null;
			while (index--) {
				temp = this._head.next;
			}
			temp.prev.next = temp.next;
			temp.next.prev = temp.prev;
		}
		this.length -= 1;
		return this;		
	}

    reverse() {
	   var current = this._tail;
	   var list = new LinkedList();

	   while(current){
			list.append(current.data);
			current = current.prev;
	   }
	   this._tail = list._tail;
	   this._head = list._head;
	   this.length = list.length;
	   return this;
	}

    indexOf(data) {
		var index = 0;
		var temp  = this._head;
		if(temp.data === data){
			return 0;
		}
		while(temp!= null && temp.data !== data){
			temp = temp.next;
			index ++;
		}
		if(temp === null){
			return -1;
		}		
		return index;
	}
}

module.exports = LinkedList;
