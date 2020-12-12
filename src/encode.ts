import { alphabet, alphabetToMorse } from "./mappings";

export const encodeToMorse = (input: string) => {
  return input
    .toUpperCase()
    .split("")
    .map((i) => {
      return alphabetToMorse[i] ?? i;
    });
};

export const morseToSpecialSecretCode = (input: string) => {
  return input.replace(/(.)\1*/g, (m, $1) => {
    return $1 === "." ? String(m.length) : alphabet[m.length - 1];
  });
};
