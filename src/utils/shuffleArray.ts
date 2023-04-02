export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array]; // 元の配列をコピーして新しい配列を作成
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // 配列の要素を入れ替える
  }
  return shuffledArray;
};
