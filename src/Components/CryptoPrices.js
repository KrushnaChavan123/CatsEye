import React, { useState, useEffect } from 'react';

function CryptoPrices() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPrices(data.bpi);
        setError(null);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    const interval = setInterval(() => {
      fetchPrices();
    }, 60000);

    fetchPrices(); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Bitcoin Realtime Value</h2>
          <ul className='ul' style={{display: "flex", justifyContent:"space-around"}}>
            {Object.keys(prices).map((currency) => {
              let symbol;
              switch (currency) {
                case 'USD':
                  symbol = '$';
                  break;
                case 'GBP':
                  symbol = '£';
                  break;
                case 'EUR':
                  symbol = '€';
                  break;
                
                default:
                  symbol = currency; 
              }
              return (
                <li key={currency} className='ul-li' style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '2.49em' }}>{symbol}</span>  {' '}
                  <span>{prices[currency].rate}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CryptoPrices;
