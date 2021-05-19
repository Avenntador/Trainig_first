import {rerenderEntireTree} from "../render";


let state = {

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
        newMessage: "sending"
    }
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addNewMessage = () => {

    let newMess = {
        id: 5,
        message: state.dialogsPage.newMessage,
        imgURL: "http://pngimg.com/uploads/circle/small/circle_PNG62.png"
    }

    state.dialogsPage.messages.push(newMess);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state);

}



export let updateNewTextMessage = (newMess) => {
    state.dialogsPage.newMessage = newMess;
    rerenderEntireTree(state);
}


export default state