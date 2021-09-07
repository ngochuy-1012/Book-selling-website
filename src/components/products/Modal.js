import React from 'react'
import firebase from '../../util/firebase';
import '../../public/css/modal.css'

const Modal = ({ setOpenModal, item }) => {
    const onDestroy =(id)=>{
        console.log(id)
        const productRef = firebase.database().ref('Products').child(item.id)
        productRef.remove()
        setOpenModal(false)
    }
    return (
        
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}>
                        X
                    </button>
                </div>
                <div className="title">
                    <h2> Xóa sản phẩm</h2>
                </div>
                <hr/>
                <div className="body">
                    <p>Bạn chắc chắn xóa ?</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        Hủy
                    </button>
                    <button id = "deleteBtn" onClick = {()=> onDestroy(item.id)}>Xóa</button>
                </div>
            </div>
        </div>
        
    )
}

export default Modal
