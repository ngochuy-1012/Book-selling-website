import { useState } from 'react'
import { useHistory} from 'react-router-dom'
import Modal from './Modal'
const NewsData = ({item, index}) => {
    const history= useHistory()
    const onEdit = (id) => {
        history.push(`/news/${id}/edit`);
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
        <td>{index+1}</td>
        <td>{item.title}</td>
        <td><img src={item.img} className="imageUpLoad " /></td>
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

export default NewsData
