import React from 'react';
import { Grid } from 'semantic-ui-react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './app.scss';
import AppMenu from '../app-menu/app-menu';
import { NewsPage, NewestPage, JobsPage, AskPage, ShowPage } from '../../pages';

export interface AppProps {
}

const App: React.FC<AppProps> = () => {
    return (
        <Router>
            <Grid rows={1} columns={2} padded={true}>
                <Grid.Row>
                  <Grid.Column width={2}>
                      <AppMenu/>
                  </Grid.Column>
                  <Grid.Column width={14}>
                      <Switch>
                          <Route path={['/', '/news']} exact>
                              <NewsPage />
                          </Route>
                          <Route path={'/newest'} exact>
                              <NewestPage />
                          </Route>
                          <Route path={'/jobs'} exact>
                              <JobsPage />
                          </Route>
                          <Route path={'/ask'} exact>
                              <AskPage />
                          </Route>
                          <Route path={'/show'} exact>
                              <ShowPage />
                          </Route>
                      </Switch>
                  </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    );
};

export const AppContainer = App;
