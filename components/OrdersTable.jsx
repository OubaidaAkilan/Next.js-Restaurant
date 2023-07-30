import React from 'react';
import styles from '@/styles/Admin.module.css';

const OrdersTable = ({ showTabel, orders }) => {
  return (
    <div className={styles.orders}>
      <table className={styles.table}>
        <caption className={styles.caption}>Orders</caption>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Id</th>
            <th className={styles.th}>Customer</th>
            <th className={styles.th}>Total</th>
            <th className={styles.th}>Payment</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr className={styles.tr} key={order._id + index}>
              <td data-cell='Id' className={styles.td}>
                {order._id}
              </td>
              <td data-cell='Customer' className={styles.td}>
                {order.customer}
              </td>
              <td data-cell='Total' className={styles.td}>
                {order.total}
              </td>
              <td data-cell='Payment' className={styles.td}>
                {order.method}
              </td>
              <td data-cell='Status' className={styles.td}>
                {order.status}
              </td>
              <td data-cell='Action' className={styles.td}>
                <div>
                  <button>Next stage</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
