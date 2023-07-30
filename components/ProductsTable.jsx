import React from 'react';
import styles from '@/styles/Admin.module.css';
import Image from 'next/image';

const ProductsTable = ({ showTabel, products }) => {
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
          {products.map((product, index) => (
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
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
