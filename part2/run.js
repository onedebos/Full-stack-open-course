const books = [
  {
    title: 'Books by Nigerian authors',
    // An array of books in shelves
    shelves: [
      {
        id: 1,
        category: 'Fiction',
        title: 'Things fall Apart',
        author: 'Chinua Achebe',
      },
      {
        id: 2,
        category: 'Drama',
        title: 'Under the Udala trees',
        author: 'Chinelo Okparanta',
      },
    ],
  },
];

const displayCategories = books.map((book) => book.shelves.map((shelf) => shelf.category));

// console.log(displayIDs);
// books[1].sections[0].id
console.log(displayTitles);
