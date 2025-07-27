import { NextResponse } from 'next/server';
import questions from '../../../../../public/data/questions.json';

export async function GET(request, { params }) {
  const { subject } = params;
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get('difficulty');

  const subjectData = questions.subjects.find(
    s => s.name.toLowerCase() === subject.toLowerCase()
  );

  if (!subjectData) {
    return NextResponse.json({ error: 'Subject not found' }, { status: 404 });
  }

  let filteredQuestions = subjectData.questions;

  if (difficulty) {
    filteredQuestions = filteredQuestions.filter(
      q => q.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
  }

  return NextResponse.json({ questions: filteredQuestions });
}