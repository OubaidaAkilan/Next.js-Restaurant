import React, { useState } from 'react';
import styles from '@/styles/Admin.module.css';
import Image from 'next/image';
import axios from 'axios';
import MsgModal from './Modal/MsgModal';

const ProductsTable = ({ showTabel, products }) => {
  const [pizaaProducts, setPizaaProducts] = useState(products);

  const [msgModal, setMsgModal] = useState(false);

  const [message, setMessage] = useState('');

  //====Start Handle Update Product
  const handleEditProduct = async (product_id) => {
    const res = await axios.put(
      `http://localhost:3000/api/products/${product_id}`,
      {
        title: 'pizza 2',
        desc: 'product 2',
        img: '/images/slide1.png',
        prices: [10, 15, 20],
        extraOptions: [
          {
            text: 'tomato sauce',
            price: 2,
          },
        ],
      }
    );

    setPizaaProducts(
      pizaaProducts.filter((product) => product._id !== product_id)
    );

    setMessage(res.data);

    setMsgModal(true);
    console.log(res.data);
  };
  //====End Handle Update Product

  //====Start Handle Delete Product
  const handleDeleteProduct = async (product_id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/products/${product_id}`
      );

      setPizaaProducts(
        pizaaProducts.filter((product) => product._id !== product_id)
      );

      setMessage(res.data);

      setMsgModal(true);
    } catch (err) {
      setMessage(err.message);

      setMsgModal(true);
    }
  };
  //====End Handle Delete Product

  return (
    <div
      className={`${styles.products} ${
        showTabel ? styles.showTable : styles.hideTable
      }`}>
      <table className={styles.table}>
        <caption className={styles.caption}>Products</caption>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Image</th>
            <th className={styles.th}>Id</th>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {pizaaProducts.map((product, index) => (
            <tr className={styles.tr} key={product._id + index}>
              <td data-cell='Image' className={styles.td}>
                <Image
                  className={product.img}
                  src={`/images/slide1.png`}
                  width={50}
                  height={50}
                  objectFit='contain'
                />
              </td>
              <td data-cell='Id' className={styles.td}>
                {product._id}
              </td>
              <td data-cell='Title' className={styles.td}>
                {product.title}
              </td>
              <td data-cell='Price' className={styles.td}>
                {product.prices.map((price, index) => {
                  return <span key={price + index}>${price + ` `}</span>;
                })}
              </td>
              <td data-cell='Action' className={styles.td}>
                <div>
                  <button onClick={() => handleEditProduct(product._id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProduct(product._id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {msgModal && <MsgModal msg={message} setMsgModal={setMsgModal} />}
    </div>
  );
};

export default ProductsTable;
