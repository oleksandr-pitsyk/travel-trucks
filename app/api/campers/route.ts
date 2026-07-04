// ===========================================================================================
// Файл route.ts повинен експортувати функції з назвами, що збігаються з HTTP-методами,
// які ми хочемо обробляти (GET, POST, PUT тощо).
// ===========================================================================================

// Імпортуємо необхідні модулі та типи
// NextResponse – це розширення стандартного Web Response з додатковими методами Next.js
// і дозволяє легко повертати JSON-дані.
import { NextResponse } from 'next/server';
// import { isAxiosError } from 'axios';
import { api, ApiError } from '../api';

// GET /campers — отримання списку рецептів з можливістю фільтрації та пагінації
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const { data } = await api(`/campers?${searchParams.toString()}`);

    // Повертаємо те, що відповів бекенд через метод json
    return NextResponse.json(data);
  } catch (error) {
    // У випадку помилки — повертаємо обʼєкт з помилкою
    return NextResponse.json(
      {
        error: (error as ApiError).response?.data?.error ?? (error as ApiError).message,
      },
      { status: (error as ApiError).status }
    );
  }
}
