import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewsList from '../../features/news/news-list/news-list';
import { NewsFeedItem } from '../../features/news/news-feed-item';
import { fetchShow } from '../../features/news/news.action';
import { AppReduxState } from '../../features/app/app.reducer';

interface ShowPageProps {
    news: NewsFeedItem[],
    fetchShow: typeof fetchShow
}

export const ShowPageView: React.FC<ShowPageProps> = props => {
    useEffect(() => {
        if (!props.news.length) {
            props.fetchShow();
        }
    });

    return (
        <>
            <h2>Show</h2>
            <NewsList {...props}/>
        </>
    );
};

const mapStateToProps = (state: AppReduxState) => {
    return {
        news: state.show,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return { fetchShow: () => dispatch(fetchShow()) };
};

export const ShowPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowPageView));
