import { NextResponse } from 'next/server';
import { api, ApiError } from '../../api';
// import { cookies } from 'next/headers';

type Props = {
  params: Promise<{ camperId: string }>;
};

// GET campers/:camperId — детальна інфо по кемперу (публічний маршрут)
export async function GET(_request: Request, { params }: Props) {
  try {
    const { camperId } = await params;
    const res = await api.get(`/campers/${camperId}`);
    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: (error as ApiError).response?.data?.error ?? (error as ApiError).message },
      { status: (error as ApiError).status }
    );
  }
}


