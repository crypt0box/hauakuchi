export const splitString = (str: string, length: number) => {
  const result: string[] = [];
  if (str.length === 0) return result;
  for (let i = 0; i < str.length; i += length) {
    result.push(str.slice(i, i + length));
  }
  return result;
};
