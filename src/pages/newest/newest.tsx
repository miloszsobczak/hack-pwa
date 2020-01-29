import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewsList from '../../features/news/news-list/news-list';
import { NewsFeedItem } from '../../features/news/news-feed-item';
import { fetchNewest } from '../../features/news/news.action';
import { AppReduxState } from '../../features/app/app.reducer';

interface NewestPageProps {
    news: NewsFeedItem[],
    fetchNewest: typeof fetchNewest
}

export const NewestPageView: React.FC<NewestPageProps> = props => {
    useEffect(() => {
        if (!props.news.length) {
            props.fetchNewest();
        }
    });

    return (
        <>
            <h2>Newest</h2>
            <NewsList {...props}/>
        </>
    );
};

const mapStateToProps = (state: AppReduxState) => {
    return {
        news: state.newest,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return { fetchNewest: () => dispatch(fetchNewest()) };
};

export const NewestPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewestPageView));
