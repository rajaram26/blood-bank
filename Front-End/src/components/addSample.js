import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'primereact/button';
import Nav from './Nav'

export default class addSample extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            location:'BB-Chennai',
            mobile:'',
            blood_group:'O-Positive',
            date:''
        }
        this.initialState=this.state
    }


    changeOnId = (e) => {
        this.setState({id: e.target.value});
    }
    changeOnName = (e) => {
        this.setState({name: e.target.value});
    }
    changeOnLocation = (e) => {
        this.setState({location: e.target.value});
    }
    changeOnMobile = (e) => {
        this.setState({mobile: e.target.value});
    }
    changeOnGroup = (e) => {
        this.setState({blood_group: e.target.value});
    }
    changeOnDate = (e) => {
        this.setState({date: e.target.value});
    }
    
    reset = () => {
        this.setState(this.initialState)
    }

    addDonar = () => {
        var time = new Date().getHours() + new Date().getMinutes()+ new Date().getMilliseconds();
        
       axios.post('http://localhost:8080/api/save_sample',{
        id:this.state.name+time,
        name:this.state.name,
        location:this.state.location,
        mobile:this.state.mobile,
        date:this.state.date,
        blood_group:this.state.blood_group
       }).then(res =>{
           alert(res.data);
           this.reset()
       })
   
    }

    render() {
        return (
            <div>
                <Nav/>
                <div style={{margin:'auto'}}>
                    <div className="card" style={{height:'520px',width:'650px',margin:'auto',marginTop:'3rem'}}>
                        <div>
                            <h1 style={{marginTop:'2rem'}}>Add Blood Sample details</h1>
                        </div>
                        <div className="addDonar">
                            <div>
                                <label>Donar name:</label>
                                <input type="text" onChange={this.changeOnName} placeholder="Enter donar name" value={this.state.name}></input>
                            </div>
                            <div>
                                <label>Mobile Number:</label>
                                <input type="text" onChange={this.changeOnMobile} placeholder="Enter mobile number" value={this.state.mobile}></input>
                            </div>
                            <div>
                                <label>Location:</label>
                                <select name="location" id="location" onChange={this.changeOnLocation} value={this.state.location}>
                                    <option value="BB-Chennai">BB-Chennai</option>
                                    <option value="BB-Coimbatore">BB-Coimbatore</option>
                                    <option value="BB-Tirchy">BB-Tirchy</option>
                                    <option value="BB-Madurai">BB-Madurai</option>
                                    <option value="BB-Tirunelveli">BB-Tirunelveli</option>
                                    <option value="BB-Kanyakumari">BB-Kanyakumari</option>
                                    <option value="BB-Thanjavur">BB-Thanjavur</option>
                                    <option value="BB-Tirupur">BB-Tirupur</option>
                                </select>
                            </div>
                            <div>
                                <label>Blood Group:</label>
                                <select name="group" id="group" onChange={this.changeOnGroup} value={this.state.blood_group}>
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
                            <div>
                                <label>Sample collected at:</label>
                                <input type="date" value={this.state.date} onChange={this.changeOnDate}></input>
                            </div>
                        </div>
                        <div style={{alignContent:'center',width:'100%'}}>
                                <Button onClick={() => {this.addDonar() }}>Add Donar</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
