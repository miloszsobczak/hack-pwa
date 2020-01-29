import { NewsFeedItem } from '../news/news-feed-item';

export interface AppReduxState {
    news: NewsFeedItem[],
    newest: NewsFeedItem[],
    jobs: NewsFeedItem[],
    show: NewsFeedItem[],
    ask: NewsFeedItem[],
}
