import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = props => {
    return (
        <div className="testimonials">
            <blockquote>
                {props.blockquote}
                <cite>
                    <img src= {props.img} alt="" />
                    {props.name}
                </cite>
            </blockquote>
        </div>
    )
}

Testimonials.propTypes = {
    blockquote: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Testimonials
