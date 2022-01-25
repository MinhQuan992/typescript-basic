class Collection<T> {
    items: Array<T> = [];
    add(item: T) {
        this.items.push(item)
    };
    remove(item: T) {
        const index = this.items.findIndex(i => i === item)
        this.items.slice(index, 1)
        return this.items
    }
}

console.log("From 06-generics.ts")

const myNumberCollection = new Collection<number>()
myNumberCollection.add(1)
myNumberCollection.add(2)
myNumberCollection.remove(1)
console.log(myNumberCollection.items)

const myStringCollection = new Collection<string>()
myStringCollection.add('Chicken')
myStringCollection.add('Fish')
myStringCollection.remove('Fish')
console.log(myStringCollection.items)