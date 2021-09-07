import React from 'react'

import img1 from '../../public/image/img-slider-1.jpg'
import img2 from '../../public/image/img-slider-2.jpg'
import img3 from '../../public/image/img-slider-3.jpg'
export const SliderShow = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000" >
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={img2} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img3} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img1} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
export default SliderShow