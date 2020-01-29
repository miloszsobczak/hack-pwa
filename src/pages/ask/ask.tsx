import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewsList from '../../features/news/news-list/news-list';
import { NewsFeedItem } from '../../features/news/news-feed-item';
import { fetchAsk } from '../../features/news/news.action';
import { AppReduxState } from '../../features/app/app.reducer';


interface AskPageProps {
    news: NewsFeedItem[],
    fetchAsk: typeof fetchAsk
}

export const AskPageView: React.FC<AskPageProps> = props => {
    useEffect(() => {
        if (!props.news.length) {
            props.fetchAsk();
        }
    });

    return (
        <>
            <h2>Ask</h2>
            <NewsList {...props}/>
        </>
    );
};

const mapStateToProps = (state: AppReduxState) => {
    return {
        news: state.ask,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return { fetchAsk: () => dispatch(fetchAsk()) };
};

export const AskPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(AskPageView));