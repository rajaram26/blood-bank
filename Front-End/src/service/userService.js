import axios from 'axios';


export class userService{


    //GetALL

    getAllUser(){
        return axios.get('http://localhost:8080/api/getalluser').then(res => res.data);
    }
    getAllSample(){
        return axios.get('http://localhost:8080/api/getallsample').then(res => res.data);
    }

    getAllDonar(){
        return axios.get('http://localhost:8080/api/getalldonar').then(res => res.data);
    }

    //getByID

    getUserById(e){
        return axios.get(`http://localhost:8080/api/getUserById/${e}`).then(res => res.data);
    }

    getDonarById(e){
        return axios.get(`http://localhost:8080/api/getDonarById/${e}`).then(res => res.data);
    }

    getSampleById(e){
        return axios.get(`http://localhost:8080/api/getSampleById/${e}`).then(res => res.data);
    }

    //Delete
    deleteUserById(e){
        return axios.delete(`http://localhost:8080/api/deleteUser/${e}`).then(res => res.data);
    }

    //
    findUsername = (username,password) => {
        return axios.get(`http://localhost:8080/api/getUser`,{
        params: {
            username:username,
            password:password
        }}).then(res => res.data);
    }

    findByMail = (username) => {
        return axios.get(`http://localhost:8080/api/getUserByName`,{
        params: {
            username:username
        }}).then(res => res.data);
    }
}