/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

    let sorted = score.slice().sort((a, b) => b - a);
    let map = {};

    for(let i =0;i < score.length; i++) {
        map[sorted[i]] = i + 1
    }

     return score.map(num => {
      if (map[num] === 1) return "Gold Medal";
      if (map[num] === 2) return "Silver Medal";
      if (map[num] === 3) return "Bronze Medal";
      return map[num].toString();
  });
};
