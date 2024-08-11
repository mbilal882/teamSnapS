import React from 'react'
import { useState } from 'react';
import "./signup.css"
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = document.getElementById("error");
        if (!email) {
            console.log("Error submitting email!");
            errors.style.display = "block";
            return;
        }
        errors.style.display = "none";
        console.log(email)
        navigate("/teamMember")
    }
    return (
        <div className='signUp'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className='text-center'>Enter your email address</h4>
                        <p className="text-center mt-4">To begin the sign up process, please provide your email address below.</p>
                        <div className="row">
                            <div className="col-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                                <div className="card mt-5 p-3">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <input onChange={(e) => { handleChange(e) }} type="email" placeholder='Enter Your Email Address...' className='form-control w-100 text-center' required />
                                            <div className='text-danger' id="error">Email is Required</div>
                                            <button onClick={handleSubmit} className='btn-custom-success w-100 mt-4' type='submit'>Continue</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <p className='text-center mt-4'>Already have an account?<a href="#">Log in</a></p>
                            <p className="text-center">TeamSnap is an online team manager used by millions of people worldwide to organize sports teams, groups and <br /> organizations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
