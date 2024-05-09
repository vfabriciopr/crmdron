import React from 'react';

interface Seller {
  id: number;
  name: string;
  totalSales: number;
}

const topSellers: Seller[] = [
  // Datos de ejemplo para los mejores vendedores
  { id: 1, name: 'Vendedor A', totalSales: 1000 },
  { id: 2, name: 'Vendedor B', totalSales: 800 },
  // Agrega más vendedores aquí
];

const TopSellersPage: React.FC = () => {
  return (
    <div>
      <h1>Mejores Vendedores</h1>
      <ul>
        {topSellers.map((seller) => (
          <li key={seller.id}>
            <h2>{seller.name}</h2>
            <p>Ventas totales: ${seller.totalSales}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellersPage;