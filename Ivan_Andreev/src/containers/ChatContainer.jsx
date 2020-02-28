import React, {Component} from 'react';
import {Chat} from '../components/Chat/Chat'

const botName = 'Bot';
const defaultBotAnswer = 'Oh hi Mark!'
export class ChatContainer extends Component {
    state = {
        chats: {
            1:{
                id: 1,
                name: 'Chat 1',
                messages: [
                    {name: "Ivan", message: "Hello!"},
                    {name: "NeIvan", message: "Hehehe"},
                ],
            
            },
            2:{
                id: 2,
                name: 'Chat 2',
                messages: [
                    {name: "Ivan from chat 2", message: "Hello!"},
                    {name: "NeIvan from chat 2", message: "Hehehe"},
                ],
            
            },
            3:{
                id: 3,
                name: 'Chat 2',
                messages: [
                    {name: "Ivan from chat 3", message: "Hello!"},
                    {name: "NeIvan from chat 3", message: "Hehehe"},
                ],
            
            },
        },
        inputMessage: '',
        userName: 'currentUser'
    }

    componentDidMount() {
        
    }

    // componentDidUpdate() {
    //     const lastMessage = this.state.messages[this.state.messages.length -1];
    //     if (lastMessage.name != 'Bot') {
    //         this.handleSendMessage({name: botName, message: defaultBotAnswer})
    //     }
    // }

    handleSendMessage = (message) => {
        this.setState((state) => ({messages: [...state.messages, message]}))
    }

    render() {
        const {chats, inputMessage, userName} = this.state;
        const {id} = this.props.match.params;
        if (id && chats[id]) {
            return <Chat {...{messages: chats[id].messages, message: inputMessage, name: userName, onSendMessage: this.handleSendMessage}} />
        }
    }
}