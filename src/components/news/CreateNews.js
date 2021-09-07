import React, { useState, useEffect } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from 'react-router-dom';
import Validation from '../../base/Validation'
import ValidationServer from '../../base/ValidationServer'
import firebase from '../../util/firebase';
import { convertBase64 } from '../../base/Base';
import "../../public/css/App.css"
const CreateNews = () => {
    const history = useHistory()
    const [value, setValue] = useState('');
    const [img, setImg] = useState(null);
    const [errors, setErrors] = useState({})
    const [errServer, setErrServer] = useState({})
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue(prevState => ({ ...prevState, [name]: value }))
        console.log(value)

    }

    const handleUpLoad = async (e) => {
        const fileImage = e.target.files[0];
        const base64Img = await convertBase64(fileImage)
        setImg(base64Img);

    }

    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(value));
        // console.log(Validation(value));
        // setErrors(Validation(img))
        const newsRef = firebase.database().ref('News').orderByChild('title').equalTo(value.title);
        newsRef.on('value', (snapNews) => {
            if (snapNews.val()) {
                setErrServer({ title: ValidationServer.title })
            } else {
                setErrServer({})
                setIsSubmitting(true)
            }
        })
        setIsSubmitting(true)
    }
    const clearData = () => {
        setValue('');
        setImg(null)
    }
    useEffect(() => {
        console.log('hihi',(Object.keys(errors).length ));
        console.log('hahah', Object.keys(errServer).length)
        if (Object.keys(errors).length === 1 && Object.keys(errServer).length === 0 && isSubmitting) {

            const newsRef = firebase.database().ref('News')
            const newsData = { ...value, img, "createAt": new Date().toLocaleString() };
            console.log(newsData);
            newsRef.push(newsData);
            clearData();
            history.push('/news')

        }
    }, [errors, errServer])

    return (
        <form className="m-5" onSubmit={handleOnSubmit}>
            <div className="">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                    <input type="text" className="form-control" placeholder="Nhập tiêu đề" name="title" onChange={handleOnChange} required />

                    {errors.title ? (<p className="error">{errors.title}</p>) : undefined}

                    {errServer.title ? (<p className="error">{errServer.title}</p>) : undefined}

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hình ảnh</label>
                    <input type="file" className="form-control" name="fileImage" onChange={handleUpLoad} required />
                    {errors.fileImage ? (<p className="error">{errors.fileImage}</p>) : undefined}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Nội dung</label>
                    <textarea type="text" className="form-control" placeholder="Nội dung mô tả" name="des" onChange={handleOnChange} required ></textarea>
                    {errors.des ? (<p className="error">{errors.des}</p>) : undefined}
                </div>
            </div>
            <button className="btn btn-primary btn-block">Tạo tin tức</button>
            <Link to="/news">
                <ArrowBackIcon id="icon-back" />
            </Link>
        </form>
    )
}

export default CreateNews
