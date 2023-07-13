const faker = require('faker');
const fs = require('fs');

const books = [];

// Generate random books
for (let i = 0; i < 10; i++) {
  const book = {
    title: faker.lorem.words(),
    author: faker.name.findName(),
    image: faker.image.imageUrl(),
    description: faker.lorem.paragraph()
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
