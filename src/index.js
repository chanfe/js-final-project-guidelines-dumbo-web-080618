const APIKEY = 'WU45ZT4STMGEM7NW'
const SYMBOL = 'MSFT'
const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYMBOL}&interval=60min&apikey=${APIKEY}`

document.addEventListener("DOMContentLoaded", function(evt){
  let test = document.querySelector("#test-data")
  get(URL).then(res => {
    test.append(renderCard_old(res))
  })
  let stocks = ["GE","BB","AMD","NFLX","GOOGL"]
  stocks.forEach(function(symbol){
    getNewStock(symbol).then(res =>{
      test.append(renderCard(res))
    })
  })
});

function get(path){
  return fetch(path).then(res => res.json())
}

function getNewStock(symbol){
  return fetch(`https://api.iextrading.com/1.0/stock/${symbol}/batch?types=quote,news,chart`).then(res => res.json())
}

function renderCard_old(data){
  let new_card = document.createElement("div")
  new_card.className += "card"
  let most_recent = data["Meta Data"]["3. Last Refreshed"]
  new_card.innerHTML =`<h1>${data["Meta Data"]["2. Symbol"]}</h1>
  <h2>price :${data["Time Series (60min)"][most_recent]["1. open"]}</h2>
  <h3>high :${data["Time Series (60min)"][most_recent]["2. high"]}</h3>
  <h4>low :${data["Time Series (60min)"][most_recent]["3. low"]}</h4>
  `
  return new_card
}

function renderCard(data){
  let new_card = document.createElement("div")
  new_card.className += "card"
  let most_recent = data["quote"]["latestPrice"]
  new_card.innerHTML =`<h1>${data["quote"]["symbol"]}</h1>
  <h2>price :${data["quote"]["open"]}</h2>
  <h3>high :${data["quote"]["high"]}</h3>
  <h4>low :${data["quote"]["low"]}</h4>
  <h5>news :${data["news"][0]["headline"]}</h5>
  `
  return new_card
}
