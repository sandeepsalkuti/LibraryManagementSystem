var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: {type: Date, default: Date.now},
},{collection:'user-data'});
/**
 * @class Book
 * @typeof Model<BookSchema>
 */
const Book = mongoose.model('UserData',BookSchema);
module.exports = Book;
