import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from './actionTypes';

export default function todoReducer(state = [],action){
    switch(action.type){
        case ADD_TODO:
            const newState = [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
                ,
                ...state
            ]
            return newState;
        case TOGGLE_TODO:
            return state.map((todoItem) => {
                if(todoItem.id === action.id){
                    return {
                        ...todoItem,completed:!todoItem.completed
                    }
                } else {
                    return todoItem;
                }
            })
        case REMOVE_TODO:
            return state.filter((todoItem) => {
                return todoItem.id !== action.id
            })
        default:
            return state;
    }
}