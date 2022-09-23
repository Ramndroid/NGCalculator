import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {

  add(value1: number, value2: number): number {
    return value1 + value2;
  }

  sub(value1: number, value2: number): number {
    return value1 - value2;
  }

  mul(value1: number, value2: number): number {
    return value1 * value2;
  }

  div(value1: number, value2: number): number | string {
    if (value1 === 0 && value2 === 0) {
      return "Not a number!";
    } else if (value1 !== 0 && value2 === 0) {
      return "Infinity!";
    }
    return value1 / value2;
  }
}
