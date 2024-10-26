import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Barre de navigation horizontale */}
      <Navbar />

      <div className="main-content">
        {/* Menu latéral */}
        <aside className="sidebar">
          <h3>Exclusive</h3>
          <ul>
            <li>Woman's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </aside>

        <div className="content">
          {/* Bannière principale */}
          <div className="banner">
            <h2>iPhone 14 Series</h2>
            <p>Up to 10% off Voucher</p>
            <button>Shop Now</button>
          </div>

          {/* Section des ventes flash */}
          <section className="flash-sales">
            <h2>Today's Flash Sales</h2>
            <ProductList />
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
