import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import {Link} from 'react-router-dom';
import 'primeflex/primeflex.css';
import { userService } from '../service/userService';
export default class Login extends Component {

    constructor(props){
        super(props);

        this.state={
            username:'',
            password:''
        }
        this.userService  = new userService();  
    }

    ChangeOnUsername = (e) => {
        this.setState({ username:e.target.value })
    }

    ChangeOnPassword = (e) => {
        this.setState({ password:e.target.value })
    }

    check = () => {
        this.userService.findUsername(this.state.username,this.state.password).then(res => {
            if(res){
                this.userService.findByMail(this.state.username)
                .then(res => {
                    localStorage.setItem('user-info',JSON.stringify(res));
                });
                
                this.props.history.push("/home");
            }else{
                alert("Invalid Email/Password !!!");
            }
        } );
    }

    render() {

        const myStyle= {
            backgroundColor:'red',
            width:'500px',
            height:'430px',
            margin:'auto',
            marginTop:'6.5rem',
            color:'white',
            borderRadius:'10px'
        }
        const label = {
            marginLeft:'1rem',
            width:'50%'
        }

        return (
            <div>
                <div>
                    <div style={myStyle}>
                        <div>
                            <div>
                                <h1 style={{fontStyle:'bold',fontSize:'60px',color:'white',textAlign:'left',padding:'3rem'}}>Login</h1>
                            </div>
                            <div className="p-fluid" style={{fontSize:'20px',textAlign:'left',paddingLeft:'3rem'}}>
                                <div className="p-field">
                                    <label htmlFor="email"  >Email</label>
                                    <InputText id="email" style={{marginLeft:'3.1rem',width:'50%'}} type="email" autoComplete="off" onChange={this.ChangeOnUsername}/>
                                </div>
                                <div className="p-field">
                                    <label htmlFor="password" >Password   </label>
                                    <InputText id="password" style={label} type="password" autoComplete="off" onChange={this.ChangeOnPassword}/>
                                </div>
                            </div>
                            <div>
                                <button onClick={this.check} style={{padding:'.5rem',margin:'auto',backgroundColor:'white',color:'red',borderRadius:'20px',width:'100px',fontSize:'1rem',border:'none',marginTop:'2rem'}}>Login</button>
                            </div>
                            <Link to="/register">
                                <div>
                                    <a href="/" style={{ textDecoration:'none',float:'left',color:'white',paddingLeft:'1rem',marginTop:'1rem'}}>If you are new user Register here !!</a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
