const maxProfit = (prices) => {
  let profit = 0;
  if (!prices || prices.length <= 1) {
    return profit;
  }
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return profit;
};

export default maxProfit;
