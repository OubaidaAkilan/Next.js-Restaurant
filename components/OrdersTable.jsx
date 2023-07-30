import React from 'react'
import styles from '@/styles/Admin.module.css';

const OrdersTable = ({ showTabel }) => {
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
          <tr className={styles.tr}>
            <td data-cell='Id' className={styles.td}>
              123456789456130256
            </td>
            <td data-cell='Customer' className={styles.td}>
              John Doe
            </td>
            <td data-cell='Total' className={styles.td}>
              $38
            </td>
            <td data-cell='Payment' className={styles.td}>
              paid
            </td>
            <td data-cell='Status' className={styles.td}>
              preparing
            </td>
            <td data-cell='Action' className={styles.td}>
              <div>
                <button>Next stage</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable