// ======================================================================================
// /catalog/[camperId] — сторінка окремого кемпера.
// ======================================================================================
// На цій сторінці потрібно показати детальну інформацію про кемпер,
// галерею зображень, відгуки користувачів і форму бронювання.
// --------------------------------------------------------------------------------------

// import Image from 'next/image';
// import styles from './page.module.css';

import { getCamperById } from '../../../lib/api/clientApi';
import CamperDetails from '../../../components/CamperDetails/CamperDetails';

type Props = {
  params: Promise<{ camperId: string }>;
};

const CamperViewPage = async ({ params }: Props) => {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);
  console.log('camper', camper);

  return <CamperDetails camper={camper} />;
};

export default CamperViewPage;
