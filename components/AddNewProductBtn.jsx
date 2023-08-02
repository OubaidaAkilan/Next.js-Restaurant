import React from 'react';
import styles from '@/styles/AddNewProductBtn.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

const AddNewProductBtn = ({ setShowProductModal }) => {
  return (
    <div
      className={styles.AddNewProductBtn}
      onClick={() => setShowProductModal(true)}>
      Add New Product <AiOutlinePlus />
    </div>
  );
};

export default AddNewProductBtn;
