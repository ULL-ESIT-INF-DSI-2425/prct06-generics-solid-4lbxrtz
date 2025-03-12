export type ComplexNumber = [real: number, imaginary: number];

/**
 * Arithmetic generic interface
 */
export interface Arithmetic<T> {
  add(second_element: T): T;
  substract(second_element: T): T;
  multiply(second_element: T): T;
  divide(second_element: T): T;
}

/**
 * ArithmeticCollection class
 */
export class ArithmeticCollection<T extends Arithmetic<T>> {
  constructor(protected items: T[]) {}

  addItem(item: T) {
    this.items.push(item);
  }

  getNumberOfItems() {
    return this.items.length;
  }
}

/**
 * ComplexNumberArithmetic class
 */
export class ComplexNumberArithmetic
  implements Arithmetic<ComplexNumberArithmetic>
{
  constructor(private _complex: ComplexNumber) {}
  get complex() {
    return this._complex;
  }
  set complex(newComplex: ComplexNumber) {
    this._complex = newComplex;
  }

  add(second_element: ComplexNumberArithmetic): ComplexNumberArithmetic {
    const [real1, imaginary1] = this.complex;
    const [real2, imaginary2] = second_element.complex;
    return new ComplexNumberArithmetic([
      real1 + real2,
      imaginary1 + imaginary2,
    ]);
  }
  substract(second_element: ComplexNumberArithmetic): ComplexNumberArithmetic {
    const [real1, imaginary1] = this.complex;
    const [real2, imaginary2] = second_element.complex;
    return new ComplexNumberArithmetic([
      real1 - real2,
      imaginary1 - imaginary2,
    ]);
  }

  multiply(second_element: ComplexNumberArithmetic): ComplexNumberArithmetic {
    const [real1, imaginary1] = this.complex;
    const [real2, imaginary2] = second_element.complex;
    return new ComplexNumberArithmetic([
      real1 * real2 - imaginary1 * imaginary2,
      real1 * imaginary2 + imaginary1 * real2,
    ]);
  }

  divide(second_element: ComplexNumberArithmetic): ComplexNumberArithmetic {
    const [real1, imaginary1] = this.complex;
    const [real2, imaginary2] = second_element.complex;
    const denominator = real2 * real2 + imaginary2 * imaginary2;
    return new ComplexNumberArithmetic([
      (real1 * real2 + imaginary1 * imaginary2) / denominator,
      (imaginary1 * real2 - real1 * imaginary2) / denominator,
    ]);
  }
}
