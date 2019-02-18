const api = require('binance');
const binance = new api.BinanceRest({key: "", secret: ""});

module.exports = {

  prices: async (market) => {
    market = market.toUpperCase();
    return binance.bookTicker(market).then( (data) => {
      //return binance.tickerPrice(market).then( (data2) => {
        return {
          bid: parseFloat(data.bidPrice),
          ask: parseFloat(data.askPrice),
          //last: parseFloat(data2.price)
        };
      //});
    });
  },

  name: _ => { return "binance"} 
}
