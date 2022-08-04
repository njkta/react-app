let rerenderEntireTree = () => {
    console.log('reload!')
}

let state = {
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
    },
}

const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profile.newPostText,
        likeCount: 0
    }
    state.profile.postsData.push(newPost)
    state.profile.newPostText = ''

    rerenderEntireTree(state);
}

const updatePostText = (newText) => {
    state.profile.newPostText = newText
    rerenderEntireTree(state);
}

const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export {addPost, updatePostText, subscribe}

export default state;