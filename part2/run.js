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

const countries = [
  {
    alpha2Code: "NG"
    ​
    alpha3Code: "NGA"
    ​
    altSpellings: Array(4) [ "NG", "Nijeriya", "Naíjíríà", … ]
    ​
    area: 923768
    ​
    borders: Array(4) [ "BEN", "CMR", "TCD", … ]
    ​
    callingCodes: Array [ "234" ]
    ​
    capital: "Abuja"
    ​
    cioc: "NGR"
    ​
    currencies: Array [ {…} ]
    ​
    demonym: "Nigerian"
    ​
    flag: "https://restcountries.eu/data/nga.svg"
    ​
    gini: 48.8
    ​
    languages: Array [ {…} ]
    ​
    latlng: Array [ 10, 8 ]
    ​
    name: "Nigeria"
    ​
    nativeName: "Nigeria"
    ​
    numericCode: "566"
    ​
    population: 186988000
    ​
    region: "Africa"
    ​
  },
];

const displayCategories = books.map(book =>
  book.shelves.map(shelf => shelf.category),
);

// console.log(displayIDs);
// books[1].sections[0].id
console.log(countries[0].name);
