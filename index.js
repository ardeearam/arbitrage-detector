const bitstamp = require('./exchange_apis/bitstamp');
const binance = require('./exchange_apis/binance');

const {CURRENCY} = require("node-bitstamp");

const exchanges = [bitstamp, binance];

let start = async _ => {
  for (let exchange of exchanges) {
    const prices = await exchange.prices(CURRENCY.ETH_BTC);
    console.log(`${exchange.name()}: ${JSON.stringify(prices)}`);
  }
  console.log();

  setTimeout( _ => {start()}, 1000);
};

start();

