class ArrayList {
    private static DEFAULT_CAPACITY = 10;
    private static DEFAULT_SIZE = 0;
    private arrayList: string[];
    private size: number;

    constructor() {
        this.arrayList = new Array(ArrayList.DEFAULT_CAPACITY);
        this.size = ArrayList.DEFAULT_SIZE;
    }

    
    public get(index: number): string {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        return this.arrayList[index];
    }

    public getSize(): number {
        return this.size;
    }

    public add(data: string): void {
        if (this.size === this.arrayList.length) {
            const newCapacity = this.size * 2;
            const newArray = new Array(newCapacity);

            for (let i = 0; i < this.size; i++) {
                newArray[i] = this.arrayList[i];
            }
            
            this.arrayList = newArray;
        }

        this.arrayList[this.size] = data;
        this.size++;
    }

    public insert(index: number, data: string): void {
        if (index < 0 || index > this.size) {
            throw new Error(`Index ${index} is out of bounds. Size is ${this.size}`);
        }
        
        if (this.size === this.arrayList.length) {
            const newCapacity = this.size * 2;
            const newArray = new Array(newCapacity);
    
            for (let i = 0; i < this.size; i++) {
                newArray[i] = this.arrayList[i];
            }
            
            this.arrayList = newArray;
        }    

        for (let i = this.size; i > index ; i --) {
            this.arrayList[i] = this.arrayList[i - 1];
        }

        this.arrayList[index] = data;
        this.size++;
    }

    public clear(): void {
        this.arrayList = new Array(ArrayList.DEFAULT_CAPACITY);
        this.size = ArrayList.DEFAULT_SIZE;
    }

    public delete(data: string): void {
        const index = this.indexOf(data);

        if (index === -1) {
            throw new Error(`delete failed - ${data} not found`);
        }

        this.deleteByIndex(index);
    }

    public deleteByIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
    
        for (let i = index; i < this.size - 1; i++) {
            this.arrayList[i] = this.arrayList[i + 1];
        }
        
        this.arrayList[this.size - 1] = '';
        this.size--;
    }

    public indexOf(data: string): number {
        for (let i = 0; i < this.size; i ++) {
            if (this.arrayList[i] === data) return i;
        }

        return -1;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public isContain(data: string): boolean {
        return this.indexOf(data) !== -1;
    }

    public toString(): string {
        if (this.isEmpty()) return "[]";

        let result = '';
        result += "[";

        for (let i = 0; i < this.size; i ++) {
            const data = this.arrayList[i];
            result += i !== this.size -1 ? data + ", " : data;
        }

        result += "]";

        return result;
    }
}