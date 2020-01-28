import { NewsFeedItem } from './news-feed-item';

const RESOURCES = {
  NEWS: 'NEWS',
  NEWEST: 'NEWEST',
  ASK: 'ASK',
  SHOW: 'SHOW',
  JOBS: 'JOBS',
};
const URL = 'https://api.hnpwa.com/v0/$1/$2.json';

function buildUrl(resource: string, page: number): string {
    return URL.replace('$1', resource.toLowerCase()).replace('$2', String(page));
}

export default class NewsProvider {
    static GET_NEWS(page = 1): Promise<NewsFeedItem[]> {
        return fetch(buildUrl(RESOURCES.NEWS, page))
            .then(result => result.json());
    }

    static GET_NEWEST(page = 1): Promise<NewsFeedItem[]> {
        return fetch(buildUrl(RESOURCES.NEWS, page))
            .then(result => result.json());
    }

    static GET_ASK(page = 1): Promise<NewsFeedItem[]> {
        return fetch(buildUrl(RESOURCES.ASK, page))
            .then(result => result.json());
    }

    static GET_SHOW(page = 1): Promise<NewsFeedItem[]> {
        return fetch(buildUrl(RESOURCES.SHOW, page))
            .then(result => result.json());
    }

    static GET_JOBS(page = 1): Promise<NewsFeedItem[]> {
        return fetch(buildUrl(RESOURCES.JOBS, page))
            .then(result => result.json());
    }
};
