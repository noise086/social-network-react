import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';

let store = {
    _state: {
        profilePage:{ 
            posts: [
                { id: 1, message: 'Hello world', likescount: 3 },
                { id: 2, message: 'Its my third post', likescount: 10 },
                { id: 3, message: 'Its my second post', likescount: 13 },
                { id: 4, message: 'Its my first post', likescount: 23 },
            ],
        newMessageText: 'type message'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dick' },
                { id: 2, name: 'Kaliph' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Natasha' },
                { id: 5, name: 'Vitro' },
                { id: 6, name: 'Elena' },
            ],
            messages: [
                { myMessage: false, message: "Hi" },
                { myMessage: true, message: 'How arw you' },
                { myMessage: false, message: 'Who is it' },
                { myMessage: true, message: "Fuck you" },
                { myMessage: false, message: "Go drink" },
                { myMessage: true, message: "Ok" },
            ],
        newPostText: ''
        },
        sideBar: {
            friends: [
                {name: 'Dick', avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'},
                {name: 'Kaliph', avatar: 'https://otvet.imgsmail.ru/download/48a098246d7381f96b2098980d0c5fa1_i-10.jpg'},
                {name: 'Sasha', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3683451/pub_5efb3ff066fe1d5006536937_5efb4cb267cc5e13be1840cc/scale_1200'}
            ]
        },
    },
    getState () {
        return this._state
    },
    subscribe(observer) {
        this.renderedEntiresTree = observer
    },
    _callSubscriber() {
        console.log('state changed')
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sideBarReducer(this._state.sideBarPage, action);

        this._callSubscriber();
    },
}

window.store = store;
export default store;