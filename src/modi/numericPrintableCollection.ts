import { PrintableCollection } from "./printableCollection";

/**
 * Numeric printable collection class
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * NumericPrintableCollection constructor
   * @param items - a collection of numbers
   */
  constructor(items: number[]) {
    super(items);
  }

  /**
   *
   * @returns - The collection of numbers divided by commas
   */
  print(): string {
    return this.items.join(", ");
  }
}
