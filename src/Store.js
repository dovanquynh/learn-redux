import { Data } from './dbConnect';

var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {},
    isAdd: false,
    alertShow: false,
    AlertContent: '',
    AlertStyle: ''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ALERT_ON":
            return { ...state, alertShow: true, AlertContent: action.alertContentStore, AlertStyle: action.alertStyle }
        case "ALERT_OFF":
            return { ...state, alertShow: false }
        case "ADD_DATA":
            Data.push(action.getItem);
            console.log('Thêm dữ liệu' + JSON.stringify(action.getItem) + ' thành công');
            return state
        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd }
        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }
        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editObject }
        case "EDIT_DATA":
            Data.child(action.getItem.id).update({
                title: action.getItem.title,
                content: action.getItem.content
            })
            console.log("Update data" + JSON.stringify(action.getItem));
            return { ...state, editItem: {} }
        case "DELETE":
            Data.child(action.delId).remove();
            console.log("Delete done " + action.delId);
            return state;
        default:
            return state
    }
}
var store1 = redux.createStore(allReducer);
store1.subscribe(function () {
    console.log(JSON.stringify(store1.getState()));
})
export default store1;