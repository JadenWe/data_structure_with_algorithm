class LinkedList<T> {
    private size: number;
    private head: LinkedListNode<T>;
    
    constructor() {
        this.size = 0;
        this.head = new LinkedListNode<T>(null as T);
    }

    public add(data: T): void {
        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }

        curr.next = new LinkedListNode(data);
        this.size++;
    }

    public insert(index: number, data: T): void {
        if (index < 0 || index > this.size) {
            throw new Error(`Index ${index} is out of bounds. Size is ${this.size}`);
        }

        let currIndex = 0;
        let prev = this.head;
        let curr = prev.next;

        while(currIndex++ < index && curr !== null) {
            prev = prev.next!;
            curr = curr.next;
        }

        const newNode = new LinkedListNode<T>(data, curr);
        prev.next = newNode;
        this.size++;
    }

    public clear(): void {
        this.head.next = null;
        this.size = 0;
    }

    public delete(data: T): boolean {
        let prev = this.head;
        let curr = prev.next;

        while(curr !== null) {
            if (curr.data === data) {
                prev.next = curr.next;
                curr.next = null;
                this.size--;
                return true;
            }
            
            prev = curr;
            curr = curr.next;
        }
        return false;
    }

    public deleteByIndex(index: number): void {
        if (index < 0 || index >= this.size) { 
            throw new Error(`Index ${index} is out of bounds. Size is ${this.size}`);
        }

        let currIndex = 0;
        let prev = this.head;
        let curr = prev.next!;

        while (currIndex++ < index) {
            prev = prev.next!;
            curr = curr.next!;
        }

        prev.next = curr.next;
        curr.next = null;
        this.size--;
    }

    public get(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error(`Index ${index} is out of bounds. Size is ${this.size}`);
        }

        let currIndex = 0;
        let curr = this.head.next!;

        while(currIndex++ < index) {
            curr = curr.next!;
        }

        return curr.data;
    }

    public getSize(): number {
        return this.size;
    }

    public indexOf(data: T): number {
        let index = 0;
        let curr = this.head.next;

        while(curr !== null) {
            if (curr.data === data) {
                return index;
            }

            curr = curr.next;
            index++;
        }
        
        return -1;
    }

    public isEmpty(): boolean {
        return this.head.next === null;
    }

    public isContain(data: T): boolean {
        return this.indexOf(data) !== -1;
    }

    public toString(): string {
        let data: T[] = [];
        let curr = this.head.next;
    
        while(curr !== null) {
            data.push(curr.data);
            curr = curr.next;
        }

        return `LinkedList = [${data.join(', ')}]`
    }
}

class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null;

    constructor(data: T, next: LinkedListNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

const linkedList = new LinkedList<string>();

linkedList.add('test1');
linkedList.add('test2');
linkedList.add('test3');
console.log(linkedList.toString());
console.log(linkedList.get(1));
console.log(linkedList.getSize());
linkedList.insert(1, 'test4');
console.log(linkedList.indexOf('test4'));
linkedList.deleteByIndex(2);
console.log(linkedList.toString());
console.log(linkedList.getSize());
