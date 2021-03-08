import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeDescription, searchData, add, clear} from './todoActions';

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.KeyHandler = this.KeyHandler.bind(this);
    }

    componentWillMount(){
        this.props.searchData();
    }

    KeyHandler(e){
        const {add, searchData, description, clear} = this.props;
        if(e.key === 'Enter'){
            e.shiftKey ? searchData() : add(description);
        }else if(e.key === 'Escape'){
            clear()
        }
    }
    render(){
        const {add, searchData, description, clear} = this.props;
        return(
            <div role="form" className="todoForm">
                <Grid cols={"12 9 10"}>
                    <input onKeyUp={this.KeyHandler} onChange={this.props.changeDescription} value={this.props.description} id="description" className="form-control" placeholder="Adicione tarefa" />
                </Grid>
                <Grid cols={"12 3 10"}>
                    <IconButton onClick={()=>add(description)} style="primary" icon="plus"></IconButton>
                    <IconButton onClick={searchData} style="info" icon="search"></IconButton>
                    <IconButton onClick={()=>clear()} style="danger" icon="close"></IconButton>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state =>({description: state.todo.description});
const mapDispatchToProps = dispatch=> bindActionCreators({
    changeDescription, searchData, add, clear
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);