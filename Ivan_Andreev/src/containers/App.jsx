import React, {Component} from 'react';
import {ChatContainer} from './ChatContainer';
import {ChatList} from '../components/ChatList/ChatList'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ChatList />
                <Switch>
                    <Route path="/chats/" exact component={ChatContainer} />
                    <Route path="/chats/:id" exact component={ChatContainer} />
                    <Route path="/chats/:id" exact component={ChatContainer} />
                </Switch>
            </BrowserRouter>
        ) 
    }
}