import { NewsFeedItem } from './news-feed-item';
import { NEWS } from './news.reducer';
import NewsProvider from './news.provider';
import { Dispatch } from 'redux';

export const newsFetched = (news: NewsFeedItem[]) => ({
    type: NEWS.FETCH_SUCCESS,
    news,
});

export const fetchNews = () => async (dispatch: Dispatch) => {
    const news = await NewsProvider.GET_NEWS(1);
    dispatch(newsFetched(news));
};
