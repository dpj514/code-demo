class MaxHeap {
    private data: number[];
    constructor() {
        this.data = new Array();
    }
    parent(index) {
        return Math.floor((index - 1) / 2);
    }
    left(index) {
        return 2 * index + 1;
    }
    right(index) {
        return 2 * index + 2;
    }
    add(item) {
        this.data.push(item);

    }
    siftUp(index) {
        let parent = this.parent(index);
        while (index > 0 && this.data[index] > this.data[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = this.parent(index);
        }
    }
    swap(i1, i2) {
        let temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }
    get(index) {
        if (this.data.length === 0) {
            throw Error('Cannot find max when heap is empty!');
        }
        const result = this.data[0];
        this.data[0] = this.data.pop()
        this.siftDown(0);
    }
    siftDown(index) {
        while (index < this.data.length) {
            let left = this.left(index),
                right = left + 1,
                largerChild = this.data[left] >= this.data[right] ? left : right;
            if (this.data[index] < this.data[largerChild]) {
                this.swap(index, largerChild);
                index = largerChild;
            }
            else {
                break;
            }
        }

    }
}