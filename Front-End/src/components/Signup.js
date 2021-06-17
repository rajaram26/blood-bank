import React, { Component } from 'react'
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import {Link} from 'react-router-dom';
import 'primeflex/primeflex.css';


export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            mobile:'',
            password:''
        }
    }
    
    nameChange = (e) =>{
        this.setState({ name: e.target.value});
    }

    emailChange = (e) =>{
        this.setState({ email: e.target.value});
    }

    mobileChange = (e) =>{
        this.setState({ mobile: e.target.value});
    }
    passwordChange = (e) =>{
        this.setState({ password: e.target.value});
    }
    
    handleSubmit = () =>{
        var time = new Date().getHours() + new Date().getMinutes()+ new Date().getMilliseconds();
        axios.post(`http://localhost:8080/api/register`,{
            id: this.state.name+time,
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            password:this.state.password
        })
        .then(res => {
            alert(res.data);  
            this.props.history.push("/login");  
        })
    }

    render() {

        const myStyle= {
            backgroundColor:'red',
            width:'500px',
            height:'510px',
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
                                <h1 style={{fontStyle:'bold',fontSize:'45px',color:'white',textAlign:'left',padding:'3rem'}}>Register Here !!</h1>
                            </div>
                            <div className="p-fluid" style={{fontSize:'20px',textAlign:'left',paddingLeft:'3rem'}}>
                                <div className="p-field">
                                    <label htmlFor="name">Name</label>
                                    <InputText id="name" style={{marginLeft:'3.1rem',width:'50%'}} type="name" autoComplete="off" onChange={this.nameChange}/>
                                </div>
                                <div className="p-field">
                                    <label htmlFor="email">Email</label>
                                    <InputText id="email" style={{marginLeft:'3.1rem',width:'50%'}} type="email" autoComplete="off" onChange={this.emailChange}/>
                                </div>
                                <div className="p-field">
                                    <label htmlFor="mobile">Mobile</label>
                                    <InputText id="mobile" style={{marginLeft:'2.6rem',width:'50%'}} type="mobile" autoComplete="off" onChange={this.mobileChange}/>
                                </div>
                                <div className="p-field">
                                    <label htmlFor="password" >Password</label>
                                    <InputText id="password" style={label} type="password" autoComplete="off" onChange={this.passwordChange}/>
                                </div>
                            </div>
                            <div>
                                <button onClick={this.handleSubmit} style={{padding:'.5rem',margin:'auto',backgroundColor:'white',color:'red',borderRadius:'20px',width:'100px',fontSize:'1rem',border:'none',marginTop:'2rem'}}>Register</button>
                            </div>
                            <Link to="/login">
                                <div>
                                    <a href="/" style={{ textDecoration:'none',float:'left',color:'white',paddingLeft:'1rem',marginTop:'1rem'}}> Back to login </a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
