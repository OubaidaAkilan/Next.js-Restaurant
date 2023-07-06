import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={styles.pizzaList}>
      <div className={styles.container + ' container'}>
        <div className={styles.info}>
          <h1 className={styles.title}>The Best Pizza In Town</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            tempora animi error quod molestias necessitatibus ratione maiores .
          </p>
        </div>
        <div className={styles.main}>
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
