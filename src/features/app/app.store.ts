import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import { news } from '../news/news.reducer';

const reducers = combineReducers({
    news,
});

export const appStore = createStore(reducers, applyMiddleware(ReduxThunk));
