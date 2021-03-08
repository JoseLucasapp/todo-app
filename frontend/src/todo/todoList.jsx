import React from 'react';
import IconButton from '../template/iconButton';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {markAsDone, markAsPending, remove} from './todoActions';

const TodoList = (props)=>{

    const renderRows = ()=>{
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton hide={todo.done} style="success" icon="check" onClick={()=>props.markAsDone(todo)}></IconButton>
                    <IconButton hide={!todo.done} style="warning" icon="undo" onClick={()=>props.markAsPending(todo)}></IconButton>
                    <IconButton hide={!todo.done} style="danger" icon="trash-o" onClick={()=>props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = (dispatch) => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);