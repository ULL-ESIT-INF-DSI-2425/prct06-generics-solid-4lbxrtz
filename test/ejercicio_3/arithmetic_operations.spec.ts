import { describe, expect, test, beforeEach } from "vitest";
import { ComplexNumberArithmetic } from "../../src/ejercicio_3/arithmetic_operations";

describe("ComplexNumberArithmetic", () => {
  let complex1: ComplexNumberArithmetic;
  let complex2: ComplexNumberArithmetic;

  beforeEach(() => {
    complex1 = new ComplexNumberArithmetic([3, 2]);
    complex2 = new ComplexNumberArithmetic([1, 4]);
  });

  describe("add", () => {
    test("should add two complex numbers correctly", () => {
      expect(complex1.add(complex2).complex).toEqual([4, 6]);
    });
  });

  describe("substract", () => {
    test("should subtract two complex numbers correctly", () => {
      expect(complex1.substract(complex2).complex).toEqual([2, -2]);
    });
  });

  describe("multiply", () => {
    test("should multiply two complex numbers correctly", () => {
      expect(complex1.multiply(complex2).complex).toEqual([-5, 14]);
    });
  });

  describe("divide", () => {
    test("should divide two complex numbers correctly", () => {
      expect(complex1.divide(complex2).complex).toEqual([
        0.6470588235294118, -0.5882352941176471,
      ]);
    });
  });
});
