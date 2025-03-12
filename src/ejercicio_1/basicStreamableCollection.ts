/**
 * Streamable generic interface
 */
export interface Streamable<T> {
  /**
   * Searches the collection based on the given filter.
   * @param filter - The filter string used for searching.
   * @returns An array of elements that match the filter.
   */
  search(filter: string): T[];
}

/**
 * BasicStreamableCollection abstract class that implements the Streamable interface.
 * Provides basic functionality for managing a collection of items.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * Initializes a new instance of the BasicStreamableCollection class.
   * @param items - The initial collection of items.
   */
  constructor(protected items: T[]) {}

  /**
   * Adds a new item to the collection.
   * @param newItem - The item to be added to the collection.
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  /**
   * Abstract method for searching the collection.
   * Must be implemented by subclasses to define the search behavior.
   * @param searchFilter - The filter string used for searching.
   * @returns An array of elements that match the search filter.
   */
  abstract search(searchFilter: string): T[];

  /**
   * Gets the number of items in the collection.
   * @returns The number of items in the collection.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }
}
