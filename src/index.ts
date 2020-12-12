import fs from "fs";
import readline from "readline";
import { encodeToMorse, morseToSpecialSecretCode } from "./encode";

const getInput = () => {
  if (process.stdin.isTTY) {
    if (!process.argv[2]) {
      throw new Error("Please supply file path.");
    }
    return fs.createReadStream(process.argv[2], "utf-8");
  } else {
    return process.stdin;
  }
};

const convertLine = (line: string) => {
  const words = line.split(" ");
  const wordsInMorse = words.map(encodeToMorse) as string[][];
  const morseInSpecialCode = wordsInMorse.map((word) =>
    word.map(morseToSpecialSecretCode)
  );
  return morseInSpecialCode.map((n) => n.join("|")).join("/");
};

const init = async () => {
  try {
    const output = fs.createWriteStream("superSecretMessage.txt", {
      flags: "w",
    });
    let input = getInput();

    const rl = readline.createInterface({
      input,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      output.write(convertLine(line));
      output.write("\n");
    }
  } catch (error) {
    console.error("Something has gone wrong!");
    console.error(error);
    process.exit(1);
  }
};
init();
