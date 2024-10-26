import React from 'react';
import './ProductList.css';

function ProductList() {
  const products = [
    { name: 'HAVIT HV-G92 Gamepad', price: '$120', discount: '40%' },
    { name: 'AK-900 Wired Keyboard', price: '$370', discount: '35%' },
    { name: 'IPS LCD Gaming Monitor', price: '$375', discount: '30%' },
    { name: 'S-Series Comfort Chair', price: '$375', discount: '25%' },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-image"> {/* Image dynamique */}
            <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
          </div>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <span className="discount">{product.discount} OFF</span>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;