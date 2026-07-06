// ==============================================================================
// Компонент Header для всього додатку
// ==============================================================================

'use client';

import Link from 'next/link';
import Image from 'next/image';

import css from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <Link href="/" aria-label="Home" className={css.headerLink}>
          <Image
            src="/logo.svg"
            alt="TravelTrack logo"
            className={css.logoIcon}
            width={136}
            height={16}
            priority
          />
        </Link>

        <nav aria-label="Main Navigation" className={css.nav}>
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link href="/" className={css.navigationLink}>
                Home
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link href="/catalog" className={css.navigationLink}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
