const faker = require('faker');
const fs = require('fs');

const books = [];

// Generate random books
for (let i = 0; i < 30; i++) {
  const book = {
    id: i+1,
    title: faker.lorem.words(),
    author: faker.name.findName(),
    image: faker.image.imageUrl(),
    description: faker.lorem.paragraph(),
    userId: null,
  };

  books.push(book);
}

// Wrap the books array inside an object
const data = {
  books: books
};

// Write data object to JSON file
const jsonContent = JSON.stringify(data, null, 2);
fs.writeFileSync('books.json', jsonContent);

console.log('Books file generated successfully!');
