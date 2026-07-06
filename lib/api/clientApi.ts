// ==========================================================================================
// Функції для виконання HTTP-запитів
// ==========================================================================================

import { nextServer } from './api';
import { isAxiosError } from 'axios';

// Імпорт інтерфейсів
import type { Camper } from '@/types/camper';
// import type { CamperEngine, CamperForm, CamperTransmission } from '@/types/filter';

// *********************************************************************************
// Робота з кемпером
// *********************************************************************************
// Типізація відповіді Get-запиту від Axios
// ==========================================================================================
// getCategories : виконує запит для отримання колекції категорій із сервера.
// ==========================================================================================
// Структура запиту :

// interface getCategoriesResponse {
//   categories: Category[];
// }

// export async function getCategories(): Promise<Category[]> {
//   // Виконуємо HTTP-запит
//   const response = await nextServer.get<getCategoriesResponse>('/categories');

//   // Повертаємо значення відповіді
//   return response.data.categories;
// }

// *********************************************************************************
// Робота з кемперами
// *********************************************************************************

// ==========================================================================================
// getCampers : виконує запит для отримання колекції кемперів із сервера.
// ==========================================================================================
// Структура запиту :
// ------------------------------------------------------------------------------------------
// page=1
// Page number - Номер сторінки для пагінації
// ------------------------------------------------------------------------------------------
// perPage=4
// Notes per page - Кількість на сторінці
// ------------------------------------------------------------------------------------------
// location (string)
// Location substring (case-insensitive) - Location - Місце розташування кемпера
// ------------------------------------------------------------------------------------------
// form (string)
// Vehicle type / body form
// Available values : alcove, panel_van, integrated, semi_integrated
// ------------------------------------------------------------------------------------------
// transmission (string)
// Transmission type (exact match)
// Available values : automatic, manual
// ------------------------------------------------------------------------------------------
// engine (string)
// Engine type (exact match)
// Available values : diesel, petrol, hybrid, electric
// ------------------------------------------------------------------------------------------

// Типізація відповіді Get-запиту від Axios - колекція кемперов - згідно структури бекенда :
interface GetCampersHttpResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[]; // Відповідь містить масив камперів у властивості campers
}

export async function getCampers(
  page: number = 1,
  perPage: number = 4,
  location?: string,
  form?: string,
  transmission?: string,
  engine?: string
): Promise<GetCampersHttpResponse> {
  try {
    // Параметри запиту
    const options = {
      params: {
        page,
        perPage,
        location,
        form,
        transmission,
        engine,
      },
    };
    // Виконуємо HTTP-запит
    const response = await nextServer.get<GetCampersHttpResponse>('/campers', options);
    // Повертаємо значення data відповіді
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return { page, perPage, total: 0, totalPages: 0, campers: [] };
    }
    throw error;
  }
}

// ==========================================================================================
// getCamperById : виконує запит для отримання кемпера за його ID.
// ==========================================================================================
// Структура запиту :

// Типізація відповіді Get-запиту від Axios - один рецепт за Id - згідно структури бекенда :
// interface GetCamperByIdHttpResponse {
//   camper: Camper; // Відповідь містить обʼєкт кемпера у властивості camper
// }

export async function getCamperById(camperId: string): Promise<Camper> {
  try {
    const response = await nextServer.get<Camper>(`/campers/${camperId}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      throw new Error('Camper not found');
    }
    throw error;
  }
}

// export async function getRecipeById(recipeId: string): Promise<GetRecipeHttpResponse> {
//   // Щойно створений рецепт може бути ще не видимим одразу,
//   // тому на 404 робимо кілька повторних спроб з невеликою затримкою.
//   const maxAttempts = 3;

//   for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//     try {
//       const response = await nextServer.get<GetRecipeHttpResponse>(`/recipes/${recipeId}`);
//       return response.data;
//     } catch (error) {
//       const isLastAttempt = attempt === maxAttempts;
//       const is404 = isAxiosError(error) && error.response?.status === 404;

//       if (is404 && !isLastAttempt) {
//         await new Promise(resolve => setTimeout(resolve, 400));
//         continue;
//       }

//       throw error;
//     }
//   }
//   // недосяжний рядок — цикл або повертає, або кидає
//   throw new Error('Recipe not found');

// }
