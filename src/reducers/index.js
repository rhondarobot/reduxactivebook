import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBook from './active_book';

const rootReducer = combineReducers({
  books: BooksReducer,  // <- key of books and a value of an array of books
  activeBook: ActiveBook
});

export default rootReducer;
