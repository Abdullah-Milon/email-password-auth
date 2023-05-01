import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase.config';

//5
const auth = getAuth(app);

const Register = () => {
    // 2
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleEmailChange = event => {
        // console.log(event.target.value);
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        // console.log(event.target.value)
    }

    const handleSubmit = event => {
        // 1. prevent page refresh
        event.preventDefault();
        setSuccess('') //9
        setError('') //৭
        // 2. collect data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
          // validate 10
          if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        event.target.reset();
        setSuccess('User has been created successfully')

        // 3 create user in firebase (6)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.error(error)
                setError(error.message) //৭
            })
    }
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h4>Please Register</h4>
                <form onSubmit={handleSubmit} >
                    {/* <input className='w-50 mb-4 rounded ps-2' type="text" name="name" id="name" placeholder='Your Name' required /> */}
                    <br />
                    <input /* 1 */ onChange={handleEmailChange} className='w-50 mb-4 rounded ps-2' type="email" name="email" id="email" placeholder='Your Email' required />
                    <br />
                    <input /* 3 */ onBlur={handlePasswordBlur} className='w-50 mb-4 rounded ps-2' type="password" name="password" id="password" placeholder='Your Password' required />
                    <br />
                    <input className='btn btn-primary' type="submit" value="Register" />
                </form>
                <p className='text text-danger'>{error}</p>
                <p className='text text-success'>{success}</p>
            </div>
        </div>
    );
};

export default Register;