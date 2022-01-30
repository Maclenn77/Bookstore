const apiUrl = new URL('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PYDdIwdaCaC3OBHUB5QC/books/');
const itemURL = (id) => `${apiUrl}${id}`;

export const postBook = async (book) => {
  const data = {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });

  return response.ok;
};

export const getBooks = async () => {
  const data = await fetch(apiUrl).then((response) => response.json());
  return data;
};

export const deleteBook = async (id) => {
  const data = {
    item_id: id,
  };

  const response = await fetch(itemURL(id), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });

  return response;
};

export default { postBook, deleteBook, getBooks };
