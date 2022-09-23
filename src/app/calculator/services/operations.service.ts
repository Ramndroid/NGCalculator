import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {

  /**
   * Sum of two values.
   * @param value1 first value.
   * @param value2 second value.
   * @returns sum of value1 and value2.
   */
  add(value1: number, value2: number): number {
    return value1 + value2;
  }

  /**
   * Subtraction of two values.
   * @param value1 first value.
   * @param value2 second value.
   * @returns subtraction of value1 and value2.
   */
  sub(value1: number, value2: number): number {
    return value1 - value2;
  }

  /**
   * Multiplication of two values.
   * @param value1 first value.
   * @param value2 second value.
   * @returns multiplication of value1 and value2.
   */
  mul(value1: number, value2: number): number {
    return value1 * value2;
  }

  /**
   * Division of two values.
   * @param value1 first value.
   * @param value2 second value.
   * @returns division of value1 and value2. Can return infinity or NaN.
   */
  div(value1: number, value2: number): number | string {
    if (value1 === 0 && value2 === 0) {
      return "Not a number!";
    } else if (value1 !== 0 && value2 === 0) {
      return "Infinity!";
    }
    return value1 / value2;
  }
}
