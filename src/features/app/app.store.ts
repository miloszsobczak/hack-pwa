import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import { news, newest, ask, jobs, show } from '../news/news.reducer';

const reducers = combineReducers({
    news,
    newest,
    ask,
    jobs,
    show
});

export const appStore = createStore(reducers, applyMiddleware(ReduxThunk));
