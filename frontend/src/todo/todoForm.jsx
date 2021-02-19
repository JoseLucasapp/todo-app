import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default (props)=>(
    <div role="form" className="todoForm">
        <Grid cols={"12 9 10"}>
            <input id="description" className="form-control" placeholder="Adicione tarefa" />
        </Grid>
        <Grid cols={"12 3 10"}>
            <IconButton onClick={props.handleAdd} style="primary" icon="plus"></IconButton>
        </Grid>
    </div>
)