import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Button from './Button'

import numberWithCommas from '../../util/numberWithCommas'

const ProductCard = props => {
    return (
        <div className="product-card">
            <Link to={`/products/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img_1} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {numberWithCommas(props.price)}đ
                    <span className="product-card__price__old">
                        <del>{numberWithCommas(399000)}đ</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                >
                    chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
