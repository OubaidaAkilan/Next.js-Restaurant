import React from 'react';

import styles from '../styles/Cart.module.css';
import Image from 'next/image';

import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.cart}>
      <div className={`${styles.container} + container`}>
        {/* // Left */}
        <div className={styles.left}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th className={styles.trTitleItem}>Product</th>
                <th className={styles.trTitleItem}>Name</th>
                <th className={styles.trTitleItem}>Extra</th>
                <th className={styles.trTitleItem}>Price</th>
                <th className={styles.trTitleItem}>Quantity</th>
                <th className={styles.trTitleItem}>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* // item one */}
              {cart.products.map((product) => (
                <tr className={styles.trTitle}>
                  <td className={styles.tdTitleItem}>
                    <span className={styles.imageProduct}>
                      <Image
                        src={product.img}
                        layout='fill'
                        objectFit='contain'
                      />
                    </span>
                  </td>
                  <td className={styles.tdTitleItem}>
                    <span className={styles.name}>{product.title}</span>
                  </td>
                  <td className={styles.tdTitleItem}>
                    <span className={styles.extras}>
                      {product.extras.map((extra) => (
                        <span key={extra._id}>{extra.text},</span>
                      ))}
                      {/* Double ingredient, spicy sauce */}
                    </span>
                  </td>
                  <td className={styles.tdTitleItem}>
                    <span className={styles.price}>${product.price}</span>
                  </td>
                  <td className={styles.tdTitleItem}>
                    <span className={styles.quantity}>{product.quantity}</span>
                  </td>
                  <td className={styles.tdTitleItem}>
                    <span className={styles.total}>
                      ${product.price * product.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* // Right */}
        <div className={styles.right}>
          <h1 className={styles.h1}>Cart total</h1>
          <p className={styles.p}>Subtotal: ${cart.total}</p>
          <p className={styles.p}>Discount: $0.00</p>
          <p className={styles.p}>Total: ${cart.total}</p>
          <button className={styles.rightBtn}>Checkout now!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
