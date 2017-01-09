import * as React from "react";

export interface ChatMessagesProps { 
    chatId: string;                     // this chat id
    messages: Array<ChatMessage>;       // initial chat messages
}

export default class ChatMessages extends React.Component<ChatMessagesProps, undefined> {
    render() {
        return (
            <div id="log">
            {
                this.props.messages.map((message) => {
                const msgAlign = (message.id === this.props.chatId ? "right" : "left");
                return (<div key={ message.key } className={ "blockquote-" + msgAlign }>
                    { message.text }
                    <br />
                    <span className="time">{ message.sentAt }</span>
                    </div>
                )
                }) 
            }
            </div>
        );
    }
}