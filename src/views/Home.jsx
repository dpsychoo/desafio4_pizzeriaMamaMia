import React, { useState, useEffect } from 'react';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Pizza Menu</h1>
      <div>
        {pizzas.map(pizza => (
          <div key={pizza.id}>
            <h2>{pizza.name}</h2>
            <img src={pizza.img} alt={pizza.name} style={{ width: '200px' }} />
            <p><strong>Price:</strong> ${pizza.price}</p>
            <p><strong>Description:</strong> {pizza.desc}</p>
            <p><strong>Ingredients:</strong> {pizza.ingredients.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
