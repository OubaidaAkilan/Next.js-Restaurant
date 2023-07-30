import React, { useState } from 'react';
import styles from '@/styles/Admin.module.css';
import ProductsTable from '@/components/ProductsTable';
import OrdersTable from '@/components/OrdersTable';

const Admin = () => {
  const [filterItem, setFilterItem] = useState('products');
  const [activeFilter, setActiveFilter] = useState('products');
  const [showTabel, setShowTabel] = useState(true);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setShowTabel(false);

    setTimeout(() => {
      setShowTabel(true);
      item === 'products' ? setFilterItem('products') : setFilterItem('orders');
    }, 500);
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
          <ProductsTable showTabel={showTabel} />
        ) : (
          <OrdersTable showTabel={showTabel} />
        )}
      </div>
    </div>
  );
};

export default Admin;
