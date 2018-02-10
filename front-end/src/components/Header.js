import React, {Component} from 'react'
import logoPicPay from './../assets/svg/logoPicPay.svg'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/svg-icons/navigation/menu'
import './../App.css';
export default class Header extends Component{
    render(){
        return (
            <AppBar
            title={<img src={logoPicPay} className="PP-logo" alt="logo" />}
            iconElementLeft={<IconButton ><Menu className={styles.menuIcon}/></IconButton>}
            // iconElementRight={<FlatButton label="Registrar" />}
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
    titleStyle:{
        height:'80px'
    },
    menuIcon:{
        height:'40px',
        width:'30px'
    },
    style:{
        backgroundColor: '#38C86E',
        display:'flex',
        flexDirection: 'row',
        height: '120px',
        padding: '20px',
        paddingLeft: '30px',
        paddingRight: '30px',
        borderColor:'rgba(255,255,255,0.1)',
        borderBottomWidth: '1.5px',
        borderStyle: 'solid',
        color: 'white',
      }
  };