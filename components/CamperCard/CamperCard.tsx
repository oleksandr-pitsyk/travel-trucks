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

import type { CampersResponse } from '@/types/camper';
// import DetailsReviewsLocation from '../DetailsReviewsLocation/DetailsReviewsLocation';

type CamperCardProps = {
  camper: CampersResponse;
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

  return (
    <>
      <article className={css.card}>
        {/* <div className={css.imageContainer}> */}
        <Image
          src={coverImage || '/camper-no-photo.webp'}
          alt={name}
          width={219}
          height={240}
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
