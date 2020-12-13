import styled from 'rn-css';

export const SearchInput = styled.TextInput.attrs({
    placeholderTextColor: "#fff"
    /* placeholderFontWeight: "bold" */
  })`
    background-color: #fff;
    color: #fff;
    outline: none;
    font-weight: bold;
    border-radius: 2px;
    height: 30px;
    width: 100%;
    border: 0;
    padding-left: 48px;
    padding-right: 20px;
    font-size: 1rem;
    background-image: url("./images/search.svg");
    background-repeat: no-repeat;
    background-color: rgba(255, 255, 255, 0.3);
    background-position: 15px center;
    background-size: 20px 20px;
`;

export const MsgInput = styled.TextInput.attrs({
    placeholderTextColor: "red"
  })`
    outline: none;
    padding: 15px;
    border: 2px;
    border-color: #ddd;
    border-style: solid;
    color: #330;
    border-radius: 6px;
    font-size: 1.4rem;
`;

export const ChatContainer = styled.View`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    //grid: "search-container chat-title" 71px "participants-list chat-message-list" 1fr "new-message-container chat-form" 78px / 275px 1fr;
    min-width: 400px;
    max-width: 650px;
    max-height: 800px;
    width: 100%;
    height: 95vh;
    background: #fff;
    border-radius: 10px;
`;

export const SearchContainer = styled.View`
    order: 1;
    background: #0048aa;
    display: flex;
    width: 35%;
    height: 10%;
    align-content: center;
    justify-content: center;
    padding-left: 0;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    /* border-radius: 10px 0 0 0; */
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #002c88;
    border-top-left-radius: 10px;
    border-top-right-radius:  0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    /* box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75); */
    z-index: 1;
`;

export const ParticipantsList = styled.View`
    order: 2;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 35%;
    height: 80%;
    background: #0048aa;
    overflow-y: auto;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #002c88;
`;

export const Participant = styled.View`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    color: #ddd;
    font-size: 1.3rem;
    background: #0048aa;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #002c88;
    padding-left: 15px;
    padding-top: 15px;
    padding-right: 20px;
    padding-bottom: 10px;
    width: 100%;
    height: 70px;
    &:hover {
        background: #002c88;
        cursor: pointer;
    }
`;

export const Name = styled.View`
    font-weight: bold;
    padding-left: 10px;
    width: 75%;
    height: 50%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
`;

export const CreatedDate = styled.View`
    font-size: 1rem;
`;

export const ConversationMessage = styled.View`
    padding-left: 10px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
`;

export const ChatTitle = styled.View`
    order: 4;
    background: #eeeeee;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    height: 10%;
    border-top-left-radius: 0;
    border-top-right-radius: 10;
    border-bottom-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 20px;
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #3b3837;
`;

export const ChatMessageList = styled.View`
    background: #dec;
    width: 97%;
    height: 10%;
    margin: 5px 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 10px 20px 0 20px;
`;

export const UserMessage = styled.View`
    /* message-row */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    margin-bottom: 20px;
    Image {
        height: 40px;
        width: 40px;
        border-radius: 100%;
    }

    /* you-message */
    justify-content: end;
    &.message-content {
        justify-items: end;
    }
    &.message-text {
        background: #004baa;
        color: #eee;
        border: 1px solid #0048aa;
        border-radius: 14px 14px 0 14px;
    }
`;

export const MessageContent = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
`;

export const MessageText = styled.View`
    padding: 9px 14px;
    font-size: 1.6rem;
    margin-bottom: 5px;
`;

export const MessageTime = styled.View`
    font-size: 1.3rem;
    color: #777;
`;

export const ChatForm = styled.View`
    order: 6;
    width: 70%;
    height: 10%;
    background: #eeeeee;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top-color: rgba(0, 0, 0, 0.25);
    border-top-width: 1px;
    border-top-style: solid;
    padding-left: 15px;
    padding-right: 22px;

    /* input[type="submit"] {
        display: none;
    } */
`;

export const Logout = styled.View`
    background: #0048aa;
    order: 3;
    height: 10%;
    width: 35%;
    padding-left: 10px;
    padding-top: 5px;
`;

export const MsgsContainer = styled.View`
    order: 5;
    background: #fff;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    align-content: center;
    height: 80%;
    width: 70%;
    overflow-y: auto;
`;

export const PanelTxt = styled.Text`
    color: white;
`;