import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default (props)=>{
    const KeyHandler = (e)=>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }
    return(
        <div role="form" className="todoForm">
            <Grid cols={"12 9 10"}>
                <input onKeyUp={KeyHandler} onChange={props.handleChange} value={props.description} id="description" className="form-control" placeholder="Adicione tarefa" />
            </Grid>
            <Grid cols={"12 3 10"}>
                <IconButton onClick={props.handleAdd} style="primary" icon="plus"></IconButton>
                <IconButton onClick={props.handleSearch} style="info" icon="search"></IconButton>
                <IconButton onClick={props.handleClear} style="danger" icon="close"></IconButton>
            </Grid>
        </div>
    )
}