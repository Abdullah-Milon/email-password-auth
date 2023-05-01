import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.config';

const auth = getAuth(app);

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const userLogged = result.user;
            console.log(userLogged)
            setSuccess('User Login successful.')
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const handleResetPassword = event =>{
        const email = emailRef.current.value //11
        if(!email){
            alert('Please provide your email address to reset password');
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Please cheack your email')
        })
        .catch(e =>{
            console.log(e)
            setError(e.message)
        })
    }

    return (
        <div className='w-25 mx-auto'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin} >
                <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name='email' ref={emailRef}  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder="Password" required />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p><small>Forget Password? Please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
            <p><small>New to this website? Please <Link to="/register">Register</Link></small></p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Login;