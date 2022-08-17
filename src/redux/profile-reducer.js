const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState =  {
    postsData: [
        {id: 1,message: 'qwe', likeCount: 2},
        {id: 2,message: 'asd', likeCount: 6},
        {id: 3,message: 'zxc', likeCount: 11}
    ],
    newPostText: 'type here...',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        default:
            return state
    }
}

const addPostActionCreator = () => ({type: ADD_POST})

const updateTextPostActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})

export {addPostActionCreator, updateTextPostActionCreator}

export default profileReducer;