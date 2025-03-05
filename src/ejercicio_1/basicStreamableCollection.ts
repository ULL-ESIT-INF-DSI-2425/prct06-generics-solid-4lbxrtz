interface Streamable<T> {
  search(filter: string): T[];
}

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected items: T[]) {}
  addItem(newItem: T) {
    this.items.push(newItem);
  }
  abstract search(searchFilter: string): T[];
  getNumberOfItems() {
    return this.items.length;
  }
}
