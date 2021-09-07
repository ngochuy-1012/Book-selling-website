import { useParams, Link } from 'react-router-dom';
import firebase from '../../util/firebase';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {convertBase64} from '../../base/Base';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const EditProduct = () => {
    const history = useHistory()
    const { id } = useParams();
    const [errors, setErrors] = useState({})
    const [value, setValue] = useState({})
    useEffect(() => {
        const productRef = firebase.database().ref('Products').child(id);
        productRef.on('value', snapshot => {
            const item = snapshot.val();
            setValue(item)
        })
    }, [])

    const [file, setFile] = useState()
    const handleUpLoad = async (e) => {
        const currFile = e.target.files[0];
        const base64Img = await convertBase64(currFile)
        setFile(base64Img);
    }

    const [currValue, setCurrValue] = useState()
    const handleOnChange = (e) => {
        let currName = e.target.name;
        let currValue = e.target.value;
        setCurrValue((value) => ({ ...value, [currName]: currValue }))
    }
    const onUpdate = () => {

        const productRef = firebase.database().ref('Products').child(id)
        let products;
        if (file) {
            products = { file }
            productRef.update(products);
        }
        products = { ...currValue, "createAt": new Date().toLocaleString() }
        productRef.update(products);
        history.push('/products')
    }
    return (
        <div className="ml-5">
            <div className="row mt-3 mb-5">
                <div className="col-md-6 mt-2">
                    <label>Tên sách</label>
                    <input className="form-control mb-2" type="text" name="name" placeholder="nhập tên sách" onChange={handleOnChange} defaultValue={value.name} />

                </div>
                <div className="col-md-6 mt-2">
                    <label>Tên tác giả</label>
                    <input className="form-control mb-2" type="text" name="author" placeholder="Nhập tên tác giả" onChange={handleOnChange} defaultValue={value.author} />
                </div>
                <div className="col-md-6 mt-2">
                    <label>Thể loại</label>
                    <input className="form-control mb-2" type="text" name="type" placeholder="Nhập thể loại" onChange={handleOnChange} defaultValue={value.type} />
                </div>
                <div className="col-md-6 mt-2">
                    <label>Hình ảnh</label>
                    <input className="form-control mb-2" type="file" onChange={handleUpLoad} defaultValue={value.img} />
                    <img src={value.file} className="imageUpLoad " />
                </div>
                <div className="col-md-4 mt-2">
                    <label>Số lượng</label>
                    <input className="form-control mb-2" type="number" name="quantity" placeholder="Nhập số lượng" onChange={handleOnChange} defaultValue={value.quantity} />
                </div>
                <div className="col-md-4 mt-2">
                    <label>Sale(%)</label>
                    <input className="form-control mb-2" type="number" name="sale" placeholder="Nhập % giảm" onChange={handleOnChange} defaultValue={value.sale} />

                </div>
                <div className="col-md-4 mt-2">
                    <label>Giá</label>
                    <input className="form-control mb-2" type="number" name="price" placeholder="Nhập giá" onChange={handleOnChange} defaultValue={value.price} />
                </div>
                <div className="col-md-12 mt-2 ">
                    <label>Mô tả</label>
                    <textarea className="form-control"
                        name='des'
                        onChange={handleOnChange} defaultValue={value.des}
                        placeholder="Mô tả"
                        required
                    />
                    {
                        errors.des ? (<p className="error"> {errors.des}</p>) : undefined
                    }
                </div>
            </div>

            <div className="form-check">
                {
                    value.check ? (<input type="checkbox" className="form-check-input" checked />) : (<input type="checkbox" className="form-check-input" />)
                }

                <label >Check me out</label>
            </div>
            <button className="btn btn-primary btn-block" onClick={onUpdate}>Sửa sản phẩm</button>
            <Link to="/products">

                < ArrowBackIcon id="icon-back" />
            </Link>
        </div>
    )
}

export default EditProduct
