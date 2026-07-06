// ==========================================================================================
// Інтерфейс для типізації camper
// ==========================================================================================
// Інформація з бази даних видається GET /campers
// "campers":
//   {
//     "id": "string",
//     "name": "string",
//     "price": 0,
//     "rating": 0,
//     "location": "string",
//     "form": "alcove",
//     "length": "string",
//     "width": "string",
//     "height": "string",
//     "tank": "string",
//     "consumption": "string",
//     "transmission": "automatic",
//     "engine": "diesel",
//     "amenities": [
//       "ac",
//       "bathroom",
//       "kitchen",
//       "tv",
//       "radio",
//       "refrigerator",
//       "microwave",
//       "gas",
//       "water"
//     ],
//     "coverImage": "string",
//     "totalReviews": 0
//   }

// По факту:
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

// =========================================================================================
// GET /campers/{camperId}
// {
//   "id": "string",
//   "name": "string",
//   "price": 0,
//   "rating": 0,
//   "totalReviews": 0,
//   "location": "string",
//   "description": "string",
//   "form": "alcove",
//   "length": "string",
//   "width": "string",
//   "height": "string",
//   "tank": "string",
//   "consumption": "string",
//   "transmission": "automatic",
//   "engine": "diesel",
//   "amenities": "ac",
//   "gallery": [
//     {
//       "id": "string",
//       "camperId": "string",
//       "thumb": "string",
//       "original": "string",
//       "order": 0
//     }
//   ],
//   "createdAt": "2026-07-02T03:31:11.050Z",
//   "updatedAt": "2026-07-02T03:31:11.050Z"
// }

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

// ==========================================================================================

import { CamperForm, CamperEngine, CamperAmenities, CamperTransmission } from './filter';

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: CamperTransmission;
  engine: CamperEngine;
  amenities: CamperAmenities[];
  gallery: {
    id: string;
    camperId: string;
    thumb: string;
    original: string;
    order: number;
  }[];
  coverImage: string;
  createdAt: string;
  updatedAt: string;
}

export interface CampersResponse {
  id: string;
  name: string;
  price: number;
  rating: 0;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: CamperAmenities[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;
}

// То, что возвращает запрос /campers
// {
//   id: 'cmqv06i3e00apyyxtr3g5pnf1',
//   name: 'Apex Hybrid Liner',
//   price: 15000,
//   rating: 4.7,
//   location: 'Ukraine, Odesa',
//   description: 'The Apex Hybrid Liner is a flagship hybrid integrated motorhome that sets the standard for long-distance comfort. Its efficient hybrid powertrain cuts fuel costs dramatically on extended tours, while the premium interior — full kitchen, entertainment system, and spacious bathroom — delivers a truly first-class experience.',
//   form: 'integrated',
//   length: '8.8m',
//   width: '2.65m',
//   height: '3.95m',
//   tank: '280l',
//   consumption: '22l/100km',
//   transmission: 'automatic',
//   engine: 'hybrid',
//   amenities: [Array],
//   createdAt: '2026-06-26T14:05:05.690Z',
//   updatedAt: '2026-06-26T14:05:05.690Z',
//   coverImage: 'https://ac.goit.global/fullstack/career/campers/road-bear-a-30-32/road-bear-a-30-32-1.jpg',
//   totalReviews: 2
// },

// ==========================================================================================
// Recipe :
// ingredients: {
//   id: string;
//   measure: string;
// }[];
