import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';

import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { fetchAsk, fetchJobs, fetchNewest, fetchNews, fetchShow } from '../news/news.action';

const AppMenu: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <Menu text vertical fluid>
            <Menu.Item header>Hackernews</Menu.Item>
            <Menu.Item
                name='News'
                as={() => {
                    return (
                        <div className="item">
                            <Link to="/">News</Link>
                            <Button compact size={"mini"} floated={"right"}
                                    onClick={() => dispatch(fetchNews())}>refresh</Button>
                        </div>
                    );
                }}
            />
            <Menu.Item
                name='Newest'
                as={() => {
                    return (
                        <div className="item">
                            <Link to="/newest">Newest</Link>
                            <Button compact size={"mini"} floated={"right"}
                                    onClick={() => dispatch(fetchNewest())}>refresh</Button>
                        </div>
                    );
                }}
            />
            <Menu.Item
                name='Ask'
                as={() => {
                    return (
                        <div className="item">
                            <Link to="/ask">Ask</Link>
                            <Button compact size={"mini"} floated={"right"}
                                    onClick={() => dispatch(fetchAsk())}>refresh</Button>
                        </div>
                    );
                }}
            />
            <Menu.Item
                name='Show'
                as={() => {
                    return (
                        <div className="item">
                            <Link to="/show">Show</Link>
                            <Button compact size={"mini"} floated={"right"}
                                    onClick={() => dispatch(fetchShow())}>refresh</Button>
                        </div>
                    );
                }}
            />
            <Menu.Item
                name='Jobs'
                as={() => {
                    return (
                        <div className="item">
                            <Link to="/jobs">Jobs</Link>
                            <Button compact size={"mini"} floated={"right"}
                                    onClick={() => dispatch(fetchJobs())}>refresh</Button>
                        </div>
                    );
                }}
            />
        </Menu>
    )
};

export default AppMenu;