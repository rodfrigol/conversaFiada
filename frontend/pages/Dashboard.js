import * as React from 'react';
import { Image, Text, TextInput, StyleSheet } from 'react-native';
import { PanelTxt, MsgInput, SearchInput, MsgsContainer, Logout, Name, ChatContainer, ChatForm, ChatMessageList, ChatTitle, ConversationMessage, CreatedDate, MessageContent, MessageText, MessageTime, NewMessageContainer, Participant, ParticipantsList, SearchContainer, UserMessage } from './styles';

export default function ({ navigation, route }){
  return (
    <ChatContainer>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search" />
      </SearchContainer>
      <ParticipantsList>
        {/* <% chat.forEach(function(chat, _id){ %> */}
          <Participant>
            <Image source={require('../images/rodrigo.png')}
                   style={styles.img} />
            <Name>
              <PanelTxt style={styles.bold}>Rodrigo Teixeira</PanelTxt>
                {/* <%= chat.name %> */}
            </Name>
            <ConversationMessage>
              <PanelTxt>Oi Pelotinhaaa!</PanelTxt>
                {/* <Text> This is a message! </Text> */}
            </ConversationMessage>
          </Participant>

          <Participant>
            <Image source={require('../images/rodrigo.png')}
                   style={styles.img} />
            <Name>
              <PanelTxt style={styles.bold}>Helber Melo</PanelTxt>
                {/* <%= chat.name %> */}
            </Name>
            <ConversationMessage>
              <PanelTxt>Oi gatinhoooo!</PanelTxt>
                {/* <Text> This is a message! </Text> */}
            </ConversationMessage>
          </Participant>

          <Participant>
            <Image source={require('../images/rodrigo.png')}
                   style={styles.img} />
            <Name>
              <PanelTxt style={styles.bold}>Delay</PanelTxt>
                {/* <%= chat.name %> */}
            </Name>
            <ConversationMessage>
              <PanelTxt>Oi, sou baitolinha!</PanelTxt>
                {/* <Text> This is a message! </Text> */}
            </ConversationMessage>
          </Participant>
              {/* <% }) %> */}
      </ParticipantsList>

      <ChatTitle>
        <Text style={styles.title}>Chat Title</Text>
        {/* <Text>Chat Title */}{/* <%= user.name %> */}{/* </Text> */}
      </ChatTitle>

      <MsgsContainer>
        {/* <% message.forEach(function(message, _id){ %> */}
        <ChatMessageList>
          <UserMessage>
            <MessageContent>
              <Text>Message Content</Text>
              <MessageText>
                <Text>Message Text</Text>
                {/* Message Text */}
                {/* <%= message.message %> */}
              </MessageText>
              <MessageTime>
                <Text>Message Time</Text>
                {/* 12:00 */}
                {/* <%= message.date %> */}
              </MessageTime>
              {/* <!-- <div class="message-time">Oct 20</div> --> */}
            </MessageContent>
          </UserMessage>
          {/* <% }) %> */}
        </ChatMessageList>
      </MsgsContainer>
      
      <ChatForm>
        <TextInput style={styles.form}
                   placeholder="type a message"
                   autocomplete="off" />
        {/* <input type="submit" /> */}
      </ChatForm>
      
      <Logout>
        <Image source={require('../images/logout.png')}
               style={styles.img} />
      </Logout>
    </ChatContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
    borderRadius: "100%"
  },
  bold: {
    fontWeight: "bold"
  },
  title: {
    color: '#0048aa',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  form: {
    outline: 'none',
    padding: '15px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#ddd',
    color: '#330',
    borderRadius: '6px',
    fontSize: '1rem',
    height: '80%',
    width: '100%'
  }
});