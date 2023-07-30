import React from 'react'
import styles from '@/styles/Admin.module.css';
import Image from 'next/image';

const ProductsTable = ({ showTabel }) => {
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
          <tr className={styles.tr}>
            <td data-cell='Image' className={styles.td}>
              <Image
                className={styles.img}
                src={`/images/slide1.png`}
                width={50}
                height={50}
                objectFit='contain'
              />
            </td>
            <td data-cell='Id' className={styles.td}>
              123456789456130256
            </td>
            <td data-cell='Title' className={styles.td}>
              TITLEEXAMPLW
            </td>
            <td data-cell='Price' className={styles.td}>
              $15
            </td>
            <td data-cell='Action' className={styles.td}>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </td>
          </tr>

          <tr className={styles.tr}>
            <td data-cell='Image' className={styles.td}>
              <Image
                className={styles.img}
                src={`/images/slide1.png`}
                width={50}
                height={50}
                objectFit='contain'
              />
            </td>
            <td data-cell='Id' className={styles.td}>
              123456789456130256
            </td>
            <td data-cell='Title' className={styles.td}>
              TITLEEXAMPLW
            </td>
            <td data-cell='Price' className={styles.td}>
              $15
            </td>
            <td data-cell='Action' className={styles.td}>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable