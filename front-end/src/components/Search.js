import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search'
import './../App.css';
import TextField from 'material-ui/TextField';
export default class Search extends Component{
    render(){
        return (
            <AppBar
                showMenuIconButton = {false}
                title={<div><IconButton onClick={this.props.onSearchClick} ><SearchIcon color={'white'} style={styles.search}/></IconButton><TextField
                    id="name-field-controlled"
                    value={this.props.searchValue}
                    onChange={this.props.handleSearchChange}
                    hintText="Busque o nome ou usuario de alguem"
                /></div>}
                style={styles.style}
                titleStyle={styles.titleStyle}
            />
        )
    }
}

const styles = {
    title: {
        cursor: 'pointer',
    },
    search:{
        height: 50,
        width:50
    },
    titleStyle:{
        width: '300px',
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
    },
    style:{
        backgroundColor: '#3ceb8b',
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft: '30px',
        paddingRight: '30px',
        borderColor:'rgba(255,255,255,0.1)',
        borderBottomWidth: '1.5px',
        borderStyle: 'solid',
        color: 'white',
    }
};