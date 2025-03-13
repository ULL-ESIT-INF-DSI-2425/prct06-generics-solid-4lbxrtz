import { describe, expect, test, beforeEach, expectTypeOf } from "vitest";
import { NumericPrintableCollection } from "../../src/modi/numericPrintableCollection";

describe("PrintableCollection class tests", () => {
  let numberCollection: NumericPrintableCollection;

  beforeEach(() => {
    numberCollection = new NumericPrintableCollection([]);
  });

  describe("number collection", () => {
    test("should add new item to the collection", () => {
      numberCollection.addItem(1);
      expect(numberCollection.getNumberOfItems()).toBe(1);
    });

    test("should get an existing item", () => {
      numberCollection.addItem(2);
      expect(numberCollection.getItem(2)).toBe(2);
    });

    test("should return undefined for an item that does not exists", () => {
      expect(numberCollection.getItem(5)).toBeUndefined();
    });

    test("should remove an existing item", () => {
      numberCollection.addItem(3);
      expect(numberCollection.getItem(3)).toBe(3);
      numberCollection.removeItem(3);
      expect(numberCollection.getItem(3)).toBeUndefined();
    });

    test("should return the correct number of items", () => {
      numberCollection.addItem(4);
      numberCollection.addItem(5);
      expect(numberCollection.getNumberOfItems()).toBe(2);
    });

    test("should print the collection with commas in between", () => {
      numberCollection.addItem(1);
      numberCollection.addItem(2);
      numberCollection.addItem(3);
      numberCollection.addItem(4);
      numberCollection.addItem(5);
      numberCollection.addItem(6);
      expect(numberCollection.print()).toBe("1, 2, 3, 4, 5, 6");
    });

    test("should return true when checking if the methods exist", () => {
      expectTypeOf(numberCollection).toHaveProperty("addItem");
      expectTypeOf(numberCollection).toHaveProperty("getItem");
      expectTypeOf(numberCollection).toHaveProperty("removeItem");
      expectTypeOf(numberCollection).toHaveProperty("getNumberOfItems");
    });
  });
});
