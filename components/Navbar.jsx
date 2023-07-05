import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container + ' container'}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image
              src='/images/telephone.png'
              width={32}
              height={32}
              alt='telephone'
            />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW</div>
            <div className={styles.text}>012 345 678</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>

            <Image src='/images/logo.png' width={160} height={69} alt='logo' />

            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/images/cart.png' width={30} height={30} alt='cart' />
            <div className={styles.counter}>2</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
