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

export interface Book {
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
}

// Create a new book
export async function createBook(book: Omit<Book, 'id'>) {
  try {
    const docRef = await addDoc(collection(db, 'books'), {
      ...book,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { id: docRef.id, ...book };
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
}

// Get a book by ID
export async function getBook(bookId: string) {
  try {
    const docRef = doc(db, 'books', bookId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Book;
    }
    return null;
  } catch (error) {
    console.error('Error getting book:', error);
    throw error;
  }
}

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
export async function updateBook(bookId: string, data: Partial<Book>) {
  try {
    const docRef = doc(db, 'books', bookId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date(),
    });
    return true;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
}

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