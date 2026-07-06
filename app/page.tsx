// ==========================================================================================
// / – головна сторінка з загальною інформацією про застосунок.
// ==========================================================================================

// import Image from 'next/image';
import Link from 'next/link';
// import Image from 'next/image';
// Імпорт модуля зі стилями компонента
import css from './page.module.css';
// Імпорт компонентів

const Home = async () => {
  return (
    <>
      <section className={css.hero}>
        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.description}>You can find everything you want in our catalog</p>
          <Link href="/" className={css.button}>
            View Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
