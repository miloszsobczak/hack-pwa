import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewsList from '../../features/news/news-list/news-list';
import { NewsFeedItem } from '../../features/news/news-feed-item';
import { fetchJobs } from '../../features/news/news.action';
import { AppReduxState } from '../../features/app/app.reducer';

interface JobsPageProps {
    news: NewsFeedItem[],
    fetchJobs: typeof fetchJobs
}

export const JobsPageView: React.FC<JobsPageProps> = props => {
    useEffect(() => {
        if (!props.news.length) {
            props.fetchJobs();
        }
    });

    return (
        <>
            <h2>Jobs</h2>
            <NewsList {...props}/>
        </>
    );
};

const mapStateToProps = (state: AppReduxState) => {
    return {
        news: state.jobs,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return { fetchJobs: () => dispatch(fetchJobs()) };
};

export const JobsPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobsPageView));