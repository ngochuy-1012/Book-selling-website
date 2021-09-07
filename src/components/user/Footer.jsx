import React from 'react'
import Grid from './Grid'
import logo from '../../public/image/logo.png'
import { Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer className = 'footer'>
            <div className="container">
                <Grid
                    col = {3}
                    mdCol = {2}
                    smCol = {1}
                    gap = {100}
                >
                    <div>
                        <div className="footer__about">
                            <Link to = "/">
                                <img src= {logo} className="footer__logo" alt="" />
                            </Link>    
                        </div>
                        <div className="footer__content">
                            <ul className="footer__content__social-icon">
                                <li>
                                    <i className='bx bxl-facebook-square' ></i>
                                </li>
                                <li>
                                    <i className='bx bxl-instagram-alt' ></i>
                                </li>
                                <li>
                                    <i className='bx bxl-twitter'></i>
                                </li>
                                <li>
                                    <i className='bx bx-mail-send'></i>
                                </li>
                            </ul>
                        </div>    
                    </div>                    
                    <div>
                        <div className="footer__title">
                            Địa chỉ     
                        </div> 
                        <div className="footer__content">
                            <p>
                                Số điện thoại: 0123456789
                            </p>    
                            <p>
                                Chung cư Ecolife Capitol Lê Văn Lương, Tầng 14 tòa A3 Tòa, 58 Tố Hữu, Trung Văn, Nam Từ Liêm, Hà Nội 
                            </p>    
                            <p>
                                Gmail: htjvb@gmail.com
                            </p>    
                        </div>    
                    </div>   
                    <div>
                        <div className="footer__title">
                            Liên hệ    
                        </div> 
                        <div className="footer__content">
                            <p>Để lại email và chúng tôi sẽ liên hệ với bạn sớm nhất có thể!</p>
                            <form className="footer__content__form">
                                <input type="hidden" name="form-name" value="email-submit"/>
                                <input className="footer__content__form__email-input" type="input" name="email" placeholder="your@email.com" />
                                <button type="submit" className="footer__content__form__button">Submit</button> 
                            </form>   
                        </div>    
                    </div>                      
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
