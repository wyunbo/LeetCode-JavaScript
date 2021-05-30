/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45

*/

/*
如果第一次爬的是1个台阶，那么剩下n-1个台阶，爬法是f(n-1)
如果第一次爬的是2个台阶，那么剩下n-2个台阶，爬法是f(n-2)
可以得出总爬法为: f(n) = f(n-1) + f(n-2)
由题意可得：只有一个台阶时f(1) = 1，只有两个台阶的时候 f(2) = 2
可以发现最终得出的是一个斐波那契数列：

            | 1, (n=1) 
    f(n) =  | 2, (n=2) 
            | f(n-1)+f(n-2)  (n>2, n为整数)
*/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

export default climbStairs;
