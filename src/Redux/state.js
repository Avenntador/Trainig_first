
let store = {

    _state:  {

        profilePage: {
            posts: [
                {id: 1, message: "Zdarova", likesCount: 12},
                {id: 2, message: "Moi perviy post", likesCount: 25},
            ],
            newPostText: 'something'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Lelik", imgURL: "http://pngimg.com/uploads/circle/small/circle_PNG62.png"},
                {id: 2, name: "Bolik", imgURL: "https://www.pinclipart.com/picdir/big/2-20019_blue-circle-no-background-clipart.png"},
                {id: 3, name: "Garik", imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/1200px-Red_circle.svg.png"},
                {id: 4, name: "Marik", imgURL: "https://www.pngkey.com/png/full/56-569674_crimson-circle-circle-logo-template-png.png"},
            ],
            messages: [
                {id: 1, message: "Aliquam eget tempus dui. Nunc", imgURL: "http://pngimg.com/uploads/circle/small/circle_PNG62.png"},
                {id: 2, message: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", imgURL: "https://www.pinclipart.com/picdir/big/2-20019_blue-circle-no-background-clipart.png"},
                {id: 3, message: "Suspendisse eu nunc vitae velit.", imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/1200px-Red_circle.svg.png"},
                {id: 4, message: "Sed pharetra luctus tellus vel.", imgURL: "https://www.pngkey.com/png/full/56-569674_crimson-circle-circle-logo-template-png.png"},
            ],
            newMessageText: 'sending'
        }
    },
    getState() {
        return this._state
    },
    _callsubscriber() {},
    subscriber (observer) {
        this._callsubscriber = observer;
    },
    dispatch(action) { // { type: "ADD-POST"}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callsubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callsubscriber(this._state);
        } else if ( action.type === 'ADD-NEW-MESSAGE') {
            let newMess = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
                imgURL: "http://pngimg.com/uploads/circle/small/circle_PNG62.png"
            }
            this._state.dialogsPage.messages.push(newMess);
            this._state.dialogsPage.newMessageText = '';
            this._callsubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-TEXT-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newMess;
            this._callsubscriber(this._state);
        }
    }

}


export default store