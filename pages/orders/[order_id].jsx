import React from 'react';

import styles from '../../styles/Order.module.css';

import OrderStatus from '@/components/OrderStatus';
import axios from 'axios';

const Order = ({ order }) => {
  return (
    <div className={styles.order}>
      <div className={`${styles.container} + container`}>
        {/* // Left */}
        <div className={styles.leftOrder}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th className={styles.trTitleItem}>Order Id</th>
                <th className={styles.trTitleItem}>Customer</th>
                <th className={styles.trTitleItem}>Address</th>
                <th className={styles.trTitleItem}>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* // item one */}
              <tr className={styles.trTitle}>
                <td className={styles.tdTitleItem}>
                  <span className={styles.orderID}>{order._id}</span>
                </td>

                <td className={styles.tdTitleItem}>
                  <span className={styles.customer}>{order.customer}</span>
                </td>

                <td className={styles.tdTitleItem}>
                  <span className={styles.address}>{order.address}</span>
                </td>

                <td className={styles.tdTitleItem}>
                  <span className={styles.total}>${order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
          {/* // Tracking order */}

          <div className={styles.trackingOrder}>
            <OrderStatus
              urlImage={'/images/paid.png'}
              orderStatus={order.status}
              index={0}
              statusName={'Payment'}
            />
            <OrderStatus
              urlImage={'/images/preparing.png'}
              orderStatus={order.status}
              index={1}
              statusName={'Preparing'}
            />
            <OrderStatus
              urlImage={'/images/bike.png'}
              orderStatus={order.status}
              index={2}
              statusName={'On the way'}
            />
            <OrderStatus
              urlImage={'/images/delivered.png'}
              orderStatus={order.status}
              index={3}
              statusName={'Delivered'}
            />
          </div>
        </div>
        {/* // Right */}
        <div className={styles.rightOrder}>
          <h1 className={styles.h1}>Cart total</h1>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${order.total}
          </div>
          <button className={styles.ordertBtn}>PAID</button>
        </div>
      </div>
    </div>
  );
};

export default Order;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/orders/${params.order_id}`
  );

  return {
    props: { order: res.data },
  };
};
