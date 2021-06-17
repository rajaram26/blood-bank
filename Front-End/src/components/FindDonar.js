import React, { Component } from 'react'
import Nav from './Nav';
import { Button } from 'primereact/button';
import axios from 'axios';

export default class FindDonar extends Component {

    constructor(props){
        super(props);
        this.state={
            location:'Chennai',
            blood_group:'O-Positive',
            donars:[],
            size:''
        }
    }

    changeOnLocation = (e) => {
        this.setState({location: e.target.value})
    }

    changeOnGroup = (e) => {
        this.setState({blood_group: e.target.value})
    }


    reset = () => {
        this.setState({
            location:'',
            blood_group:''
        })
    }

    search = () => {
        axios.get(`http://localhost:8080/api/getDonar`,{
            params: {
                location:this.state.location,
                blood_group:this.state.blood_group
            }
        })
        .then(res => {
           this.setState({donars: res.data});
           var r='';
           if(Object.keys(this.state.donars).length===0){
                r='true';
           }else{
               r='false';
           }
           this.setState({ size:r});
        });
    }

    render() {
        return (
            <div>
                <Nav/>
                <div style={{margin:'auto'}}>
                    <div className="card" style={{height:'350px',width:'650px',margin:'auto',marginTop:'3rem'}}>
                        <div>
                            <h1 style={{marginTop:'2rem'}}>Search for donar</h1>
                        </div>
                        <div className="addDonar">
                            <div>
                                <label>Location:</label>
                                <select name="location" id="location" value={this.state.location} onChange={this.changeOnLocation}>
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
                            <div>
                                <label>Blood Group:</label>
                                <select name="group" id="group" value={this.state.blood_group} onChange={this.changeOnGroup}>
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
                        </div>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                {
                    this.state.donars.map(donar => {
                        return(
                                <div className="profile-card" key={donar.id}>
                                    <div>
                                        <img src="./pics/profile.jpg" alt="error"/>
                                    </div>
                                    <div>
                                        <h4>{donar.name}</h4>
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
