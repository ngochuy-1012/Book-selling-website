
import { useState } from 'react'
import { useHistory} from 'react-router-dom'
import Modal from './Modal'
const ProductData = ({ item, index }) => {
    const history= useHistory()
    const onEdit = (id) => {
        history.push(`/products/${id}/edit`);
    }
    const [modalOpen, setModalOpen] = useState(false);
    const handleOnDelete = (id) => {
        console.log(id)
        setModalOpen(true);
    }
    return (
        
        <tr>
            
            <td className="p-0">
            {item && modalOpen && <Modal setOpenModal={setModalOpen} item = {item}/>}  
            </td>
            <td >{index + 1}</td>
            <td><img src={item.file} className="imageUpLoad " /></td>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.type}</td>
            <td>{item.quantity}</td>
            <td>{item.sale}</td>
            <td>{(Number(item.price * (1 - item.sale / 100))).toLocaleString('vi-VN')}</td>
            <td className="des " >{item.des}</td>
            <td>{item.createAt}</td>
            <td>
                <div className="btn-group">
                    <div className="btn btn-warning" onClick={() => onEdit(item.id)}><i className="fa fa-edit " /></div>
                    <div className="btn btn-danger" onClick={() => handleOnDelete(item.id)}><i className="fa fa-trash " /></div>
                </div>
            </td>
           
        </tr>

    )
}

export default ProductData
