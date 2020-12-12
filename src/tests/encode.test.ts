import { encodeToMorse, morseToSpecialSecretCode } from "../encode";

describe("encodeToMorse", () => {
  it("encodes a string to morse code correctly", () => {
    expect(encodeToMorse("HELLO")).toEqual([
      "....",
      ".",
      ".-..",
      ".-..",
      "---",
    ]);
  });

  it("allows unrecognised characters to pass through", () => {
    expect(encodeToMorse("hello!")).toEqual([
      "....",
      ".",
      ".-..",
      ".-..",
      "---",
      "!",
    ]);
  });
});

describe("morseToSpecialSecretCode", () => {
  it("encodes morse code for h to 4", () => {
    expect(morseToSpecialSecretCode("....")).toEqual("4");
  });

  it("encodes morse code for f to 2A1", () => {
    expect(morseToSpecialSecretCode("..-.")).toEqual("2A1");
  });
});
