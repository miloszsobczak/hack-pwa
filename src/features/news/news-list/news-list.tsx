import React, { Component } from 'react';
import { Item, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { NewsFeedItem } from '../news-feed-item';

export interface NewsListProps {
    news?: NewsFeedItem[]
}

export default class NewsList extends Component<NewsListProps> {
    get showLoading (): boolean {
        return !this.props.news || !this.props.news.length;
    }

    render() {
        return (
            <Segment padded={this.showLoading}>
                <Dimmer active={this.showLoading} inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                <Item.Group>
                    {this.props.news && this.props.news.map((newsItem: NewsFeedItem) => {
                        return (
                            <Item key={newsItem.id}>
                                <Item.Content>
                                    <Item.Header>{newsItem.title}</Item.Header>
                                    <Item.Extra as={'strong'}>{newsItem.time_ago}</Item.Extra>
                                    <Item.Extra as={'a'}>{newsItem.url}</Item.Extra>
                                </Item.Content>
                            </Item>
                        )
                    })}
                </Item.Group>
            </Segment>
        )
    }
}