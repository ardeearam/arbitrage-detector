const Coinzip = require('coinzip');

module.exports = {

  prices: async (market) => {
    market = market.toUpperCase();
    const coinzip = new Coinzip({key: "", secret: ""});
    return coinzip.getTickers({market: "ethbtc"}).then( (data) => {
      const bid = parseFloat(data.ticker.buy); 
      const ask = parseFloat(data.ticker.ask);
      if (bid == 0) bid = null;
      if (ask == 0) ask = null;
      return {
        bid: bid,
        ask: ask
      }
    })
  },

  name: _ => { return "coinzip"} 
}
