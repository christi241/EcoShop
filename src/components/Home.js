// src/components/Home.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirection automatique vers la liste des produits après 2 secondes (par exemple)
    setTimeout(() => {
      navigate('/products');
    }, 2000);
  }, [navigate]);

  return (
    <div>
      <h1>Redirection vers la liste des produits...</h1>
    </div>
  );
};

export default Home;
