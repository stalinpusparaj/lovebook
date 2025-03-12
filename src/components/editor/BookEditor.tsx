"use client";

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useUser } from '@clerk/nextjs';
import { createBook, updateBook, getBook } from '@/lib/db';
import type { Book } from '@/lib/db';

interface Page {
  id: string;
  content: string;
  illustration?: string;
  order: number;
}

interface BookEditorProps {
  bookId?: string;
}

export default function BookEditor({ bookId }: BookEditorProps) {
  const { user } = useUser();
  const [title, setTitle] = useState('Untitled Book');
  const [pages, setPages] = useState<Page[]>([
    { id: '1', content: 'First page of your love story...', order: 0 },
  ]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (bookId) {
      loadBook();
    }
  }, [bookId]);

  const loadBook = async () => {
    if (!bookId) return;
    try {
      const book = await getBook(bookId);
      if (book) {
        setTitle(book.title);
        setPages(book.pages);
      }
    } catch (error) {
      console.error('Error loading book:', error);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    try {
      const bookData: Omit<Book, 'id'> = {
        userId: user.id,
        title,
        pages,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      if (bookId) {
        await updateBook(bookId, bookData);
      } else {
        await createBook(bookData);
      }
    } catch (error) {
      console.error('Error saving book:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(pages);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update order numbers
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setPages(updatedItems);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-2"
            placeholder="Enter book title..."
          />
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 disabled:bg-indigo-300"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="pages">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-4"
              >
                {pages.map((page, index) => (
                  <Draggable key={page.id} draggableId={page.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-gray-50 p-6 rounded-lg shadow-sm"
                      >
                        <textarea
                          className="w-full min-h-[200px] p-4 border rounded-md"
                          value={page.content}
                          onChange={(e) => {
                            const newPages = [...pages];
                            newPages[index].content = e.target.value;
                            setPages(newPages);
                          }}
                          placeholder="Write your story..."
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <button
          onClick={() => setPages([...pages, { 
            id: String(pages.length + 1), 
            content: '', 
            order: pages.length 
          }])}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
        >
          Add Page
        </button>
      </div>
    </div>
  );
} 