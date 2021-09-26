// eslint-disable-next-line import/no-unresolved
import cryptoRandomString from "crypto-random-string";

export const base64Encode = (
  str1: string | undefined,
  str2: string | undefined
): string => {
  return Buffer.from(`${str1}:${str2}`).toString("base64");
};

export const getRandomString = (min: number, max: number) =>
  cryptoRandomString({
    length: Math.floor(Math.random() * (max - min) + min),
    type: "base64",
  });
