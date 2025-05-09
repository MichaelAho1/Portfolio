import React, { useState, useEffect } from 'react';
import './stockbar.css';

function StockBar() {
  const [stockPrice1, setStockPrice1] = useState(37.16);
  const [stockPrice2, setStockPrice2] = useState(181.25);
  const [stockPrice3, setStockPrice3] = useState(34.08);
  const [stockPrice4, setStockPrice4] = useState(130.18);
  const [stockPercentage1, setStockPercentage1] = useState(-1.56);
  const [stockPercentage2, setStockPercentage2] = useState(-1.42);
  const [stockPercentage3, setStockPercentage3] = useState(-8.39);
  const [stockPercentage4, setStockPercentage4] = useState(-4.77);
  let array = [];
  
  function extractStockInfo({ meta, values }) {
      const stockName = meta.symbol; 
      const { open, close } = values[0]; 
      return { stockName, openingPrice: parseFloat(open), closingPrice: parseFloat(close) };
  }
  
  async function getStockData(symbols) {
      //const key = import.meta.env.VITE_STOCK_API_URL; Doesnt work when deployed on edge
      const key = 'd0025d1477344b428a9b4a7e55b187ef';
      const url = `https://api.twelvedata.com/time_series?apikey=${key}&interval=1day&symbol=${symbols}&outputsize=1`;    
      const response = await fetch(url); 
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); 
      const stockInfo = extractStockInfo(data); 
      const stockData = {
          stockInfo,
          timestamp: new Date().toISOString()
      };
      localStorage.setItem(`stockData_${symbols}`, JSON.stringify(stockData)); 
  
      return stockInfo;
  }

  function calculatePercentage({ openingPrice, closingPrice }) {
      return ((closingPrice - openingPrice) / openingPrice) * 100;
  }
  
  async function main(symbols, setStockPrice0, setStockPercentage0) {
      const stockDataFromLocalStorage = localStorage.getItem(`stockData_${symbols}`);
      let stockInfo;
      let dataIsFresh = false;
  
      if (stockDataFromLocalStorage) {
          const { stockInfo: cachedStockInfo, timestamp } = JSON.parse(stockDataFromLocalStorage);
          const lastFetchTime = new Date(timestamp).getTime();
          const currentTime = new Date().getTime();
          if (currentTime - lastFetchTime < 60000) {
              dataIsFresh = true;
              stockInfo = cachedStockInfo;
          }
      }
  
      if (!dataIsFresh) {
          stockInfo = await getStockData(symbols);
      }
      const { stockName, closingPrice, openingPrice } = stockInfo;
      const percentage = calculatePercentage(stockInfo);
      setStockPercentage0(percentage.toFixed(2));
      setStockPrice0(closingPrice.toFixed(2));
      array.push(percentage);
  }
  
  
  useEffect(() => {
    main("TOST", setStockPrice1, setStockPercentage1),
    main("GOOG", setStockPrice2, setStockPercentage2),
    main("OKLO", setStockPrice3, setStockPercentage3),
    main("NVDA", setStockPrice4, setStockPercentage4)
  }, []);

  return (
    <>




























          <div className="stockBar">        <section id="moving">          <div id="infoBox" className="label-box2">📈 Stocks I am <br /> Currently <br /> Invested In:</div>          <div id="box1" className="label-box2">TOST <br /> {stockPrice1} <br />            <span style={{color: stockPercentage1 < 0 ? "red" : "green"}}>              {stockPercentage1}%             </span>          </div>          <div id="box2" className="label-box">GOOG<br /> {stockPrice2} <br />            <span style={{color : stockPercentage2 < 0 ? "red" : "green"}}>              {stockPercentage2}%             </span>          </div>          <div id="box3" className="label-box3">OKLO <br /> {stockPrice3} <br />            <span style ={{color : stockPercentage3 < 0 ? "red" : "green"}}>              {stockPercentage3}%             </span>          </div>          <div id="box4" className="label-box4">NVDA <br /> {stockPrice4} <br />            <span style ={{color : stockPercentage4 < 0 ? "red" : "green"}}>              {stockPercentage4}%             </span>          </div>        </section>      </div>
    </>
  );
}

export default StockBar; 