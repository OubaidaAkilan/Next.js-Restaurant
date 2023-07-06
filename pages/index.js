import PizzaList from '@/components/PizzaList';
import Slider from '@/components/Slider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name='description' content='The best restaurant for pizza' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Slider />
        <PizzaList />
      </div>
    </>
  );
}
