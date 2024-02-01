import React, { useRef, useState } from 'react'
import "./Form.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


const Login = () => {

    const schema = yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        email: yup.string().email()
    });

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const handleFormSubmit = (data) => {
        console.log(data)
    };


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="firstname">First-Name</label>
                    <input type="text" id='firstname' {...register('firstname')}/>
                    {errors.firstname && <p>{errors.firstname?.message}</p>}
                </div>

                <div>
                    <label htmlFor="lastname">Last-Name</label>
                    <input type="text" id='lastname' {...register('lastname')}/> 
                    {errors.lastname && <p>{errors.lastname?.message}</p>}

                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' {...register('email')} />
                    {errors.email && <p>{errors.email?.message}</p>}

                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login