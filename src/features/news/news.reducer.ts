import { NewsFeedItem } from './news-feed-item';

export const NEWS = {
    FETCH_SUCCESS: 'FETCH_NEWS_SUCCESS',
};

export const NEWEST = {
    FETCH_SUCCESS: 'FETCH_NEWEST_SUCCESS',
};

export const ASK = {
    FETCH_SUCCESS: 'FETCH_ASK_SUCCESS',
};

export const JOB = {
    FETCH_SUCCESS: 'FETCH_JOB_SUCCESS',
};

export const SHOW = {
    FETCH_SUCCESS: 'FETCH_SHOW_SUCCESS',
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

export const newest = (state = [], action: {type: string, news: NewsFeedItem[]}) => {
    switch (action.type) {
        case NEWEST.FETCH_SUCCESS:
            return [
                ...action.news
            ];
        default:
            return state;
    }
};

export const ask = (state = [], action: {type: string, news: NewsFeedItem[]}) => {
    switch (action.type) {
        case ASK.FETCH_SUCCESS:
            return [
                ...action.news
            ];
        default:
            return state;
    }
};

export const jobs = (state = [], action: {type: string, news: NewsFeedItem[]}) => {
    switch (action.type) {
        case JOB.FETCH_SUCCESS:
            return [
                ...action.news
            ];
        default:
            return state;
    }
};

export const show = (state = [], action: {type: string, news: NewsFeedItem[]}) => {
    switch (action.type) {
        case SHOW.FETCH_SUCCESS:
            return [
                ...action.news
            ];
        default:
            return state;
    }
};
