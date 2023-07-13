import React from 'react';

import styles from '../../styles/Order.module.css';

import OrderStatus from '@/components/OrderStatus';

const Order = () => {


  return (
    <div className={styles.order}>
      <div className={`${styles.container} + container`}>
        {/* // Left */}
        <div className={styles.leftOrder}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th className={styles.trTitleItem}>Order ID</th>
                <th className={styles.trTitleItem}>Customer</th>
                <th className={styles.trTitleItem}>Address</th>
                <th className={styles.trTitleItem}>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* // item one */}
              <tr className={styles.trTitle}>
                <td className={styles.tdTitleItem}>
                  <span className={styles.orderID}>18546789</span>
                </td>

                <td className={styles.tdTitleItem}>
                  <span className={styles.customer}>Omar Ali</span>
                </td>

                <td className={styles.tdTitleItem}>
                  <span className={styles.address}>Amman st. 212-33 LA</span>
                </td>

                <td className={styles.tdTitleItem}>
                  <span className={styles.total}>$38.80</span>
                </td>
              </tr>
            </tbody>
          </table>
          {/* // Tracking order */}

          <div className={styles.trackingOrder}>
            <OrderStatus
              urlImage={'/images/paid.png'}
              orderStatus={0}
              statusName={'Payment'}
            />
            <OrderStatus
              urlImage={'/images/preparing.png'}
              orderStatus={1}
              statusName={'Preparing'}
            />
            <OrderStatus
              urlImage={'/images/bike.png'}
              orderStatus={2}
              statusName={'On the way'}
            />
            <OrderStatus
              urlImage={'/images/delivered.png'}
              orderStatus={3}
              statusName={'Delivered'}
            />
          </div>
        </div>
        {/* // Right */}
        <div className={styles.rightOrder}>
          <h1 className={styles.h1}>Cart total</h1>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.ordertBtn}>PAID</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
