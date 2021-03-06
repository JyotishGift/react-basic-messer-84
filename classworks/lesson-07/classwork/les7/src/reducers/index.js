import {combineReducers} from 'redux';

import selectedbookReducer from './reducer_selectedbook';
import booksReducer from './reducer_books';


const rootReducer = combineReducers({
  selectedbook: selectedbookReducer,
  books: booksReducer
});

export default rootReducer