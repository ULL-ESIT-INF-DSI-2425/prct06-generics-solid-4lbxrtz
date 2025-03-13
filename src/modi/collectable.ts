/**
 * Collectable generic interface
 */
export interface Collectable<T> {
  /**
   * Add a new item to the collection
   * @param newItem - The item to add
   */
  addItem(newItem: T): void;

  /**
   * Get the queried item from a collection
   * @param queriedItem - The queried item to get from the collection
   */
  getItem(queriedItem: T): T | undefined;

  /**
   * Remove an intem from a collection
   * @param itemToRemove - The item to remove from the collection
   */
  removeItem(itemToRemove: T): void;

  /**
   * Get the number of items in a collection
   */
  getNumberOfItems(): number;
}
