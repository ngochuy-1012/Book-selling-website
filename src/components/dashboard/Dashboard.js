import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import firebase from '../../util/firebase'
const Dashboard = () => {
    const [listProduct, setListProduct] = useState([]); 
    useEffect(() => {
        const dataProducts = firebase.database().ref("Products")
        dataProducts.on('value', (snapshot) => {
            let unmounted = false;
            const list = snapshot.val();
            const data = []
            for (let id in list) {
                data.push(Number(list[id].quantity))
            }
            if (!unmounted) {

                setListProduct(data)
            }
            return () => {
                unmounted = true
            }
        })
    }, [])
    console.log(listProduct)
    let totalProducts;
    listProduct.reduce((acc, curr )=> {
        return totalProducts = acc+ curr
    }, 0)
    return (
        
        <div className="row m-5">
            <div className="col-lg-6 col-xl-3 mb-4">
                <div className="card bg-primary text-white h-100">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="me-3">
                                <div className="text-white-75 small">Số lượng người dùng</div>
                                <div className="text-lg fw-bold">0</div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar feather-xl text-white-50"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>
                        </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between small">
                        <Link to ="#" className="text-white stretched-link" >View Report</Link>
                        <div className="text-white"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>{/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-3 mb-4">
                <div className="card bg-warning text-white h-100">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="me-3">
                                <div className="text-white-75 small">Số lượng sản phẩm</div>
                                <div className="text-lg fw-bold">{totalProducts}</div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign feather-xl text-white-50"><line x1={12} y1={1} x2={12} y2={23} /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between small">
                        <Link className="text-white stretched-link" to ="/products">Sản phẩm</Link>
                        <div className="text-white"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>{/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-3 mb-4">
                <div className="card bg-success text-white h-100">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="me-3">
                                <div className="text-white-75 small">Đơn hàng đợi duyệt</div>
                                <div className="text-lg fw-bold">0</div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square feather-xl text-white-50"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                        </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between small">
                        <Link className="text-white stretched-link" to="/orders">Đơn hàng</Link>
                        <div className="text-white"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>{/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-3 mb-4">
                <div className="card bg-danger text-white h-100">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="me-3">
                                <div className="text-white-75 small">Phản hồi khách hàng</div>
                                <div className="text-lg fw-bold">0</div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle feather-xl text-white-50"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                        </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between small">
                        <a className="text-white stretched-link" href="#!">View Requests</a>
                        <div className="text-white"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>{/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
