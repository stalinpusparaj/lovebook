import React from 'react';
import dynamic from 'next/dynamic';

const BookEditor = dynamic(() => import('@/components/editor/BookEditor'), {
  ssr: false, // Disable server-side rendering for drag-and-drop functionality
});

interface EditorPageProps {
  searchParams: { id?: string };
}

export default function EditorPage({ searchParams }: EditorPageProps) {
  return (
    <div>
      <BookEditor bookId={searchParams.id} />
    </div>
  );
} 