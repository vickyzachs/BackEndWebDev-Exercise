import React, { useState, useEffect } from "react";
import firebase from '../../Config/firebase';
import {useHistory} from 'react-router-dom';


const Login = ({title,angka}) => {

    const [welcomeText, setWelcomeText] = useState("Stock Voucher");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    let history= useHistory();

    const handleSubmit = () => {
        // setWelcomeText("Selamat Datang");
        const data = {
            email: email,
            password: password,
        };
        // console.log(data); 
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => history.push('/'))
        .catch((error) => console.log("error", error));
    };

    useEffect(() => {
       console.log("component did mount")
    }, [])

    useEffect(() => {
        console.log("Component did update")
    }, [welcomeText])

    const registrasi = () =>
 {
     history.push('/register');
 }    

    return (
        //JSX
        <div className="container mt-5">
            <h3>{welcomeText}</h3>
            <h5>
                {title} {angka}
            </h5>
            <p className="form-label mt-5">Email</p>
            <input 
                className="form-control"
                placeholder="Masukkan Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <p className="form-label">Password</p>
            <input 
                className="form-control"
                placeholder="Masukkan Password" 
                type="password" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <br/>
            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Sign In</button>
        </div> 
    )
}

export default Login;

