import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterForm = () => {

    const [message, setMessage] = useState(null);

    const baseUrl = axios.create({
        baseURL: "https://frontend-educational-backend.herokuapp.com/api"
    });

    const [loading, toggleLoading] = useState(false);
    const { handleSubmit, formState: { errors }, register } = useForm({
        mode: 'onChange'
    });

    async function onFormSubmit(data) {
        toggleLoading(true);

        try {
            const result = await baseUrl.post('/auth/signup', {
                username: data.email,
                email: data.email,
                password: data.password,
                role: ["user"],
            });
            console.log(result)
            setMessage(result.data.message);
        } catch (e) {
            if (e.response) {
                setMessage(e.response.data.message);
            } else if (e.request) {
                setMessage('Bad request. Try again later.');
            } else {
                setMessage('Something went wrong. Try again later.');
            }
        }
        toggleLoading(false);
    }

    return (

        <form  className='form' onSubmit={handleSubmit(onFormSubmit)}>
            <p className='message'>{ message }</p>
            <label htmlFor="email">
                Email: {errors.email && <span>{errors.email.message}</span>}
            </label>

            <input
                type="email"
                name="email"
                id="email"
                disabled={loading}
                {...register("email", {
                    required: "Required *",
                    maxLength: {
                        value: 255,
                        message: "Too long",
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                })}
            />

            <label htmlFor="password">
                Password: {errors.password && <span>{errors.password.message}</span>}
            </label>

            <input
                type="password"
                name="password"
                id="password"
                disabled={loading}
                {...register("password", {
                    required: "Required *",
                    minLength: {
                        value: 6,
                        message: "Too short",
                    },
                    maxLength: {
                        value: 255,
                        message: "Too long",
                    },
                })}
            />

            <button
                className='submit'
                type="submit"
                disabled={loading}
            >
                Register
            </button>
        </form>
    );
};
export default RegisterForm;