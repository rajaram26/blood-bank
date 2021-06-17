import React, { Component } from 'react'
import Nav from './Nav';
import { Button } from 'primereact/button';
import axios from 'axios';

export default class FindBloodBank extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBloodGroup:'O-Positive',
            selectedCity:'BB-Chennai',
            samples:[]
        }
    }

    onCityChange = (e) => {
        this.setState({selectedCity: e.value})
    }

    onBloodGroupChange = (e) => {
        this.setState({selectedBloodGroup: e.value})
    }

    reset = () => {
        this.setState({samples:[]})
    }

    search = () => {
            axios.get(`http://localhost:8080/api/getSample`,{
                params: {
                    location:this.state.selectedCity,
                    blood_group:this.state.selectedBloodGroup
                }
            })
            .then(res => {
               this.setState({samples: res.data});
            });
    }

    render() {
        return (
            <div>
                <Nav/>
                <div style={{margin:'auto'}}>
                    <div className="card" style={{height:'310px',width:'650px',margin:'auto',marginTop:'3rem'}}>
                        <div>
                            <h1 style={{marginTop:'2rem'}}>Search for sample details</h1>
                        </div>
                        <div className="addDonar">
                            <div>
                                <label>Location:</label>
                                <select name="location" id="location" onChange={this.onCityChange} value={this.state.selectedCity}>
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
                                <select name="group" id="group" onChange={this.onBloodGroupChange} value={this.state.selectedBloodGroup}>
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
                        </div>
                        <div style={{alignContent:'center',width:'100%'}}>
                                <Button onClick={() => {this.search() }}>Search</Button>
                                <Button style={{marginLeft:'2rem'}} onClick={() => {this.reset() }}>Reset</Button>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                {
                    this.state.samples.map(donar => {
                        return(
                                <div className="profile-card" key={donar.id} style={{height:'350px'}}>
                                    <div>
                                        <img src="./pics/profile.jpg" alt="error"/>
                                    </div>
                                    <div>
                                        <h4>{donar.name}</h4>
                                    </div>
                                    <div>
                                        <i className="pi pi-calendar" style={{'fontSize': '15px'}}></i>
                                        <label>{donar.date}</label>
                                    </div>
                                    <div>
                                        <i className="pi pi-heart" style={{'fontSize': '15px'}}></i>
                                        <label>{donar.blood_group}</label>
                                    </div>
                                    <div>
                                        <i className="pi pi-map" style={{'fontSize': '15px'}}></i>
                                        <label>{donar.location}</label>
                                    </div>
                                    <div>
                                        <i className="pi pi-phone" style={{'fontSize': '15px'}}></i>
                                        <label>{donar.mobile}</label>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
                </div>
            </div>
        )
    }
}
