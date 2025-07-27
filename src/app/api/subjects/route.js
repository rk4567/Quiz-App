import { NextResponse } from 'next/server';
import questions from '../../../../public/data/questions.json';

export async function GET() {
  const subjects = questions.subjects.map(subject => ({
    name: subject.name,
    image: subject.image,
    questions: subject.questions,
  }));
  return NextResponse.json({ subjects });
}