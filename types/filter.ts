// ==========================================================================================
// Інтерфейси для типізації фільтрації
// ==========================================================================================
// Згідно документації Swagger :
// GET /campers/filters
// ------------------------------------------------------------------------------------------
// "forms": [
//   "alcove",
//   "panel_van",
//   "integrated",
//   "semi_integrated"
// ],
// "transmissions": [
//   "automatic",
//   "manual"
// ],
// "engines": [
//   "diesel",
//   "petrol",
//   "hybrid",
//   "electric"
// ]
// ------------------------------------------------------------------------------------------

// ==========================================================================================
export type CamperForm = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';

export type CamperTransmission = 'automatic' | 'manual';

export type CamperEngine = 'diesel' | 'petrol' | 'hybrid' | 'electric';

export type CamperAmenities =
  | 'ac'
  | 'bathroom'
  | 'kitchen'
  | 'tv'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water';
// ==========================================================================================
