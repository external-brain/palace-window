---
id: 20240730-150153-dynamic-programming
aliases:
  - Dynamic Programming
tags: []
---

# Dynamic Programming

---
Is a method for solving problems in which the problem is expressed in terms of sub problems using a recurrence relation which is then implemented in some n-dimensional array. The base cases must always be handled & often require some thoughtfulness, e.g. `RR[:][0] & RR[0][:]`.

```table-of-contents
minLevel:2
```

## Algorithm

1. Express the problem in terms of smaller sub problems.
2. Write a recurrence relation, relating the sub problems & yielding a solution.
3. Figure out the base cases & don't iterate over them.

&nbsp;

## Best Time to Buy & Sell Stock

---
You are given an array prices where `prices[i]` is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Explore

                                 7 1 5 3 6 4       7 1 5 0 6 4

1. IOT avoid iterating over all possible buy & sell pairs, we have to carry the information forward as we traverse the input prices. This sounds like ==dynamic programming==.
2. We obviously have to carry forward the min price observed, but the solution to sub problem of min price observed is not the solution we need. We need to phrase the problem in terms of max profit possible at the ith day.

                          1. MP[i] = max profit over a prefix of the input.
                          2. MP[i] = max(MP[i-1], P[i] - min(p0...pi-1))

### Python

```Python
def max_profit(prices: list[int]) -> int:
    N = len(prices)
    MP = [0] * N  # the base case is 0, no profit is possible on the first day
    min_price = prices[0]  # the base case is the first price

    for i in range(1, N):
        p = prices[i]
        MP[i] = max(MP[i - 1], p - min_price)
        min_price = min(min_price, p)

    return MP[N - 1]
```

### Analysis

We iterate over the input array doing constant time operations for an O(N) runtime with O(N) space because we used an array, but we could easily not use one, just keeping track of max profit which would allow constant space.

&nbsp;

## Maximum Profit From Trading Stocks

---
Given a budget & present & future arrays which represent prices for the ith stock now & one year from now, determine the maximum amount of profit possible, only buying each stock one time.

### Explore

This feels like the knapsack problem. If I subtract future from present, then I know which stocks are the most profitable to own & I know what they each cost. So, reducing this to the knapsack problem, the profit potential of a stock is its value & the cost of a stock is its weight. The budget is the maximum capacity of the knapsack. This version is the knapsack problem without replacement.

                          budget              future
                    1 2 3 4 5         10    8 5 4 3 5
                  0 0 0 0 0 0 0 0 0 0 0
                5 0         3 3 3 3 3 3       profit
        stocks  4 0       1 3 3 3 3 4 4     3 1 -2 1 2
                6 0       1 3 3 3 3 4 4
                2 0   1 1 2 3 3 4 4 4 4
                3 0   1 2 2 3 3 4 5 5 6


                1. MP[i][j] = max profit over a subset of the stocks & budget.
                2. MP[i][j] = if si <= bj:
                                max(MP[i-1][j], pi + MP[i-1][j-sj])
                                    remove si   si & s1...i-1 you can afford 
                              else:
                                MP[i-1][j]

### Python

```Python
def max_profit_budget(present, future, budget) -> int:
    S = len(present)
    B = budget
    MP = [[0] * (B + 1) for i in range(S + 1)]

    for s in range(1, S + 1):
        for b in range(1, B + 1):
            c = present[s - 1]
            p = future[s - 1] - c
            if c <= b:
                MP[s][b] = max(MP[s - 1][b], p + MP[s - 1][b - c])
            else:
                MP[s][b] = MP[s - 1][b]

    return MP[S][B]
```

### Analysis

This 2D dynamic program runs in pseudo polynomial O(sB) time where B could be some arbitrarily large number but since runtime is with respect to the input size, & the budget can be represented with log(B) bits, for large B, runtime is no longer polynomial. The amount of space required is also O(sB).

## Max Profit With Fee

---
Given array of stock prices & a fee applied when selling a stock, determine the optimal time to buy & sell & return the maximum possible profit.

