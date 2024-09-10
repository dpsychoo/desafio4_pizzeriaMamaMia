import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pizza) return <div>No pizza found</div>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} style={{ width: '300px' }} />
      <p><strong>Description:</strong> {pizza.desc}</p>
      <p><strong>Price:</strong> ${pizza.price}</p>
      <p><strong>Ingredients:</strong> {pizza.ingredients.join(', ')}</p>
      <button onClick={() => alert('Added to cart')}>Add to Cart</button>
    </div>
  );
};

export default Pizza;
