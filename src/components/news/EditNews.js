import { useParams, Link } from 'react-router-dom';
import firebase from '../../util/firebase';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {convertBase64} from '../../base/Base';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const EditNews = () => {
    const history = useHistory()
    const { id } = useParams();
    const [value, setValue] = useState({})
    useEffect(() => {
        const newsRef = firebase.database().ref('News').child(id);
        newsRef.on('value', snapshot => {
            const item = snapshot.val();
            setValue(item)
        })
    }, [])

    const [img, setImg] = useState()
    const handleUpLoad = async (e) => {
        const currFile = e.target.files[0];
        const base64Img = await convertBase64(currFile)
        setImg(base64Img);
    }

    const [currValue, setCurrValue] = useState()
    const handleOnChange = (e) => {
        let currName = e.target.name;
        let currValue = e.target.value;
        setCurrValue((value) => ({ ...value, [currName]: currValue }))
    }
    const onUpdate = () => {

        const newsRef = firebase.database().ref('News').child(id)
        let news;
        if (img) {
            news = { img }
            console.log(news)
            newsRef.update(news);
        }
        news = { ...currValue, "createAt": new Date().toLocaleString() }
       newsRef.update(news);
       history.push('/news')
    }
    return (
        <div className="m-5">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                <input type="text" className="form-control"  name="title" onChange={handleOnChange} defaultValue= {value.title} />

            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Hình ảnh</label>
                <input type="file" className="form-control" name="fileImage" onChange={handleUpLoad} defaultValue={value.img} />
                <img src={value.img} className="imageUpLoad " />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Nội dung</label>
                <textarea type="text" className="form-control" name="des" onChange={handleOnChange} defaultValue={value.des} ></textarea>
            </div>

        <button className="btn btn-primary btn-block" onClick ={onUpdate}>Tạo tin tức</button>
        <Link to="/news">
            <ArrowBackIcon id="icon-back" />
        </Link>
        </div>
    )
}

export default EditNews
