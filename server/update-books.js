const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
// Function to fetch books from Google Books API
async function fetchBooksFromAPI() {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=*&maxResults=30&key=${apiKey}`);
        let id = 1;
        return response.data.items.map(item => ({
            id: id++,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
            image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
            description: item.volumeInfo.description,
            userId: null
        }));
    } catch (error) {
        console.error('Error fetching books from Google Books API:', error);
        return [];
    }
}

// Function to write data to JSON file
function writeDataToFile(data) {
    const jsonData = JSON.stringify({ books: data }, null, 2);

    // Write to books.json in server directory
    const serverFilePath = path.join(__dirname, 'books.json');
    fs.writeFileSync(serverFilePath, jsonData);
    console.log('Books file updated successfully in server directory.');

    // Write to src/assets/books.json
    const assetsFilePath = path.join(__dirname, '..', 'src', 'assets', 'books.json');
    fs.writeFileSync(assetsFilePath, jsonData);
    console.log('Books file updated successfully in src/assets directory.');
}

// Fetch books from API and write them to books.json file
fetchBooksFromAPI().then(books => {
    writeDataToFile(books);
});
