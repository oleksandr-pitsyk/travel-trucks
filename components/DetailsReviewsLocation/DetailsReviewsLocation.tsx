// =====================================================================================
// components/DetailsReviewsLocation —
// компонент відображення оцінок та локації кемперу.
// =====================================================================================

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

import css from './DetailsReviewsLocation.module.css';

// import toast from 'react-hot-toast';
// import { useState } from 'react';
// import { useQueryClient } from '@tanstack/react-query';

// import Modal from '@/components/Modal/Modal';
// import modalCss from '@/app/@modal/logout/ModalLogout.module.css';

import type { Camper } from '@/types/camper';

type DetailsReviewsLocationProps = {
  camper: Camper;
};

const DetailsReviewsLocation = ({ camper }: DetailsReviewsLocationProps) => {
  // Деструктуризация данных кемпера
  const { rating, location, totalReviews } = camper;

  return (
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
  );
};

export default DetailsReviewsLocation;
