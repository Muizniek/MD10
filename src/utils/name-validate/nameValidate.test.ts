import { nameValidate } from "./nameValidate";

describe("nameValidate", () => {
  it("should return false for less than 2 char", () => {
    const result = nameValidate("a");
    expect(result).toEqual(false);
  });

  it("should return true for valid username", () => {
    const result = nameValidate("M.Muižnieks");
    expect(result).toEqual(true);
  });

  it("should return false for three the same char.", () => {
    const result = nameValidate("aaa");
    expect(result).toEqual(false);
  });

  it("should return false if 50 char", () => {
    const result = nameValidate("asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd");
    expect(result).toEqual(false);
  });

  it("should return false if non alphabetical char. is used", () => {
    const result = nameValidate("+-,!@#$%^&*()123");
    expect(result).toEqual(false);
  });
});
