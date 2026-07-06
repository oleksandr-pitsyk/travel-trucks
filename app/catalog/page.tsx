// ======================================================================================
// /catalog — сторінка каталогу кемперів.
// ======================================================================================
// На цій сторінці має відображатися список доступних кемперів,
// а також бути реалізована можливість фільтрації та довантаження карток.
// --------------------------------------------------------------------------------------

// import Image from 'next/image';
import css from './Catalog.module.css';

// import { CampersResponse } from '@/types/camper';
import { getCampers } from '../../lib/api/clientApi';

import CamperCard from '../../components/CamperCard/CamperCard';

const Catalog = async () => {
  const { campers } = await getCampers();

  console.log('campers', campers);

  // page: number = 1,
  // perPage: number = 4,
  // location?: string,
  // form?: string,
  // transmission?: string,
  // engine?: string

  return (
    <>
      <div className={css.catalogContainer}>
        <section className={css.filterContainer}>
          <p>filterContainer</p>
        </section>

        <section className={css.camperListContainer}>
          {/* <h2 className={css.title}>Catalog</h2> */}
          <ul className={css.camperList}>
            {campers.map(camper => (
              <li key={camper.id} className={css.camperItem}>
                <CamperCard camper={camper} />
                {/* <h3>{camper.name}</h3>
            <p>Price: {camper.price}</p>
            <p>Location: {camper.location}</p>
            <p>Form: {camper.form}</p>
            <p>Transmission: {camper.transmission}</p>
            <p>Engine: {camper.engine}</p> */}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Catalog;
