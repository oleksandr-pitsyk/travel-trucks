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
  amenities: CamperAmenities;
  gallery: {
    id: string;
    camperId: string;
    thumb: string;
    original: string;
    order: number;
  }[];
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
