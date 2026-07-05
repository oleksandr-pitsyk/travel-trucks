'use client';

// import { useState } from 'react';
import Image from 'next/image';
// import { useQuery } from '@tanstack/react-query';
// import { useAuthStore } from '@/lib/store/authStore';

// import DetailsReviewsLocation from '../DetailsReviewsLocation/DetailsReviewsLocation';
import { Camper } from '@/types/camper';

// import Modal from '@/components/Modal/Modal';

import css from './CamperDetails.module.css';

type Props = {
  camper: Camper;
};

const CamperDetails = ({ camper }: Props) => {
  // Деструктуризація об'єкта camper для зручного доступу до його властивостей
  const {
    // id,
    name,
    price,
    // rating,
    // location,
    description,
    // form,
    // length,
    // width,
    // height,
    // tank,
    // consumption,
    // transmission,
    // engine,
    // amenities,
    gallery,
    // totalReviews,
  } = camper;
  // ==================================================================================
  // Відповідь запиту кемпера по ID (camperId) з app/catalog/[camperId]/page.tsx
  // =================================================================================
  // camper {
  //   id: 'cmqv06i160070yyxt0zaj0d7z',
  //   name: 'Ampere Roam 85',
  //   price: 15500,
  //   rating: 4.7,
  //   location: 'Ukraine, Odesa',
  //   description: 'The Ampere Roam 85 is our flagship electric motorhome — a fully integrated beast powered by a 105 kWh battery pack. Built for those who demand the best, it delivers a full suite of premium amenities inside a spacious integrated body, all with zero emissions. The silent, powerful drive redefines what a high-end motorhome can be.',
  //   form: 'integrated',
  //   length: '8.2m',
  //   width: '2.6m',
  //   height: '3.85m',
  //   tank: '105kWh',
  //   consumption: '35kWh/100km',
  //   transmission: 'automatic',
  //   engine: 'electric',
  //   amenities: [
  //     'ac',
  //     'bathroom',
  //     'kitchen',
  //     'tv',
  //     'radio',
  //     'refrigerator',
  //     'microwave',
  //     'water'
  //   ],
  //   createdAt: '2026-06-26T14:05:05.611Z',
  //   updatedAt: '2026-06-26T14:05:05.611Z',
  //   gallery: [
  //     {
  //       id: 'cmqv06i160071yyxtpl4vzghj',
  //       camperId: 'cmqv06i160070yyxt0zaj0d7z',
  //       thumb: 'https://ac.goit.global/fullstack/career/campers/wild-explorer/wild-explorer-1.jpg',
  //       original: 'https://ac.goit.global/fullstack/career/campers/wild-explorer/wild-explorer-1.jpg',
  //       order: 1
  //     },
  //   ],
  //   totalReviews: 2
  // }
  // ==================================================================================

  return (
    <>
      <div className={css.mainContainer}>
        <section className={css.topSection}>
          <div className={css.іmageThumbnails}>
            <div className={css.іmageWrapper}>
              <Image
                src={gallery[0].original || '/camper-no-photo.webp'}
                alt={'Camper original image'}
                width={638}
                height={505}
                className={css.originalImage}
                // fill
                // priority
              />
            </div>

            <ul className={css.thumbnailsContainer}>
              {gallery.map(image => (
                <li key={image.id} className={css.thumbnailItem}>
                  <Image
                    src={image.thumb || '/camper-no-photo.webp'}
                    alt={'Camper thumbnail image'}
                    width={136}
                    height={144}
                    className={css.thumbnailImage}
                    // fill
                    // priority
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={css.infoContainer}>
            <div className={css.headerDescription}>
              Header and Description
              <p className={css.name}>{name}</p>
              {/* <DetailsReviewsLocation camper={camper} /> */}
              <p className={css.price}>€{price}</p>
              <p className={css.description}>{description}</p>
            </div>
            <div>Technical Details</div>
          </div>
        </section>

        <section className={css.reviewsSection}>
          <h3>Title</h3>
          <div>Review Blocks Container</div>
        </section>

        {/* Фото */}
        {/* <div className={styles.imageWrapper}>
          <Image
            src={recipe.thumb || '/recipe-no-photo.webp'}
            alt={recipe.title}
            fill
            className={styles.image}
            priority
          />
        </div> */}
      </div>
    </>
  );
};

export default CamperDetails;
