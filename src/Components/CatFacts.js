import React, { useState, useEffect } from 'react';

function CatFacts() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFact = async () => {
      setLoading(true);
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
      setLoading(false);
    };

    const interval = setInterval(() => {
      fetchFact();
    }, 20000);

    fetchFact(); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="fact-title">
        <h2>Cat Facts</h2>
      </div>
      <div className="fact-container" style={{ border: '2px solid black', borderRadius: '5px', padding: '10px' }}>
        {loading ? <p>Loading...</p> : <p>{fact}</p>}
      </div>
    </div>
  );
}

export default CatFacts;
