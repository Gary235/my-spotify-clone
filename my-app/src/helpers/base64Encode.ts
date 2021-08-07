export const base64Encode = (str1: String | undefined, str2: String | undefined): String => {
  return Buffer.from(`${str1}:${str2}`).toString('base64');
};
