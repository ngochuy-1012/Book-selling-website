import React from 'react'
import bcrypt from 'bcryptjs';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { hashPass, comparePass } from '../../base/Base';
import ValidationServer from '../../base/ValidationServer'
import firebase from '../../util/firebase'
import "../../public/css/loginAdmin.css"
import "../../public/css/App.css"
const LoginAdmin = () => {
    const history = useHistory()
    const [errors, setErrors] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

        const handleGetId = (id) => {
            history.push(`/${id}/pass-update`);
        }
        const handleOnChange = (e) => {
            setEmail(e.target.value)
        }
        const handlePassword = (e) => {
            setPassword(e.target.value)
        }
        useEffect(() => {
            const adminRef = firebase.database().ref("Admin").orderByChild('email')
            adminRef.on('value', (snapData) => {
                let unmounted = false;
                const list = snapData.val();
                const dataArr = []
                for (let id in list) {
                    dataArr.push({ id, ...list[id] })
                }
                if (!unmounted) {

                    setData(dataArr)
                }
                return () => {
                    unmounted = true
                }
            })

        }, [])
        const saveLocal = () => {
            const dataArr = []
            data.forEach((data) => {
                const item = {
                    id: data.id,
                    email: data.email
                }
                dataArr.push(item)
            })
            return localStorage.setItem('admin', JSON.stringify(dataArr))
        }
        const hanleInputInfor = (e) => {
            data.forEach((item) => {
                if (item.email === email) {
                    comparePass(password, item.password)
                        .then((same) => {
                            if (same) {
                                saveLocal();
                                history.push('/admin-dashboard');
                                window.location.reload()
                            }
                            else {

                                setErrors({ validPassword: ValidationServer.password })
                            }
                        })

                } else {
                    setErrors({ validEmail: ValidationServer.email })
                }
            })
        }
        let id;
        data.forEach((item)=>{
            return id = item.id;
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2" />
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true" />
                        </div>
                        <div className="col-lg-12 login-title">
                            ADMIN
                        </div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form>
                                    <div className="form-group">
                                        <label className="form-control-label">Email</label>
                                        <input type="email" className="form-control" name="email" onChange={handleOnChange} />
                                        {
                                            errors.validEmail && (<p className="error">{errors.validEmail}</p>)
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" className="form-control" name="password" onChange={handlePassword} />
                                        {
                                            errors.validPassword && (<p className="error">{errors.validPassword}</p>)
                                        }
                                    </div>
                                    <div class="form-group">
                                        {

                                            <Link onClick={() => handleGetId(id)} class="ForgetPwd m-0">Update Password ?</Link>
                                        }
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="button" className="btn btn-outline-primary" style={{ marginRight: '-45px' }} onClick={hanleInputInfor}>LOGIN</button>

                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

    export default LoginAdmin
