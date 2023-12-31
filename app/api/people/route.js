import { NextResponse } from "next/server";

import { prisma } from '../../libs/prisma';

export async function GET (request) {
  const page = Number(request.nextUrl.searchParams.get('page'));
  const limit = Number(request.nextUrl.searchParams.get('limit'));
  const count = await prisma.person.aggregate({
    _count: {
      person_id: true,
    },
  })
  const people =  await prisma.person.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      first_name: 'asc',
    },
  });
  return NextResponse.json({items: people, total: count._count.person_id});
}

export async function POST (request) {
  const { first_name, father_last_name, mother_last_name, gender, birthday } = await request.json();
  const newPerson = await prisma.person.create({
    data: {
      first_name, father_last_name, mother_last_name, gender, birthday
    }
  })
  return NextResponse.json(newPerson);
}

export async function DELETE (request) {
  try {
    const ids = request.nextUrl.searchParams.getAll('id');
    const result = await prisma.person.deleteMany({
        where: { person_id: { in: ids } }
    });
    return NextResponse.json(result);
  } catch(error) {
    return NextResponse.json(error.message);
  }
}
