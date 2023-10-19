import { NextResponse } from "next/server";
import { prisma } from '../../../libs/prisma';

export async function GET (request, {params}) {
    const person = await prisma.person.findUnique({
        where: { person_id: params.id}
    });
    return NextResponse.json(person);
}

export async function PUT (request, {params}) {
    const { first_name, father_last_name, mother_last_name, gender, birthday } = await request.json();
    const updatedPerson = await prisma.person.update({
        where: { person_id: params.id},
        data: {
            first_name, father_last_name, mother_last_name, gender, birthday
        }
    })
    return NextResponse.json(updatedPerson);
}

export async function DELETE (request, {params}) {
    try {
        const person = await prisma.person.delete({
            where: { person_id: params.id}
        });
        return NextResponse.json(person);
    } catch(error) {
        return NextResponse.json(error.message);
    }    
}
