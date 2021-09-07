import React from 'react'
import firebase from '../../util/firebase';
import { useParams } from 'react-router-dom';
const DetailProduct = () => {
    const {id} = useParams()
    return (
        <div>
            detail
        </div>
    )
}

export default DetailProduct
