import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../context/AuthContextProvider';
import { ThemeContext } from "../context/ThemeContextProvider";

const Form = () => {
    const { setOverlay, setMessage, setLoading, formType } = useContext(ThemeContext);
    const { login } = useContext(AuthContext);

    const baseUrl = axios.create({
        baseURL: "https://frontend-educational-backend.herokuapp.com/api/auth/"
    });

    const { handleSubmit, formState: { errors }, register } = useForm({
        mode: 'onChange'
    });

    async function onFormSubmit(data) {
        setLoading(true);

        try {
            // No form type has been set.
            if (!formType) {
                return;
            }

            if (formType === "login") {
                const result = await baseUrl.post('signin', {
                    username: data.email,
                    email: data.email,
                    password: data.password,
                    role: ["user"],
                });
                login(result.data.accessToken);
            }

            if (formType === "register") {
                const result = await baseUrl.post('signup', {
                    username: data.email,
                    email: data.email,
                    password: data.password,
                    role: ["user"],
                });
                setMessage(result.data.message);
                setOverlay('success');
            }
        } catch (e) {
            if (e.response) {
                // Wrong credentials for login.
                if (e.response.status === 401) {
                    setMessage("Wrong credentials.");
                    setOverlay('notice');
                }

                // Error registering.
                setMessage(e.response.data.message);
                setOverlay('notice');
            } else if (e.request) {
                // Common error if request fails to connect to backend.
                setMessage('Bad request. Try again later.');
                setOverlay('error');
            } else {
                // Common error if request.
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
                { formType }
            </button>
        </form>
    );
};
export default Form;