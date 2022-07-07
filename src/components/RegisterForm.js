import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ThemeContext } from "../context/ThemeContextProvider";

const RegisterForm = () => {
    const { setOverlay, setMessage, setLoading } = useContext(ThemeContext);

    const baseUrl = axios.create({
        baseURL: "https://frontend-educational-backend.herokuapp.com/api"
    });

    const { handleSubmit, formState: { errors }, register } = useForm({
        mode: 'onChange'
    });

    async function onFormSubmit(data) {
        setLoading(true);

        try {
            const result = await baseUrl.post('/auth/signup', {
                username: data.email,
                email: data.email,
                password: data.password,
                role: ["user"],
            });
            setMessage(result.data.message);
            setOverlay('success')
        } catch (e) {
            if (e.response) {
                setMessage(e.response.data.message);
                setOverlay('notice');
            } else if (e.request) {
                setMessage('Bad request. Try again later.');
                setOverlay('error');
            } else {
                setMessage('Something went wrong. Try again later.');
                setOverlay('error');
            }
        }
    }

    return (

        <form  className='form' onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="email">
                Email: {errors.email && <span>{errors.email.message}</span>}
            </label>

            <input
                type="email"
                name="email"
                id="email"
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
            >
                Register
            </button>
        </form>
    );
};
export default RegisterForm;