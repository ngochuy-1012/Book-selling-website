import React from 'react'
import "../../public/css/loginAdmin.css"
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { hashPass, comparePass } from '../../base/Base';
import ValidationServer from '../../base/ValidationServer';
import Validation from '../../base/Validation';
import firebase from '../../util/firebase'
const UpdatePass = () => {
    const { id } = useParams()
    const history = useHistory();
    const [err, setErr] = useState({})
    // check server
    const [errors, setErrors] = useState({})
    const [currPass, setCurrPass] = useState();
    const [pass, setPass] = useState({});
    useEffect(() => {
        const newsRef = firebase.database().ref('Admin').child(id);
        newsRef.on('value', snapshot => {
            const item = snapshot.val();
            setPass(item);
        })
    }, [])

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCurrPass(prevState => ({ ...prevState, [name]: value }));
    }
    const handleUpdate = async () => {

        comparePass(currPass.password, pass.password)
            .then((same) => {
                if (same) {
                    if (currPass.password !== currPass.password1 && currPass.password1 === currPass.password2) {
                        hashPass(currPass.password2)
                            .then((hashPass) => {
                                const newsRef = firebase.database().ref('Admin').child(id)
                                newsRef.update({ password: hashPass })
                                history.push('/login-admin')
                            }

                            )
                    }else{
                        setErr(Validation(currPass))
                        
                    }
                } else {
                    setErrors({ validPassword: ValidationServer.password })
                }
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2" />
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-title">
                        UPDATE PASSWORD
                    </div>
                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control" name="password" required onChange={handleOnChange} />
                                    {
                                        errors.validPassword && (<p className="error">{errors.validPassword}</p>)
                                    }
                                </div>

                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD UPDATE</label>
                                    <input type="password" className="form-control" name="password1" required onChange={handleOnChange} />
                                    {
                                        err.password1&& (<p className="error">{err.password1}</p>)
                                    }


                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">RE-PASSWORD UPDATE</label>
                                    <input type="password" className="form-control" name="password2" required onChange={handleOnChange} />
                                    {
                                        err.password2&& (<p className="error">{err.password2}</p>)
                                    }

                                </div>
                                <div class="form-group">
                                    <Link to="/login-admin" class="ForgetPwd m-0" value="Login">Back</Link>
                                </div>
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="button" className="btn btn-outline-primary" style={{ marginRight: '-45px' }} onClick={handleUpdate} >UPDATE</button>

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

export default UpdatePass
