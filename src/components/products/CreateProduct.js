
import firebase from '../../util/firebase'
import { useState, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom"
import Validation from '../../base/Validation'
import ValidationServer from '../../base/ValidationServer'
import {convertBase64} from '../../base/Base';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "../../public/css/App.css"
const CreateProduct = () => {
    let history = useHistory()
    const [errors, setErrors] = useState({})
    const [value, setValue] = useState('');
    const [file, setFile] = useState(null);
    const [check, setCheck] = useState(false);
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue(prevState => ({ ...prevState, [name]: value }))

    }

    const handleUpLoad = async (e) => {
        const fileName = e.target.files[0];
        const base64Img = await convertBase64(fileName)
        setFile(base64Img);
    }

    const handleCheck = (e) => {
        const checked = e.target.checked;
        setCheck(checked);
    }
    const [errorServer, setErrorServer] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const createProduct = (e) => {
        e.preventDefault();
        setErrors(Validation(value))
        firebase.database().ref('Products').orderByChild('name').equalTo(value.name).on('value', (snapName) => {
            if (snapName.val()) {
                setErrorServer({ nameBook: ValidationServer.nameBook })
            } else {
                setErrorServer({})
                setIsSubmitting(true);
            }
        })

        setIsSubmitting(true);
    }

    useEffect(() => {
        
        console.log(value.des)
        if (Object.keys(errors).length === 1 && Object.keys(errorServer).length == 0 && isSubmitting) {
            const productRef = firebase.database().ref("Products")
            const products = { ...value, file, check, "createAt": new Date().toLocaleString() }
            console.log(products)
            productRef.push(products);
            setValue("");
            setFile(null);
            setCheck(false);
            history.push("/products")
        }
    }, [errors, errorServer])

    return (

        <form onSubmit={createProduct} className="mt-5 ml-5">

            <div className="row mt-3 mb-5">
                <div className="col-md-6 mt-2">
                    <label>Tên sách</label>
                    <input className="form-control mb-2" type="text" name="name" placeholder="nhập tên sách" onChange={handleOnChange} value={value.name} required />
                    {
                        errors.name ? (<p className="error"> {errors.name}</p>) : undefined

                    }
                    {
                        errorServer.nameBook ? (<p className="error"> {errorServer.nameBook}</p>) : undefined
                    }

                </div>
                <div className="col-md-6 mt-2">
                    <label>Tên tác giả</label>
                    <input className="form-control mb-2" type="text" name="author" placeholder="Nhập tên tác giả" onChange={handleOnChange} value={value.author || ''} required />
                    {
                        errors.author ? (<p className="error"> {errors.author}</p>) : undefined

                    }
                </div>
                <div className="col-md-6 mt-2">
                    <label>Thể loại</label>
                    <input className="form-control mb-2" type="text" name="type" placeholder="Nhập thể loại" onChange={handleOnChange} value={value.type || ''} required />
                </div>
                <div className="col-md-6 mt-2">
                    <label>Hình ảnh</label>
                    <input className="form-control mb-2" type="file" name="fileImage" onChange={handleUpLoad} required />
                </div>
                <div className="col-md-4 mt-2">
                    <label>Số lượng</label>
                    <input className="form-control mb-2" type="number" name="quantity" placeholder="Nhập số lượng" onChange={handleOnChange} value={value.quantity || ''} required />
                </div>
                <div className="col-md-4 mt-2">
                    <label>Sale(%)</label>
                    <input className="form-control mb-2" type="number" name="sale" placeholder="Nhập % giảm" onChange={handleOnChange} value={value.sale || ''} required />
                </div>
                <div className="col-md-4 mt-2">
                    <label>Giá</label>
                    <input className="form-control mb-2" type="number" name="price" placeholder="Nhập giá" onChange={handleOnChange} value={value.price || ''} required />
                </div>
                <div className="col-md-12 mt-2 ">
                    <label>Mô tả</label>
                    <textarea className="form-control"
                        name='des'
                        onChange={handleOnChange}
                        value={value.des || ''}
                        placeholder="Mô tả"
                        required
                    />
                    {
                        errors.des ? (<p className="error"> {errors.des}</p>) : undefined
                    }
                </div>


            </div>
            <div className="form-check" >
                <input type="checkbox" className="form-check-input" onChange={handleCheck} />
                <label >Check me out</label>
            </div>
            <button className="btn btn-primary btn-block">Tạo sản phẩm</button>
            <Link to ="/products">

                < ArrowBackIcon id="icon-back" />
            </Link>
        </form>
    )
}


export default CreateProduct

