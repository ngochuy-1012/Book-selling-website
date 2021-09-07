import React, {useState,useEffect} from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import numberWithCommas from '../../util/numberWithCommas'
import Button from './Button'
const ViewProductDetail = props => {

    const product = props.product

    const [quantity, setQuantity] = useState(1)
    console.log(quantity);
    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        }
        else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
        
    }

    useEffect(() => {
        setQuantity(1)
    }, [product])

    const goToCart = () => {
        props.history.push('/cart')
    }

    return (
        <div className="view-product-detail">
            <div className="view-product-detail__images">
                <div className="view-product-detail__image__list">
                    <div className="view-product-detail__images__list__item">
                        <img src={product.img_1} alt="" />
                    </div>
                    <div className="view-product-detail__images__list__item">
                        <img src={product.img_2} alt="" />
                    </div>
                </div>
                <div className="view-product-detail__images__main">
                    <img src={product.img_1} alt="" />
                </div>
                <div className="view-product-detail-description">
                    <div className="view-product-detail-description__title">
                        Giới thiệu sách
                    </div>
                    <div className="view-product-detail-description__content" dangerouslySetInnerHTML = {{__html: product.description}}></div>
                </div>
            </div>
            <div className="view-product-detail__info">
                <h1 className="view-product-detail__info__title">
                    {product.title}
                </h1>
                <div className="view-product-detail__info__item">
                    <div className="view-product-detail__info__item__price">
                        <p>{numberWithCommas(product.price)}đ</p>
                    </div>
                    <div className="view-product-detail__info__item__author">
                        <p>Tác giả: <strong>{product.author}</strong></p>
                    </div>
                    <div className="view-product-detail__info__item__publisher">
                        <p>Nhà xuất bản: <strong>{product.publisher}</strong></p>
                    </div>
                    <div className="view-product-detail__info__item__numOfPages">
                        <p>Số trang: <strong>{product.numOfPages}</strong></p>
                    </div>
                    <div className="view-product-detail__info__item__quantity">
                        <div className="view-product-detail__info__item__quantity__title">
                            Số lượng
                        </div>
                        <div className="view-product-detail__info__item__quantity__content">
                            <div className="view-product-detail__info__item__quantity__content__btn" onClick={() => updateQuantity('minus')}>
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="view-product-detail__info__item__quantity__content__input">
                                {quantity}
                            </div>
                            <div className="view-product-detail__info__item__quantity__content__btn" onClick={() => updateQuantity('plus')}>
                                <i className="bx bx-plus"></i>
                            </div>
                        </div>
                    </div>

                    <div className="view-product-detail__info__item__buy">
                        <Button size = "sm">thêm vào giỏ</Button>
                        <Button size = "sm" onClick={() => goToCart()}>mua ngay</Button>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

ViewProductDetail.propTypes = {
    product: PropTypes.object.isRequired
}

export default withRouter(ViewProductDetail)
