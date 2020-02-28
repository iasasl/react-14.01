import React from 'react';
import './ChatList.css';
import {Link} from 'react-router-dom'

export const ChatList = () => (
    <div className="ChatList">
        <ul>
            <li><Link to="/chats/1">Chat 1</Link></li>
            <li><Link to="/chats/2">Chat 2</Link></li>
            <li><Link to="/chats/3">Chat 3</Link></li>
        </ul>
    </div>
)