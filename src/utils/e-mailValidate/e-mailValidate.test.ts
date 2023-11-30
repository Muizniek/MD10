import { eMailValidate } from "./e-mailVlaidate";

describe("nameValidate", () => {
  it("should return false to spam e-mail", () => {
    const result = eMailValidate("#432#@efwcwe.lv");
    expect(result).toEqual(false);
  });

  it("should return true for valid email", () => {
    const result = eMailValidate("muiznieka@gmail.com");
    expect(result).toEqual(true);
  });

  it("should return false for empty string", () => {
    const result = eMailValidate("");
    expect(result).toEqual(false);
  });

  it("should return false for whitespace", () => {
    const result = eMailValidate("muizn ieka@gmail.com");
    expect(result).toEqual(false);
  });

  it("should return true for email with numbers", () => {
    const result = eMailValidate("muiznieka123@gmail.com");
    expect(result).toEqual(true);
  });
});


