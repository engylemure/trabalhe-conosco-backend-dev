import React, {Component} from 'react'
import logoPicPay from './../assets/svg/logoPicPay.svg'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './../App.css';
export default class Header extends Component{
    render(){
        return (
            <AppBar
            title={<img src={logoPicPay} className="PP-logo" alt="logo" />}
            iconElementLeft={!this.props.loggedOn?<FlatButton
                label="Fazer Login"
                style={{
                color:'white' }}
                onClick={this.props.onEntrarClick}
                labelStyle={{
                    paddingLeft:30,
                    fontWeight:'bold',
                    fontSize:16
                }}
            />:<FlatButton
                label="Sair"
                style={{
                    color:'white' }}
                onClick={this.props.onSairClick}
                labelStyle={{
                    paddingLeft:30,
                    fontWeight:'bold',
                    fontSize:16
                }}
            />}
            iconElementRight={!this.props.loggedOn?<FlatButton
                label="Registrar"
                onClick={this.props.onRegistrarClick}
                style={{
                    color:'white' }}
                labelStyle={{
                    paddingRight:30,
                    fontWeight:'bold',
                    fontSize:16
                }}
            />:null}
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