import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewsList from '../../features/news/news-list/news-list';
import { NewsFeedItem } from '../../features/news/news-feed-item';
import { fetchNews } from '../../features/news/news.action';
import { AppReduxState } from '../../features/app/app.reducer';

interface NewsPageProps {
    news: NewsFeedItem[],
    fetchNews: typeof fetchNews
}

export const NewsPageView: React.FC<NewsPageProps> = props => {
    useEffect(() => {
        if (!props.news.length) {
            props.fetchNews();
        }
    });

    return (
        <>
            <h2>News</h2>
            <NewsList {...props}/>
        </>
    );
};

const mapStateToProps = (state: AppReduxState) => {
    return {
        news: state.news,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return { fetchNews: () => dispatch(fetchNews()) };
};

export const NewsPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsPageView));