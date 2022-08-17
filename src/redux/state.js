import profileReducer from "./profile-reducer";
import dialogs from "../components/Dialogs/Dialogs";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1,message: 'qwe', likeCount: 2},
                {id: 2,message: 'asd', likeCount: 6},
                {id: 3,message: 'zxc', likeCount: 11}
            ],
            newPostText: 'type here...',
        },
        dialogs: {
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
        },
    },
    _callSubscriber() {
        console.log('reload!')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action){

        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    },
}

export default store;