
import React, { useState } from 'react'
import Validation from './Validatinon';

function LoginPage() {
    const [values, setValues] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
    });

    const [errors, setErrors] = useState({

    })
    const handleChange = (e, name) => {
        const newObj = { ...values, [e.target.name]: e.target.value }

        setValues(newObj)
    }

    const handleValidation = (e) => {
        e.preventDefault();
        setErrors(Validation(values))

    }

    return (
        <div className='signup_container w-100 d-flex justify-content-center'>
            <h2>Login Page</h2>
            <div className='form mt-3'>
                <form className='border p-3' onSubmit={handleValidation}>

                    <input type='text' placeholder='Enter First Name'
                        name="FirstName"
                        className='form-control'
                        onChange={handleChange}
                    />
                    {errors.FirstName && <p style={{ color: "red" }}>{errors.FirstName}</p>}

                    <input type='text' placeholder='Enter Last Name' name="LastName"
                        className='form-control'
                        onChange={handleChange} />
                    {errors.LastName && <p style={{ color: "red" }}>{errors.LastName}</p>}

                    <input type='text' placeholder='Enter Email id'
                        name="Email"
                        className='form-control' onChange={handleChange} />
                    {errors.Email && <p style={{ color: "red" }}>{errors.Email}</p>}
                    <input type='text' placeholder='Phone Number'
                        className='form-control'
                        name="PhoneNumber" onChange={handleChange} />
                    {errors.PhoneNumber && <p style={{ color: "red" }}>{errors.PhoneNumber}</p>}

                    <div className='mt-3'>
                        <button className='btn btn-sucess w-40'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginPage
