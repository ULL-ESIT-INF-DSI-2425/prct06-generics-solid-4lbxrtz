import { describe, expect, test, beforeEach } from "vitest";
import { StringPrintableCollection } from "../../src/modi/stringPrintableCollection";

describe("PrintableCollection class tests", () => {
  let stringCollection: StringPrintableCollection;

  beforeEach(() => {
    stringCollection = new StringPrintableCollection([]);
  });

  describe("string collection", () => {
    test("should add new item to the collection", () => {
      stringCollection.addItem("eduardo");
      expect(stringCollection.getNumberOfItems()).toBe(1);
    });

    test("should get an existing item", () => {
      stringCollection.addItem("eduardo");
      expect(stringCollection.getItem("eduardo")).toBe("eduardo");
    });

    test("should return undefined for an item that does not exists", () => {
      expect(stringCollection.getItem("segredo")).toBeUndefined();
    });

    test("should remove an existing item", () => {
      stringCollection.addItem("eduardo");
      expect(stringCollection.getItem("eduardo")).toBe("eduardo");
      stringCollection.removeItem("eduardo");
      expect(stringCollection.getItem("eduardo")).toBeUndefined();
    });

    test("should return the correct number of items", () => {
      stringCollection.addItem("eduardo");
      stringCollection.addItem("segredo");
      expect(stringCollection.getNumberOfItems()).toBe(2);
    });

    test("should print the collection with commas in between", () => {
      stringCollection.addItem("hola");
      stringCollection.addItem("me");
      stringCollection.addItem("llamo");
      stringCollection.addItem("eduardo");
      stringCollection.addItem("segredo");
      expect(stringCollection.print()).toBe(
        "hola, me, llamo, eduardo, segredo",
      );
    });
  });
});
