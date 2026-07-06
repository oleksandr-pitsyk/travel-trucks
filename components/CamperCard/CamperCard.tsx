// =====================================================================================
// components/CamperCard — компонент картки кемпера.
// =====================================================================================

'use client';

import Image from 'next/image';
import Link from 'next/link';

import css from './CamperCard.module.css';

// import toast from 'react-hot-toast';
// import { useState } from 'react';
// import { useQueryClient } from '@tanstack/react-query';

// import Modal from '@/components/Modal/Modal';
// import modalCss from '@/app/@modal/logout/ModalLogout.module.css';

import type { Camper } from '@/types/camper';
// import DetailsReviewsLocation from '../DetailsReviewsLocation/DetailsReviewsLocation';

type CamperCardProps = {
  camper: Camper;
};

const CamperCard = ({ camper }: CamperCardProps) => {
  // Деструктуризация данных кемпера
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    form,
    transmission,
    engine,
    coverImage,
    totalReviews,
  } = camper;

  // id: string;
  //   name: string;
  //   price: number;
  //   rating: 0;
  //   location: string;
  //   description: string;
  //   form: string;
  //   length: string;
  //   width: string;
  //   height: string;
  //   tank: string;
  //   // consumption: string;
  //   transmission: string;
  //   engine: string;
  //   amenities: CamperAmenities[];
  //   coverImage: string;
  //   totalReviews: number;

  //   {
  //   id: 'cmqv06i1s007zyyxt53zaqvs0',
  //   name: 'Basecamp Alcove 26H',
  //   price: 11000,
  //   rating: 4.5,
  //   location: 'Ukraine, Lviv',
  //   description: 'The Basecamp Alcove 26H is a hybrid-powered alcove motorhome that blends eco-efficiency with classic comfort. Its spacious layout and full amenity set make it a top pick for families wanting to reduce their footprint without giving up the conveniences of a well-equipped home on wheels.',
  //   form: 'alcove',
  //   length: '7.2m',
  //   width: '2.6m',
  //   height: '3.65m',
  //   tank: '185l',
  //   consumption: '20l/100km',
  //   transmission: 'automatic',
  //   engine: 'hybrid',
  //   amenities: [
  //     'ac',
  //     'bathroom',
  //     'kitchen',
  //     'tv',
  //     'radio',
  //     'refrigerator',
  //     'microwave',
  //     'gas',
  //     'water'
  //   ],
  //   createdAt: '2026-06-26T14:05:05.632Z',
  //   updatedAt: '2026-06-26T14:05:05.632Z',
  //   coverImage: 'https://ac.goit.global/fullstack/career/campers/mighty-class-c-large-mt/mighty-class-c-large-mt-1.jpg',
  //   totalReviews: 2
  // }

  return (
    <>
      <article className={css.card}>
        {/* <div className={css.imageContainer}> */}
        <Image
          src={coverImage || '/camper-no-photo.webp'}
          alt={name}
          width={219}
          height={240}
          loading="eager"
          // sizes="(max-width: 767px) 337px, (max-width: 1439px) 315px, 264px"
          className={css.cardImage}
        />
        {/* </div> */}

        <div className={css.cardInfo}>
          <div className={css.header}>
            <div className={css.title}>
              <p className={css.name}>{name}</p>
              <p className={css.price}>€{price}</p>
            </div>
            {/* <DetailsReviewsLocation camper={camper} /> */}
            <div className={css.details}>
              <div className={css.reviews}>
                <svg className={css.icon} aria-hidden="true">
                  <use href="/star-full.svg" />
                </svg>
                <span className={css.rating}>{rating}</span>
                <span className={css.reviews}>({totalReviews} Reviews)</span>
              </div>
              <div className={css.location}>
                <svg className={css.icon} aria-hidden="true">
                  <use href="/map.svg" />
                </svg>
                <span className={css.location}>{location}</span>
              </div>
            </div>
          </div>

          <p className={css.description}>{description}</p>

          <div className={css.badgesContainer}>
            <span className={css.badges}>{engine}</span>
            <span className={css.badges}>{transmission}</span>
            <span className={css.badges}>{form}</span>
          </div>
          <div className={css.btnContainer}>
            <Link href={`/catalog/${id}`} className={css.moreBtn}>
              Show more
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default CamperCard;
