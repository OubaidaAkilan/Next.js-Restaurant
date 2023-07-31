import React from 'react';

import styles from '@/styles/MsgModal.module.css';

import { AiOutlineClose } from 'react-icons/ai';

const MsgModal = ({ msg, setMsgModal }) => {
  return (
    <div className={styles.wrapper}>
      <AiOutlineClose
        size={'2rem'}
        color='#666'
        onClick={() => setMsgModal(false)}
      />
      <h1 className={styles.title}>{msg} 😉.</h1>
    </div>
  );
};

export default MsgModal;
