import React, { Component } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import {Link} from 'react-router-dom';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            username:''
        };
    }

    // componentDidMount(){
    //     var user=JSON.parse(localStorage.getItem('user-info'));
    //     console.log(user);
    //     // this.setState({username: user.name})
    // }

    render() {
        return (
            <div style={{color:'white'}}>
                <div style={{height:'55px',width:'100%',backgroundColor:'red',display:'flex'}}>
                    <div>
                    <Button icon="pi pi-bars" onClick={() => 
                        {
                            var user=JSON.parse(localStorage.getItem('user-info'))
                            this.setState({ visible: true,username: user.name })
                        }
                    } className="p-mr-2" style={{backgroundColor:'red',border:'none',fontSize:'1.5rem',margin:'0rem 0 0 1rem'}} />
                    </div>
                    <div>
                        <h3 style={{margin:'.7rem 0 0 1rem'}}>Online blood bank</h3>
                    </div>
                </div>
                <Sidebar visible={this.state.visible} onHide={() => this.setState({ visible: false })} style={{}}>
                        <div className="sideNav">
                            <ul>
                                <li>
                                    <h2>Hi,{this.state.username}</h2>
                                </li>
                                <li>
                                    <Link to="/home">
                                        <a href="/">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addDonar">
                                        <a href="/">Add Donar</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addSample">
                                        <a href="/">Add Sample</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/findDonar">
                                        <a href="/">Search Donors</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/findBank">
                                        <a href="/">Search Blood bank</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/editDonars">
                                        <a href="/">Edit Donars</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/editSample">
                                        <a href="/">Edit Samples</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edituser">
                                        <a href="/">Edit Users</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile">
                                        <a href="/">Profile</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        <a href="/" onClick={ () => {
                                            localStorage.clear();
                                        } }>Logout</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                </Sidebar>
            </div>
        )
    }
}
