import ProductData from './ProductData';
import { useState, useEffect } from 'react';
import FormSearch from './FormSearch';
import firebase from 'firebase';
const Product = () => {
    const [listProduct, setListProduct] = useState([]); 
    useEffect(() => {
        const dataProducts = firebase.database().ref("Products")
        dataProducts.on('value', (snapshot) => {
            let unmounted = false;
            const list = snapshot.val();
            const data = []
            for (let id in list) {
                data.push({ id, ...list[id] })
            }
            if (!unmounted) {

                setListProduct(data)
            }
            return () => {
                unmounted = true
            }
        })
    }, [])
     
    const [textSearch, setTextSearch] = useState('')
    const searchText = (text) => {
         setTextSearch(text)
    }
    const result = [];
    listProduct.filter((element, index) => element.name.indexOf(textSearch) !== -1)
    .map((element, index) =>{
        console.log(element.name)
        result.push(element)
    });
    console.log(result)

    return (

        <div className="mt-5">

            <FormSearch
                getTextSearch={(text) => searchText(text)}
            />

            <table className="table ">
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">#</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Tên Sách</th>
                        <th scope="col">Tác giả</th>
                        <th scope="col">Thể loại</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Sale(%)</th>
                        <th scope="col">Giá(VNĐ)</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Thời gian tạo</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((item, index) => (
                            <ProductData key={index} index={index} item={item}
                            />
                        ))

                    }

                </tbody>
            </table>
        </div>
    )
}

export default Product
