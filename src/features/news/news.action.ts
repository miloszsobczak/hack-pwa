import { NewsFeedItem } from './news-feed-item';
import { NEWS, NEWEST, ASK, JOB, SHOW } from './news.reducer';
import NewsProvider from './news.provider';
import { Dispatch } from 'redux';

export const newsFetched = (news: NewsFeedItem[]) => ({
    type: NEWS.FETCH_SUCCESS,
    news,
});

export const newestFetched = (news: NewsFeedItem[]) => ({
    type: NEWEST.FETCH_SUCCESS,
    news,
});

export const askFetched = (news: NewsFeedItem[]) => ({
    type: ASK.FETCH_SUCCESS,
    news,
});

export const jobsFetched = (news: NewsFeedItem[]) => ({
    type: JOB.FETCH_SUCCESS,
    news,
});

export const showFetched = (news: NewsFeedItem[]) => ({
    type: SHOW.FETCH_SUCCESS,
    news,
});

export const fetchNews = () => async (dispatch: Dispatch) => {
    const news = await NewsProvider.GET_NEWS(1);
    dispatch(newsFetched(news));
};

export const fetchNewest = () => async (dispatch: Dispatch) => {
    const news = await NewsProvider.GET_NEWEST(1);
    dispatch(newestFetched(news));
};

export const fetchJobs = () => async (dispatch: Dispatch) => {
    const news = await NewsProvider.GET_JOBS(1);
    dispatch(jobsFetched(news));
};

export const fetchAsk = () => async (dispatch: Dispatch) => {
    const news = await NewsProvider.GET_ASK(1);
    dispatch(askFetched(news));
};

export const fetchShow = () => async (dispatch: Dispatch) => {
    const news = await NewsProvider.GET_SHOW(1);
    dispatch(showFetched(news));
};
