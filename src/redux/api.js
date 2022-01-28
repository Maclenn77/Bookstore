import { bookId } from "./books/books";

const appUrl = new URL('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PYDdIwdaCaC3OBHUB5QC/books/');

export const postBook = (id, title, category) => {
    const data = {
        id: bookId,
        title: title,
        category: category,
    }

    return data;
}

async export const getBooks = () => {
    const data = fetch(appUrl);
    return await data
}

async export const getBook = (id) {
  
}
