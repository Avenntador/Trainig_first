
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';


let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMess = {
                id: 5,
                message: state.newMessageText,
                imgURL: "http://pngimg.com/uploads/circle/small/circle_PNG62.png"
            }
            state.messages.push(newMess);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_TEXT_MESSAGE:
            state.newMessageText = action.newMess;
            break;
    }
    return state;
}


export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE})
export const updateNewTextMessageActionCreator = (text) => ({type: UPDATE_NEW_TEXT_MESSAGE, newMess: text})

export default  dialogsReducer