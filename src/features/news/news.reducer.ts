import { NewsFeedItem } from './news-feed-item';

export const NEWS = {
    FETCH_SUCCESS: 'FETCH_NEWS_SUCCESS',
};

export const news = (state = [], action: {type: string, news: NewsFeedItem[]}) => {
    switch (action.type) {
        case NEWS.FETCH_SUCCESS:
            return [
                ...action.news
            ];
        default:
            return state;
    }
};
