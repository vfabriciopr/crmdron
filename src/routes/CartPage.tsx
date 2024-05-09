import React from 'react';
import Sidebar from './Sidebar.tsx';

const CartPage: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <h1>Carrito de Compras</h1>
      <p>Aquí se mostrarán los productos agregados al carrito.</p>
    </div>
  );
};

export default CartPage;
