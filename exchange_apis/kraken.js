const KrakenClient = require('kraken-api');
const kraken = new KrakenClient('xxx', 'xxx');

module.exports = {

  prices: async (market) => {
    return kraken.api('Ticker', {pair: 'ETHXBT'}).then( (data) => {
      return {
        bid: parseFloat(data.result.XETHXXBT.b[0]),
        ask: parseFloat(data.result.XETHXXBT.a[0]),
      };
    });
  },

  name: _ => { return "kraken"} 
}
