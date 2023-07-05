const APIKey = "AIzaSyDwh0AD3E9ZNZkZnyedIhFDWTxsnBBVgcg";

export const getBooksBySearchTerm = async (searchTerm = "") => {
  // const searchTermModified = searchTerm.split().join('+');

  // demo: GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${APIKey}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await response.json();

  const books = data.items.map((item) => item["volumeInfo"]);

  if (books.length === 0) {
    throw new Error("No books found");
  }

  return books;
};

// let testData = getBooksBySearchTerm("harry potter");
// testData
//   .then((books) => {
//     console.log(books);
//   })
//   .catch((e) => {
//     // error or rejected value
//     console.log(e);
//   });
