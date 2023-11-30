import { add, multiply, processData } from "./math";

describe("add", () => {
  it("should correctly add two positive numbers", () => {
    const result = add(2, 3);
    expect(result).toEqual(5);
  });

  it("should correctly add two negative numbers", () => {
    const result = add(-2, -3);
    expect(result).toEqual(-5);
  });

  it("should correctly add a positive and a negative number", () => {
    const result = add(7, -3);
    expect(result).toEqual(4);
  });

  it("should correctly handle adding zero to a number", () => {
    const result = add(0, 5);
    expect(result).toEqual(5);
  });

  it("should correctly add two large numbers", () => {
    const result = add(1000000, 2000000);
    expect(result).toEqual(3000000);
  });
});

describe("multiply", () => {
  it("should correctly multiply two positive numbers", () => {
    const result = multiply(2, 3);
    expect(result).toEqual(6);
  });

  it("should correctly multiply two negative numbers", () => {
    const result = multiply(-2, -3);
    expect(result).toEqual(6);
  });

  it("should correctly multiply a positive and a negative number", () => {
    const result = multiply(7, -3);
    expect(result).toEqual(-21);
  });

  it("should correctly handle multiplying by zero", () => {
    const result = multiply(5, 0);
    expect(result).toEqual(0);
  });

  it("should correctly multiply two large numbers", () => {
    const result = multiply(1000000, 2000000);
    expect(result).toEqual(2000000000000);
  });
});

describe("processData", () => {
  it("should correctly sum an array of positive numbers", () => {
    const result = processData([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it("should correctly sum an array of negative numbers", () => {
    const result = processData([-1, -2, -3, -4, -5]);
    expect(result).toEqual(-15);
  });

  it("should correctly sum an array with a mix of positive and negative numbers", () => {
    const result = processData([1, -2, 3, -4, 5]);
    expect(result).toEqual(3);
  });

  it("should correctly handle an empty array", () => {
    const result = processData([]);
    expect(result).toEqual(0);
  });

  it("should correctly sum an array with a single number", () => {
    const result = processData([10]);
    expect(result).toEqual(10);
  });
});
