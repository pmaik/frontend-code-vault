import { useRef } from "react";

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.head = null;
        this.tail = null;
        this.cache = {};
    }

    put(key, value) {
        // if (this.cache[key]) {
        //     this.cache[key].value = value;
        //     this.moveToFront(key);
        // }

        if (Object.keys(this.cache).length === this.capacity) {
            this.removeLast();
        }

        this.addToFront(key, value);
    }

    get(key) {
        console.log(this.cache, this.head, this.tail);
        if (this.cache[key]) {
            this.moveToFront(key);
            return this.cache[key].value;
        }

        return null;
    }

    moveToFront(key) {
        const node = this.cache[key];
        if (this.head === node) return;

        let prev = null;
        let curr = this.head;
        while (curr && curr.key !== key) {
            prev = curr;
            curr = curr.next;
        }

        if (curr === this.tail) {
            this.tail = prev;
        }
        prev.next = curr.next;

        node.next = this.head;
        this.head = node;
    }

    addToFront(key, value) {
        const newNode = {
            key,
            value,
            next: null,
        };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.cache[key] = newNode;
    }

    removeLast() {
        if (!this.head) return;

        const lastKey = this.tail.key;
        delete this.cache[lastKey];

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        let curr = this.head;
        while (curr && curr.next !== this.tail) {
            curr = curr.next;
        }

        curr.next = null;
        this.tail = curr;
    }
}

export const useLRUCache = (capacity) => {
    const cacheRef = useRef(new LRUCache(capacity));

    return {
        get: (key) => cacheRef.current.get(key),
        put: (key, value) => cacheRef.current.put(key, value),
    };
};
