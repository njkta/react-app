const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
    userData: [
        {
            id: '1',
            name: 'User-45 AN4',
            avatar: 'https://i.pinimg.com/originals/b4/34/49/b4344968641f25d28e966b70e8460a75.jpg',
            friend: true
        },
        {
            id: '2',
            name: 'User-0 Bel5',
            avatar: 'https://i.pinimg.com/originals/b4/34/49/b4344968641f25d28e966b70e8460a75.jpg',
            friend: false
        },
        {
            id: '3',
            name: 'User-21 V3',
            avatar: 'https://i.pinimg.com/originals/b4/34/49/b4344968641f25d28e966b70e8460a75.jpg',
            friend: false
        }
    ],
    messagesData: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: 2, message: 'Lorem ipsum dolor sit amet, officiis quidem reprehenderit rerum, suscipit ullam.'},
        {id: 3, message: 'Aliquam, commodi consequatur dolor doloremque exercitationem expedita in modi quibusdam quisquam quo.'}
    ],
    newMessageData: 'type here...',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageData = action.messageData
            return state
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageData,
            }
            state.messagesData.push(newMessage)
            state.newMessageData = ''
            return state
        default:
            return state
    }
}

const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

const updateMessageDataActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    messageData: text
})

export {sendMessageActionCreator, updateMessageDataActionCreator}

export default dialogsReducer;