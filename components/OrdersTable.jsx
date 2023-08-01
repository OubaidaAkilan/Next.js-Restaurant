import React, { useState } from 'react';
import styles from '@/styles/Admin.module.css';
import axios from 'axios';

//======I recived the orders props from (admin page)
const OrdersTable = ({ showTabel, orders }) => {
  const [ordersList, setOrdersList] = useState(orders);

  const statusOrder = ['preparing', 'on the way', 'delivered'];

  

  const handleStatusOrder = async (order_id, currentStatus) => {
    if (currentStatus === 2) return;
    try {
      const res = await axios.put(
        `http://localhost:3000/api/orders/${order_id}`,
        { status: currentStatus + 1 }
      );

      setOrdersList([
        res.data,
        ...ordersList.filter((order) => order._id !== order_id),
      ]);
    } catch (error) {}
  };

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
          {ordersList.map((order, index) => (
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
                {statusOrder[order.status]}
              </td>
              <td data-cell='Action' className={styles.td}>
                <div>
                  <button
                    onClick={() => handleStatusOrder(order._id, order.status)}>
                    Next stage
                  </button>
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