### Explore

               1 3 2 8 4 9  f=2
             0 0 0 0 0 0 0
           1   0 0 0 5 5 6       1. MP[b][s] = max profit buying & selling over a prefix of the data.
           3     0 0 5 5 6       2. MP[b][s] = max(s-b-fee + MP[b-1][b-1], MP[b-1][s], MP[b][s-1])
           2       0 5 5 6       3. The base case is the top row in which you purchase no stocks.
           8         5 5 6
           4           5 8
           9             8

### 2D Dynamic Program

```Python
def max_profit(prices, fee) -> int:
    N = len(prices)
    MP = [[0] * (N + 1) for _ in range(N + 1)]

    for b in range(1, N + 1):
        for s in range(b, N + 1):
            buy = prices[b - 1]
            sell = prices[s - 1]
            MP[b][s] = max(
                sell - buy - fee + MP[b - 1][b - 1], MP[b - 1][s], MP[b][s - 1]
            )

    return MP[N][N]
```

This solution is correct, but it's O(n^2). The fact that we used the same quantity on both the rows & columns of our matrix should be a hint that something more efficient is possible. Another way to see this is that our sub problems are redundant.

### Explore Part#2

               prices
            1  3  2  8  4  9  f=2
      buy  -1 -1 -1 -1  1  1       1. MP[a][p] = max profit over a prefix of
      sell  0  0  0  5  5  8          prices, with !a taken at i-1.
                                   2. MP[a][p] = max(
                                          MP[a][p-1], MP[1][p-1] - p[i]  if a=0 (buy))
                                          MP[0][p-1] + p[i] - fee        if a=1 (sell)
                                      )
                                   3. The base cases are that you can't sell on the first 
                                      price & buying first yields -prices[0].

 1. We can stack dynamic programs & sometimes avoid O(n^2) cases.
 2. We can only take three actions: buy, sell, or hold. Hold is encapsulated in our recurrence relation, but buy & sell will be explicitly modeled as interrelated dynamic programs.
 3. The order in which we address the buy & sell cases does not matter because they are strictly dependent on the last sub problems which suggests we could use constant memory to represent this dynamic program, but we'll keep it explicit.
 4. The sell state on the end is the solution. For convenience, we'll make the sell state the bottom row -> `MP[A-1][P-1]` is the solution.

### 2D Constant Height Dynamic Program

```Python
def max_profit_fee(prices, fee) -> int:
    P = len(prices)
    A = 2  # possible actions
    MP = [[0] * (P) for _ in range(2)]
    MP[0][0] = -prices[0]

    for p in range(1, P):
        buy = -prices[p]
        sell = prices[p] - fee
        MP[0][p] = max(
            MP[0][p - 1],
            MP[1][p - 1] + buy,
        )
        MP[1][p] = max(
            MP[1][p - 1],
            MP[0][p - 1] + sell,
        )

    return MP[A - 1][P - 1]
```

### Analysis

We use a linear time & space dynamic program on the input prices & fee to return the max possible profit.

&nbsp;

## Best Time to Buy & Sell Stock II

---
Given an array of stock prices, return the max profit possible given that you can buy & sell shares on the same day & execute as many trades as necessary, but only hold one stock at a time.

### Explore

              1. There are three possible actions: buy, sell, & hold.
              2. Those actions have to be modeled at each price data point.
              3. You can break that down into two dynamic programs in a matrix.
              4. If you are buying or holding. Buying -> you sold or held at t-1.
              5. If you are selling or holding. Selling -> you bought or held at t-1.
              6. Base cases: buy at t=0 -> -prices[0], sell at t=0 -> !possible.

### 2D Fixed Height Dynamic Program

```Python
def max_profit(prices) -> int:
    N = len(prices)
    A = 2  # actions: buy or sell
    MP = [[0] * N for i in range(A)]

    MP[0][0] = -prices[0]  # buy action base case
    for i in range(1, N):
        MP[0][i] = max(MP[0][i - 1], MP[1][i - 1] - prices[i])
        MP[1][i] = max(MP[1][i - 1], MP[0][i - 1] + prices[i])

    return MP[A - 1][N - 1]
```
