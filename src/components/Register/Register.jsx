import React, { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('')

    const handleEmailChange = event =>{
        // console.log(event.target.value);
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event =>{
        // console.log(event.target.value)
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h4>Please Register</h4>
                <form onSubmit={handleSubmit} >
                    {/* <input className='w-50 mb-4 rounded ps-2' type="text" name="name" id="name" placeholder='Your Name' required /> */}
                    <br />
                    <input /* 1 */ onChange={handleEmailChange} className='w-50 mb-4 rounded ps-2'  type="email" name="email" id="email" placeholder='Your Email' required />
                    <br />
                    <input /* 3 */ onBlur={handlePasswordBlur} className='w-50 mb-4 rounded ps-2'  type="password" name="password" id="password" placeholder='Your Password' required />
                    <br />
                    <input className='btn btn-primary' type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;