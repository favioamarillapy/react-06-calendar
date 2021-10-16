import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hook/useForm'
import { startLogin, startRegister } from '../../actions/authAction'
import './login.css'
import Swal from 'sweetalert2'

export const AuthScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, formLoginHandleInputChange] = useForm({ lemail: '', lpassword: '' });
    const { lemail, lpassword } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (lemail == '') {
            Swal.fire('The fiel email is required');
            return;
        }
        if (lpassword == '') {
            Swal.fire('The fiel password is required');
            return;
        }

        dispatch(startLogin({ email: lemail, password: lpassword }));
    }

    const [formRegisterValues, formRegisterHandleInputChange] = useForm({ rname: '', remail: '', rpassword: '', rpassword2: '' });
    const { rname, remail, rpassword, rpassword2 } = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (rname == '') {
            Swal.fire('The fiel name is required');
            return;
        }
        if (remail == '') {
            Swal.fire('The fiel email is required');
            return;
        }
        if (rpassword == '') {
            Swal.fire('The fiel password is required');
            return;
        }

        if (rpassword != rpassword2) {
            Swal.fire('Passwords must match');
            return;
        }

        dispatch(startRegister({ name: rname, email: remail, password: rpassword }));
    }

    return (
        <div className="container login-container">
            <div className="row login-form-container">
                <div className="col-md-6 login-form-1">
                    <h3>Sign In</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="lemail"
                                value={lemail}
                                onChange={formLoginHandleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="lpassword"
                                value={lpassword}
                                onChange={formLoginHandleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Sign Up</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="rname"
                                value={rname}
                                onChange={formRegisterHandleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="remail"
                                value={remail}
                                onChange={formRegisterHandleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="rpassword"
                                value={rpassword}
                                onChange={formRegisterHandleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeate Password"
                                name="rpassword2"
                                value={rpassword2}
                                onChange={formRegisterHandleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
