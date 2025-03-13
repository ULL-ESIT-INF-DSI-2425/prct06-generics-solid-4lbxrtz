import { Collectable } from "./collectable";
import { Printable } from "./printable";

/**
 * Abstract generic class that implements the generic interfaces Collectable<T> and Printable<T>
 */
export abstract class PrintableCollection<T>
  implements Collectable<T>, Printable
{
  /**
   * constructor of a generic collecion
   * @param items - the collection of generic items
   */
  constructor(protected items: T[]) {}

  /**
   * Add a new item to the collection
   * @param newItem - The item to add
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  /**
   * Get the queried item from a collection
   * @param queriedItem - The queried item to get from the collection
   */
  getItem(queriedItem: T): T | undefined {
    return this.items.find((item) => item === queriedItem);
  }

  /**
   * Remove an intem from a collection
   * @param itemToRemove - The item to remove from the collection
   */
  removeItem(itemToRemove: T): void {
    this.items = this.items.filter((item) => item !== itemToRemove);
  }

  /**
   * Get the number of items in a collection
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Abstract print method that each of the subclasses needs to implement
   */
  abstract print(): string;
}
