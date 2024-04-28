import { useEffect, useState } from 'react'

import { BiUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "./RegisterPage.css";

import 'react-toastify/dist/ReactToastify.css';

import Spinner from '../../components/Spinner'


const RegisterPage = () => {
   
    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": "",

    })    
    const { first_name, last_name, email, password, re_password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    // Log the Redux state
    useEffect(() => {
        console.log("Redux state:", { user, isLoading, isError, isSuccess, message });
    }, [user, isLoading, isError, isSuccess, message]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== re_password) {
            toast.error("Passwords do not match")
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password
            }
            dispatch(register(userData))
        }
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
    
        if (isSuccess || user) {
            navigate("/")
            toast.success("An activation email has been sent to your email. Please check your email",{
                theme: "dark"
            })
        }
        if (user) {
            navigate("/")
            toast.success("Ya iniciaste sesión con un usuario, porfavor cierra sesión si quieres crear otra cuenta.",{
                theme: "dark"
            })
        }
    
        dispatch(reset())
    
    }, [isError, isSuccess, user, message, navigate, dispatch])



    return (
        <>
            <div className="container auth__container">
                <h1 className="main__title">Register</h1>
            <div className='container-form'>
                {isLoading && <Spinner />}

                <form className="auth__form"  autocomplete="off" >
                    <div>
                    <input type="text"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleChange}
                        value={first_name}
                        className='form-control'
                        autocomplete="off"
                        required
                    />
                    </div>
                    <div>
                    <input type="text"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleChange}
                        value={last_name}
                        className='form-control'
                        autocomplete="off"
                        required
                    />
                                        </div>
                    <div>
                    <input type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        className='form-control'
                        autocomplete="off"
                        required
                    />
                                        </div>
                    <div>
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        className='form-control'
                        autocomplete="off"
                        required
                    />
                                        </div>
                    <div>
                    <input type="password"
                        placeholder="Retype Password"
                        name="re_password"
                        onChange={handleChange}
                        value={re_password}
                        className='form-control'
                        autocomplete="off"
                        required
                    />
                                        </div>
                 
<div>
                    <button className="btn ac_btn" type="submit" onClick={handleSubmit}>Register</button>
                    </div>
                </form>
                </div>
            </div>

            
        </>
    )
}

export default RegisterPage