import React, { Component } from 'react'
import Nav from './Nav'
import {userService} from '../service/userService';
import axios from 'axios';

export default class EditUsers extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:[],
            updatableUser:[],
            editableId:'',
            editableName:'',
            editableEmail:'',
            editableMobile:'',
            editablePassword:''
        }
        this.userservice = new userService();
    }
    
    componentDidMount(){
        this.userservice.getAllUser().then(res => this.setState({user: res}));
    }

    onchangeName = (e) =>{
        this.setState({editableName:e.target.value})
    }

    onchangeEmail = (e) =>{
        this.setState({editableEmail:e.target.value})
    }

    onchangeMobile = (e) => {
        this.setState({editableMobile:e.target.value})
    }


    Update = (e) => {
        document.querySelector(".wrapper-1").style.display='block';
        this.userservice.getUserById(e).then(res => this.setState({
            editableId: res.id,
            editableName: res.name,
            editableEmail: res.email,
            editableMobile: res.mobile,
            editablePassword: res.password
        }));
    }

    Delete = (e) => {
        axios.delete(`http://localhost:8080/api/deleteUser/${e}`).then(res => {this.getUsers();});
    }

    close = () => {
        document.querySelector(".wrapper-1").style.display='none';
    }

    getUsers = () => {
        this.userservice.getAllUser().then(res => this.setState({user: res}));
    }
    onUpdate = () => {
        axios.post(`http://localhost:8080/api/register`,{
            id: this.state.editableId,
            name:this.state.editableName,
            email:this.state.editableEmail,
            mobile:this.state.editableMobile,
            password:this.state.editablePassword
        })
        .then(res => {
            this.close();
            this.getUsers();
        })
    }


    render() {
        return (
            <div >
                <Nav/>
                <div style={{margin:'2rem'}}>
                    <div>
                        <h3 style={{marginBottom:'1rem'}}>List of users</h3>
                    </div>
                    <div className="card">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Edit</th>
                            </tr>
                            {
                              this.state.user.map(list => {
                                    return(
                                        <tr key={list.id}>
                                            <td>{list.name}</td>
                                            <td>{list.email}</td>
                                            <td>{list.mobile}</td>
                                            <td>
                                                <div className="edit">
                                                    <button onClick={()=>{this.Update(list.id) }}>Edit</button>
                                                    <button onClick={()=>{this.Delete(list.id)}}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                              })
                            }
                        </table>
                        
                    </div>
                </div>
                <div>
                    <div class="wrapper-1">
                        <div class="card-1">
                            <div>
                                <div style={{width:'100%'}}>
                                    <h1 onClick={()=> {this.close()}} style={{float:'right',marginBottom:'1rem',cursor:'pointer'}}>x</h1>
                                    <h1>Edit Profile</h1>
                                </div>
                                <div>
                                    <label>Name:</label>
                                    <input type="text" name="username" onChange={this.onchangeName} value={this.state.editableName} style={{width:'60%',height:'2rem'}} autoComplete="off"/>
                                </div>
                                <div>
                                    <label>Mobile:</label>
                                    <input type="text" name="mobile" onChange={this.onchangeMobile} value={this.state.editableMobile} style={{width:'60%',height:'2rem'}} autoComplete="off"/>
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input type="text" name="password" onChange={this.onchangeEmail} value={this.state.editableEmail} style={{width:'60%',height:'2rem'}} autoComplete="off"/>
                                </div>
                                <br></br>
                                <div style={{textAlign:'center',margin:'1rem'}}>
                                    <button class="btn" onClick={this.onUpdate}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
