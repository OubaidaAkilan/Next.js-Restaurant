import React from 'react';

import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
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
              <tr className={styles.trTitle}>
                <td className={styles.tdTitleItem}>
                  <span className={styles.imageProduct}>
                    <Image
                      src={'/images/slide1.png'}
                      layout='fill'
                      objectFit='contain'
                    />
                  </span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.extras}>
                    Double ingredient, spicy sauce 
                  </span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.price}>$19.90</span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.quantity}>2</span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.total}>$38.80</span>
                </td>
              </tr>
              {/* // item two */}
              <tr className={styles.trTitle}>
                <td className={styles.tdTitleItem}>
                  <span className={styles.imageProduct}>
                    <Image
                      src={'/images/slide1.png'}
                      layout='fill'
                      objectFit='contain'
                    />
                  </span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.extras}>
                    Double ingredient, spicy sauce
                  </span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.price}>$19.90</span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.quantity}>2</span>
                </td>
                <td className={styles.tdTitleItem}>
                  <span className={styles.total}>$38.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* // Right */}
        <div className={styles.right}>
          <h1 className={styles.h1}>Cart total</h1>
          <p className={styles.p}>Subtotal: $79.60</p>
          <p className={styles.p}>Discount: $0.00</p>
          <p className={styles.p}>Total: $79.60</p>
          <button className={styles.rightBtn}>Checkout now!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
