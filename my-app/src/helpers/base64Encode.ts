export const base64Encode = (
  str1: string | undefined,
  str2: string | undefined
): string => {
  return Buffer.from(`${str1}:${str2}`).toString("base64");
};
