import React, {useState} from 'react';
import firebase from '../../Config/firebase';
import {useHistory} from 'react-router-dom';

export const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullname] = useState("");

    let history = useHistory();

    const onSubmit = () => {

    const data = {
        email: email,
        fullName: fullName,
    };

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid) //testing console
        // save to realtime database
        const userId =  userCredential.user.uid
            firebase
            .database()
            .ref('users/' + userId)
            .set({data});

        setFullname("");
        setEmail("");
        setPassword("");
        //direct to etalase
        history.push('login')
         })
         .catch((error) => {
      console.log(error) //testing console
    // show Error Msg
  });
    };
    const onLogin = () =>
 {
     history.push('/login');
 }

    return (
        <div className="container mt-5">
            <p className="mt-4">Nama Lengkap</p>
        <input
            className="form-control"
            placeholder="Masukkan Nama Lengkap"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            />
            <p className="mt-4">email</p>
        <input
            className="form-control"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        <p className="mt-4"> password </p>
        <input
            className="form-control"
            placeholder="masukkan password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        <br />
        <br />
        <button type="button" onClick={onSubmit} className="btn btn-primary">
            Register
        </button>
        </div>
    )
}

export default Register;