export const add = (a: number, b: number): number => {
  return a + b;
};

export const multiply = (a: number, b: number): number => {
  return a * b;
};

export const processData = (data: number[]): number => {
  return data.reduce((acc, num) => acc + num, 0);
}