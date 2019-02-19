# Arbitrage Detector

This is a simple script that loops over well-known exchanges, and checks if there is an arbitrage opportunity in a certain market.

# How to Run

```
  npm install
  npm start
```

# Output

```
bitstamp ethbtc: {"bid":0.03765358,"ask":0.03771074}
binance ethbtc: {"bid":0.037641,"ask":0.037649}
cex.io ethbtc: {"bid":0.03753,"ask":0.037673}

Buy ETH from binance at 0.037649, Sell ETH to bitstamp at 0.03765358

bitstamp ethbtc: {"bid":0.03765358,"ask":0.0377}
binance ethbtc: {"bid":0.037642,"ask":0.03765}
cex.io ethbtc: {"bid":0.037534,"ask":0.037673}

Buy ETH from binance at 0.03765, Sell ETH to bitstamp at 0.03765358

bitstamp ethbtc: {"bid":0.03765358,"ask":0.0377}
binance ethbtc: {"bid":0.037653,"ask":0.037662}
cex.io ethbtc: {"bid":0.037534,"ask":0.037673}

bitstamp ethbtc: {"bid":0.03765358,"ask":0.0377}
binance ethbtc: {"bid":0.037645,"ask":0.03766}
cex.io ethbtc: {"bid":0.03754,"ask":0.037673}

bitstamp ethbtc: {"bid":0.03765358,"ask":0.0377}
binance ethbtc: {"bid":0.037651,"ask":0.037661}
cex.io ethbtc: {"bid":0.037544,"ask":0.037673}

bitstamp ethbtc: {"bid":0.03765358,"ask":0.0377}
binance ethbtc: {"bid":0.037652,"ask":0.037659}
cex.io ethbtc: {"bid":0.037544,"ask":0.037673}

bitstamp ethbtc: {"bid":0.03765358,"ask":0.0377}
binance ethbtc: {"bid":0.037648,"ask":0.037657}
cex.io ethbtc: {"bid":0.037544,"ask":0.037673}

bitstamp ethbtc: {"bid":0.03765358,"ask":0.0377}
binance ethbtc: {"bid":0.037648,"ask":0.037657}
cex.io ethbtc: {"bid":0.037544,"ask":0.037673}
```

# License

Copyright 2019 Ardee Aram

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
