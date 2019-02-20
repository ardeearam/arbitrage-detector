const {TickerStream, OrderBookStream, Bitstamp, CURRENCY} = require("node-bitstamp");
const bitstamp = new Bitstamp();

module.exports = {

  prices: async (market) => {
    return bitstamp.ticker(market).then(({status, header, body}) => {
      return {
        bid: parseFloat(body.bid),
        ask: parseFloat(body.ask),
      };
    });
  },

  name: _ => { return "bitstamp"} 
}
