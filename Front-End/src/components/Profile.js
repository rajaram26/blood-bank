import React, { Component } from 'react'
import Nav from './Nav'

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        this.setState({user:JSON.parse(localStorage.getItem('user-info'))});
    }
    render() {
        return (
            <div>
                <Nav/>
               <div className="card profile" style={{width:'600px',height:'400px',margin:'auto',marginTop:'3rem'}}>
                    <div style={{margin:'2rem'}}>
                        <h1 >Profile</h1>
                    </div>
                    <div style={{display:'flex',padding:'1rem 0 0 2rem'}}>
                        <h4>Name:</h4>
                        <h5>{this.state.user.name}</h5>
                    </div>
                    <div style={{display:'flex',padding:'1rem 0 0 2rem'}}>
                        <h4>Email:</h4>
                        <h5>{this.state.user.email}</h5>
                    </div>
                    <div style={{display:'flex',padding:'1rem 0 0 2rem'}}>
                        <h4>Mobile:</h4>
                        <h5>{this.state.user.mobile}</h5>
                    </div>
                    <div style={{display:'flex',padding:'1rem 0 0 2rem'}}>
                        <h4>Password:</h4>
                        <h5>{this.state.user.password}</h5>
                    </div>
               </div>
            </div>
        )
    }
}
