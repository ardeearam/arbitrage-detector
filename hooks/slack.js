const token = process.env.SLACK_BOT_TOKEN;
const Slack = require('slack');

module.exports = {

  send: ({bid_exchange_name, ask_exchange_name, bid, ask}) => {

    if(!token) {
      return;
    } 

    const bot = new Slack({token});
    const message = `Buy ETH from ${ask_exchange_name} at ${ask}, Sell ETH to ${bid_exchange_name} at ${bid}\n`
    bot.chat.postMessage({token: token, channel: "arbitrage_signals", text: message});

  }


};
