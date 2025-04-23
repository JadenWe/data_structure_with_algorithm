class DoubleLinkedList<T>{
    private head: DoubleLinkedListNode<T>
    private tail: DoubleLinkedListNode<T>;
    private size: number;

    constructor() {
        this.size = 0;
        this.head = new DoubleLinkedListNode<T>(null as T);
        this.tail = new DoubleLinkedListNode<T>(null as T);
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }
    
    public add(data: T): void {
        const last = this.tail.previous!;
        const node = new DoubleLinkedListNode(data, last, this.tail);
        
        last.next = node;
        this.tail.previous = node;
        this.size++;
    }

    public insert(index: number, data: T): void {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }

        let previous: DoubleLinkedListNode<T> | null = null;
        let current: DoubleLinkedListNode<T> | null = null;
        let counter = 0;

        if (index < this.size / 2) {
            previous = this.head;
            current = this.head.next;

            while (counter++ < index) {
                previous = previous!.next;
                current = current!.next;
            }
        } else {
            previous = this.tail.previous;
            current = this.tail;

            while(counter++ < (this.size - index)) {
                previous = previous!.previous;
                current = current!.previous;
            }
        }

        const node = new DoubleLinkedListNode(data, previous, current);

        previous!.next = node;
        current!.previous = node;
        this.size++;
    }

    public clear() {
        let current = this.head.next;

        while (current !== this.tail) {
            const next = current!.next;
            current!.previous = null;
            current!.next = null;
            current = next;
        }
        
        this.head.next = this.tail;
        this.tail.previous = this.head;
        this.size = 0;
    }

    public delete(data: T): boolean {
        let current = this.head.next;

        while (current !== this.tail) {
            if (current!.data === data) {
                const prev = current!.previous;
                const next = current!.next;
                
                prev!.next = next;
                next!.previous = prev;
                this.size--;
                return true;
            }
            current = current!.next;
        }

        return false;
    }

    public deleteByIndex(index: number): boolean {
        if (index < 0 || index >= this.size) {
            throw new Error(`Index ${index} is out of bounds. Size is ${this.size - 1}`);
        }
    
        let current: DoubleLinkedListNode<T>;
        if (index < this.size / 2) {
            current = this.head.next!;
            for (let i = 0; i < index; i++) {
                current = current.next!;
            }
        } else {
            current = this.tail.previous!;
            for (let i = this.size - 1; i > index; i--) {
                current = current.previous!;
            }
        }
    
        const previous = current.previous!;
        const next = current.next!;
        
        previous.next = next;
        next.previous = previous;
        this.size--;
    
        return true;
    }

    public get(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error(`Index ${index} is out of bounds. Size is ${this.size}`);
        }

        let current: DoubleLinkedListNode<T>;
        
        if (index < this.size / 2) {
            current = this.head.next!;
            
            for (let i = 0; i < index; i++) {
                current = current.next!;
            }
        } else {
            current = this.tail.previous!;

            for (let i = this.size - 1; i > index; i--) {
                current = current.previous!;
            }
        }

        return current.data;
    }

    public getSize(): number {
        return this.size;
    }

    public indexOf(data: T): number {
        if (this.size === 0) return -1;

        let forward = this.head.next!;
        let backward = this.tail.previous!;
        let forwardIndex = 0;
        let backwardIndex = this.size - 1;

        while (forwardIndex <= backwardIndex) {
            if (forward.data === data) return forwardIndex;
            if (backward.data === data) return backwardIndex;

            forward = forward.next!;
            backward = backward.previous!;
            forwardIndex++;
            backwardIndex--;
        }

        return -1;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public isContain(data: T): boolean {
        return this.indexOf(data) !== -1;
    }

    public toString(): string {
        let current = this.head.next;
        let data: T[] = [];

        while (current !== this.tail) {
            data.push(current!.data);
            current = current!.next;
        }

        return `DoubleLinkedList [${data.join(', ')}]`;
    }
}

class DoubleLinkedListNode<T> {
    data: T;
    previous: DoubleLinkedListNode<T> | null;
    next: DoubleLinkedListNode<T> | null;

    constructor(data: T, previous: DoubleLinkedListNode<T> | null = null, next: DoubleLinkedListNode<T> | null = null) {
        this.data = data;
        this.previous = previous;
        this.next = next;
    }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.add('first');
doubleLinkedList.add('second');
doubleLinkedList.add('third');
doubleLinkedList.insert(2, 'fourth');
console.log(doubleLinkedList.toString());
console.log(doubleLinkedList.get(3));
console.log(doubleLinkedList.deleteByIndex(3));
console.log(doubleLinkedList.toString());
console.log(doubleLinkedList.get(3));