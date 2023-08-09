import React, { useState } from 'react';
import styles from '@/styles/Admin.module.css';
import ProductsTable from '@/components/ProductsTable';
import OrdersTable from '@/components/OrdersTable';
import axiosInstance from '@/config/AxiosInstance';

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

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const productsRes = await axiosInstance.get(
    `/api/products`
  );
  const ordersRes = await axiosInstance.get(
    `/api/orders`
  );

  return {
    props: {
      products: productsRes.data,
      orders: ordersRes.data,
    },
  };
};
