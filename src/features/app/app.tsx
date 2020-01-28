import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './app.scss';
import { AppReduxState } from './app.reducer';

import AppMenu from '../app-menu/app-menu';
import NewsList from '../news/news-list/news-list';
import { NewsFeedItem } from '../news/news-feed-item';
import { fetchNews } from '../news/news.action';

export interface AppProps {
    news: NewsFeedItem[],
    fetchNews: typeof fetchNews
}

const App: React.FC<AppProps> = props => {
    useEffect(() => {
        if (!props.news.length) {
            props.fetchNews();
        }
    }, []);

    return (
        <Grid rows={1} columns={2} padded={true}>
            <Grid.Row>
              <Grid.Column width={2}>
                  <AppMenu/>
              </Grid.Column>
              <Grid.Column width={14}>
                  <NewsList news={props.news}/>
              </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const mapStateToProps = (state: AppReduxState) => {
    console.log(state);
    return {
        news: state.news,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return { fetchNews: () => dispatch(fetchNews()) };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
