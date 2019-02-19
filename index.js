const bitstamp = require('./exchange_apis/bitstamp');
const binance = require('./exchange_apis/binance');
const cexio = require('./exchange_apis/cexio');

const {CURRENCY} = require("node-bitstamp");

const exchanges = [bitstamp, binance, cexio];

let start = async _ => {

  let bids = {};
  let asks = {};
  let market = CURRENCY.ETH_BTC;

  for (let exchange of exchanges) {
    try {
      const prices = await exchange.prices(market);
      bids[exchange.name()] = prices.bid;
      asks[exchange.name()] = prices.ask;
      console.log(`${exchange.name()} ${market}: ${JSON.stringify(prices)}`);
    } catch {
      continue;
    }
  }
  console.log();

  for (let [bid_exchange_name, bid] of Object.entries(bids)) {
    for (let [ask_exchange_name, ask] of Object.entries(asks)) {
      if (bid > ask) {
        console.log(`Buy ETH from ${ask_exchange_name} at ${ask}, Sell ETH to ${bid_exchange_name} at ${bid}\n`);
      }
    }
  }

  setTimeout( _ => {start()}, 1000);
};

start();


