import { db } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

export type Book = {
  id?: string;
  userId: string;
  title: string;
  pages: Array<{
    id: string;
    content: string;
    illustration?: string;
    order: number;
  }>;
  createdAt: Date;
  updatedAt: Date;
};

// Create a new book
export const createBook = async (bookData: Omit<Book, 'id'>) => {
  return addDoc(collection(db, 'books'), bookData);
};

// Get a book by ID
export const getBook = async (id: string) => {
  const bookRef = doc(db, 'books', id);
  const bookSnap = await getDoc(bookRef);
  if (bookSnap.exists()) {
    return { id: bookSnap.id, ...bookSnap.data() } as Book;
  }
  return null;
};

// Get all books for a user
export async function getUserBooks(userId: string) {
  try {
    const q = query(
      collection(db, 'books'),
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Book[];
  } catch (error) {
    console.error('Error getting user books:', error);
    throw error;
  }
}

// Update a book
export const updateBook = async (id: string, bookData: Partial<Book>) => {
  const bookRef = doc(db, 'books', id);
  return updateDoc(bookRef, bookData);
};

// Delete a book
export async function deleteBook(bookId: string) {
  try {
    const docRef = doc(db, 'books', bookId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
} 