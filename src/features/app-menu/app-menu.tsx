import React, { Component, MouseEvent } from 'react';
import { Menu } from 'semantic-ui-react';

export default class AppMenu extends Component {
    handleItemClick = (e: MouseEvent) => {};

    render() {
        return (
            <Menu text vertical>
                <Menu.Item header>Hackernews</Menu.Item>
                <Menu.Item
                    name='Top Stories'
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='New Stories'
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Best Stories'
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}