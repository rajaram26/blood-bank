import React, { Component } from 'react'
import Nav from './Nav'
import {userService} from '../service/userService';
import axios from 'axios';

export default class EditDonar extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:[],
            editableId:'',
            editableName:'',
            editableBlood_group:'',
            editableMobile:'',
            editableLocation:''
        }
        this.userservice = new userService();
    }
    
    componentDidMount(){
        this.userservice.getAllDonar().then(res => this.setState({user: res}));
    }

    onchangeName = (e) =>{
        this.setState({editableName:e.target.value})
    }

    onchangeBloodGroup = (e) =>{
        this.setState({editableBlood_group:e.target.value})
    }

    onchangeMobile = (e) => {
        this.setState({editableMobile:e.target.value})
    }

    onchangeLocation = (e) => {
        this.setState({editableLocation:e.target.value})
    }

    Update = (e) => {
        document.querySelector(".wrapper-1").style.display='block';
        this.userservice.getDonarById(e).then(res => this.setState({
            editableId: res.id,
            editableName: res.name,
            editableBlood_group: res.blood_group,
            editableMobile: res.mobile,
            editableLocation: res.location
        }));
    }

    Delete = (e) => {
        axios.delete(`http://localhost:8080/api/deleteDonar/${e}`).then(res => {
            this.getUsers();
        });
    }

    close = () => {
        document.querySelector(".wrapper-1").style.display='none';
    }

    getUsers = () => {
        this.userservice.getAllDonar().then(res => this.setState({user: res}));
    }

    onUpdate = () => {
        axios.post(`http://localhost:8080/api/save_donar`,{
            id: this.state.editableId,
            name:this.state.editableName,
            blood_group:this.state.editableBlood_group,
            mobile:this.state.editableMobile,
            location:this.state.editableLocation
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
                        <h3 style={{marginBottom:'1rem'}}>All Donars</h3>
                    </div>
                    <div className="card">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Blood Group</th>
                                <th>Mobile</th>
                                <th>Location</th>
                                <th>Edit</th>
                            </tr>
                            {
                              this.state.user.map(list => {
                                    return(
                                        <tr key={list.id}>
                                            <td>{list.name}</td>
                                            <td>{list.blood_group}</td>
                                            <td>{list.mobile}</td>
                                            <td>{list.location}</td>
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
                                    <h3>Edit Donar Details</h3>
                                </div>
                                <div>
                                    <label>Name:</label>
                                    <input type="text" name="username" onChange={this.onchangeName} value={this.state.editableName} style={{width:'60%',height:'2rem'}} autoComplete="off"/>
                                </div>
                                <div>
                                    <label>Mobile:</label>
                                    <input type="text" name="mobile" onChange={this.onchangeMobile} value={this.state.editableMobile} style={{width:'60%',height:'2rem'}} autoComplete="off"/>
                                </div>
                                <div style={{marginLeft:'1rem'}}>
                                    <label>Location:</label>
                                    <select name="location" id="location" onChange={this.onchangeLocation} value={this.state.editableLocation}>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Coimbatore">Coimbatore</option>
                                        <option value="Tirchy">Tirchy</option>
                                        <option value="Madurai">Madurai</option>
                                        <option value="Tirunelveli">Tirunelveli</option>
                                        <option value="Kanyakumari">Kanyakumari</option>
                                        <option value="Thanjavur">Thanjavur</option>
                                        <option value="Tirupur">Tirupur</option>
                                    </select>
                                </div>
                                <div style={{marginLeft:'1rem'}}>
                                    <label>Blood Group:</label>
                                    <select name="group" id="group" onChange={this.onchangeBloodGroup} value={this.state.editableBlood_group}>
                                        <option value="O-Positive">O-Positive</option>
                                        <option value="O-Negative">O-Negative</option>
                                        <option value="A-Positive">A-Positive</option>
                                        <option value="A-Negative">A-Negative</option>
                                        <option value="B-Positive">B-Positive</option>
                                        <option value="B-Negative">B-Negative</option>
                                        <option value="AB-Positive">AB-Positive</option>
                                        <option value="AB-Negative">AB-Negative</option>
                                    </select>
                                </div>
                                <br></br>
                                <div style={{textAlign:'center',margin:'1rem',marginTop:'0rem'}}>
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
