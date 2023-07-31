import React, { useState } from 'react';
import styles from '@/styles/Admin.module.css';
import ProductsTable from '@/components/ProductsTable';
import OrdersTable from '@/components/OrdersTable';
import axios from 'axios';

const Admin = ({ products, orders }) => {
  const [filterItem, setFilterItem] = useState('products');

  const [activeFilter, setActiveFilter] = useState('products');

  const [showTabel, setShowTabel] = useState(true);

  const status = ['preparing', 'on the way', 'delivered'];

  const handleFilter = (item) => {
    setActiveFilter(item);
    setShowTabel(false);

    setTimeout(() => {
      setShowTabel(true);
      item === 'products' ? setFilterItem('products') : setFilterItem('orders');
    }, 100);
  };
  return (
    <div className={styles.admin}>
      <div className={styles.container + ` container`}>
        <div className={styles.tabs}>
          <div
            onClick={() => handleFilter('products')}
            className={`${styles.tab} ${
              activeFilter === 'products' ? `${styles.activeItem}` : ''
            } `}>
            Products
          </div>
          <div
            className={`${styles.tab} ${
              activeFilter === 'orders' ? `${styles.activeItem}` : ''
            } `}
            onClick={() => handleFilter('orders')}>
            Orders
          </div>
        </div>
        {filterItem === 'products' ? (
          <ProductsTable showTabel={showTabel} products={products} />
        ) : (
          <OrdersTable showTabel={showTabel} orders={orders} />
        )}
      </div>
    </div>
  );
};

export default Admin;

export const getServerSideProps = async () => {
  const productsRes = await axios.get('http://localhost:3000/api/products');
  const ordersRes = await axios.get('http://localhost:3000/api/orders');

  return {
    props: {
      products: productsRes.data,
      orders: ordersRes.data,
    },
  };
};
