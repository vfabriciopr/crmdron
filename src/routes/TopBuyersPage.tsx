import React from 'react';

interface Buyer {
  id: number;
  name: string;
  totalPurchases: number;
}

const topBuyers: Buyer[] = [
  // Datos de ejemplo para los mejores clientes por vendedor
  { id: 1, name: 'Cliente A', totalPurchases: 500 },
  { id: 2, name: 'Cliente B', totalPurchases: 300 },
  // Agrega más clientes aquí
];

const TopBuyersPage: React.FC = () => {
  return (
    <div>
      <h1>Mejores Clientes por Vendedor</h1>
      <ul>
        {topBuyers.map((buyer) => (
          <li key={buyer.id}>
            <h2>{buyer.name}</h2>
            <p>Compras totales: ${buyer.totalPurchases}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBuyersPage;