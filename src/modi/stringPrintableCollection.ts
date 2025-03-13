import { PrintableCollection } from "./printableCollection";

/**
 * String printable collection class
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * StringPrintableCollection constructor
   * @param items - a collection of strings
   */
  constructor(items: string[]) {
    super(items);
  }

  /**
   * Print method
   * @returns - The collection of strings divided by commas.
   */
  print(): string {
    return this.items.join(", ");
  }
}
