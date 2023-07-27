import React, { useState, useEffect } from 'react';

import styles from '../styles/Cart.module.css';
import Image from 'next/image';

import { useSelector } from 'react-redux';

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);

  //======Start Paypal Section
  const amount = '2';
  const currency = 'USD';
  const style = { layout: 'vertical' };

  // Custom component to wrap the PayPalButtons and handle currency changes
  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className='spinner' />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  //======End Paypal Section

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

          {open ? (
            <>
              <button className={styles.cashBtn}>CASH ON DELIVERY </button>
              <PayPalScriptProvider
                options={{
                  clientId: 'test',
                  components: 'buttons',
                  currency: 'USD',
                  'disable-funding': 'credit,card,p24',
                }}>
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.rightBtn}>
              Checkout now!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
