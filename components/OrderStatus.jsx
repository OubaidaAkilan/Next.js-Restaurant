import React from 'react';

import Image from 'next/image';
import styles from '../styles/OrderStatus.module.css';

const OrderStatus = ({ urlImage, statusName, orderStatus }) => {
    const status = 0;

    const statusClass = (index) => {
      if (index - status < 1) return styles.done;
      if (index - status === 1) return styles.inProgress;
      if (index - status > 1) return styles.undone;
    };
  return (
    <div className={`${statusClass(orderStatus)} ${styles.orderStatus}`}>
      <Image src={urlImage} width={30} height={30} alt='' />
      <span className={styles.statusName}>{statusName}</span>
      <div className={styles.checkedIcon}>
        <Image
          
          src='/images/checked.png'
          width={20}
          height={20}
          alt=''
        />
      </div>
    </div>
  );
};

export default OrderStatus;
