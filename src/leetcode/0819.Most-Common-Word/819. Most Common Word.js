const mostCommonWord = (paragraph, banned) => {
  const bannedMap = {};
  banned.forEach((b) => {
    bannedMap[b] = 0;
  });
  const freqMap = {};
  let max = 0;
  let res = '';
  paragraph
    .toLowerCase()
    .replace(/[!?',;.]/g, ' ')
    .split(/\s/g)
    .forEach((w) => {
      if (!bannedMap.hasOwnProperty(w) && w.trim() !== '') {
        if (freqMap[w]) {
          freqMap[w]++;
        } else {
          freqMap[w] = 1;
        }
        if (freqMap[w] > max) {
          max = freqMap[w];
          res = w;
        }
      }
    });
  return res;
};

export default mostCommonWord;
