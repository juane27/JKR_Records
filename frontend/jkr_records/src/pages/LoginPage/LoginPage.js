import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiLogInCircle } from "react-icons/bi"


import { useDispatch, useSelector } from 'react-redux'
import { login, reset, getUserInfo } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from "../../components/Spinner"
import "./LoginPage.css";

const LoginPage = () => {

    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate("/giveaway")
        }

        dispatch(reset())
        dispatch(getUserInfo())

    }, [isError, isSuccess, user, message, navigate, dispatch])



    return (
        <>
            <div className="container auth__container">
                <h1 className="main__title">Login</h1>
                <div className='container-form'>
                {isLoading && <Spinner />}

                <form className="auth__form" autocomplete="off">
                <div>
                    <input type="text"
                        placeholder="E-mail"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        className='form-control'
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
                        required
                    />
                    </div>
                    <div className="link-div">
                    <Link to="/reset-password" className="link-style">Forget Password ?</Link>
                    </div>
                    <div>
                    <button className="btn ac_btn" type="submit" onClick={handleSubmit}>Login</button>
                    </div>
                    <div>
                <p>Or register if you don't have an account.</p>
                <a href="/register" className="btn ac_btn">Register</a>
                    </div>
                   

                </form>

            </div>
            </div>
        </>
    )
}

export default LoginPage