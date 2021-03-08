import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event)=>({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const searchData = ()=>{
    return(dispatch, getState)=>{
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/`: '';
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => dispatch({type: 'TODO_SEARCHED',payload: resp.data}));
    }
}

export const add = (description)=>{
    return dispatch =>{
        axios.post(URL, {description})
        .then(resp => dispatch({type: 'TODO_CLEAR', payload: resp.data}))
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(searchData()))
    }
}

export const markAsDone = (todo)=>{
    return dispatch=>{
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(resp=> dispatch({type:'TODO_MARKED_AS_DONE', payload: resp.data}))
        .then(resp => dispatch(searchData()));
    }
}

export const markAsPending = (todo)=>{
    return dispatch=>{
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => dispatch(searchData()));
    }
}

export const remove = (todo)=>{
    return dispatch =>{
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch(searchData()));
    }
}

export const clear = ()=>{
    return [{type: 'TODO_CLEAR'}, searchData()];
}