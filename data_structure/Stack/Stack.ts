class Stack<T> {
    private top: StackNode<T> | null;
    private size: number;

    constructor() {
        this.top = null;
        this.size = 0;
    }

    public push(data: T): void {
        const node = new StackNode<T>(data, this.top);
        this.top = node;
        this.size++;
    }

    public pop(): T | null {
        if (this.isEmpty()) return null;

        const data = this.top!.data;
        this.top = this.top!.next;
        this.size--;

        return data;
    }

    public peek(): T | null {
        if (this.isEmpty()) return null;

        return this.top!.data;
    }

    public getSize(): number {
        return this.size;
    }
    
    public isEmpty(): boolean {
        return this.top === null;
    }

    public indexOf(data: T): number {
        if (this.isEmpty()) return -1;

        let current = this.top;
        let index = 0;

        while(current !== null) {
            if (current.data === data) {
                return index;
            }   

            current = current.next;
            index++;
        }

        return -1;
    }
}

class StackNode<T> {
    data: T;
    next: StackNode<T> | null;

    constructor(data: T, next: StackNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

const stack = new Stack<string>();

stack.push('aaa');
stack.push('bbb');
stack.push('ccc');

console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack.indexOf('aaa'));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.indexOf('ccc'));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.getSize());