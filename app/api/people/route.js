import { NextResponse } from "next/server";

import { prisma } from '../../libs/prisma';

export async function GET () {
  const people =  await prisma.person.findMany();
  return NextResponse.json(people);
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
