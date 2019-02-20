module.exports = {

  Arbitrage: {

    spread: (bid, ask) => {
      return (bid - ask) / ask;
    }
  } 
}


