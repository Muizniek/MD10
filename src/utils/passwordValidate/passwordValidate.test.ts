import { passwordValidate } from "./passwordValidate";

describe("nameValidate", () => {
  it("should return false to pasword less then 8 char", () => {
    const result = passwordValidate("Helo12");
    expect(result).toEqual(false);
  });

  it("should return true for pass.W with At leest one cap.lett one number", () => {
    const result = passwordValidate("Google123");
    expect(result).toEqual(true);
  });

  it("should return false to pasword with all the same simbols", () => {
    const result = passwordValidate("@@@@@@@@@");
    expect(result).toEqual(false);
  });

  it("should return true for pass.W with whitespaces", () => {
    const result = passwordValidate("Googl e12 3");
    expect(result).toEqual(true);
  });

  it("should return false to pasword without lowercase letters", () => {
    const result = passwordValidate("EWFWEF123");
    expect(result).toEqual(false);
  });
});
