import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  // Datos de ejemplo para los productos
  {
    id: 1,
    name: 'Drone X1',
    description: 'Descripción del Drone X1',
    price: 99.99,
  },
  {
    id: 2,
    name: 'Drone Y2',
    description: 'Descripción del Drone Y2',
    price: 149.99,
  },
  // Agrega más productos aquí
];

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
