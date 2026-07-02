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
  gallery: [
    {
      id: string;
      camperId: string;
      thumb: string;
      original: string;
      order: number;
    },
  ];
  createdAt: string;
  updatedAt: string;
}

// ==========================================================================================
// Recipe :
// ingredients: {
//   id: string;
//   measure: string;
// }[];
