import React from 'react';
import Helmet from '../components/user/Helmet'
import SliderShow from '../components/user/SliderShow'
import ProductCard from '../components/user/ProductCard'
import PreviewBook from '../components/user/PreviewBook'
import Testimonials from '../components/user/Testimonials'
import Section, { SectionTitle, SectionBody } from '../components/user/Section'
import Grid from '../components/user/Grid'
import {Link} from 'react-router-dom'
import PolicyCard from '../components/user/PolicyCard'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import testimonials from '../assets/fake-data/testimonials'
import banner from '../public/image/banner-sale.png'
const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <SliderShow />
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>

            <Section>
                <div className="inner-wrapper__card-products">
                    <SectionTitle>
                        top sản phẩm bán chạy trong tuần
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                productData.getProducts(4).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img_1={item.img_1}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </div>
            </Section>

            <Section>
                <div className="inner-wrapper__preview-book">
                    <SectionTitle>
                        Đọc trước sách
                    </SectionTitle>
                    <SectionBody>
                        <PreviewBook />
                    </SectionBody>
                </div>
            </Section>
            <Section>
                <div className="inner-wrapper__card-products">
                    <SectionTitle>
                        sản phẩm mới
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                productData.getProducts(8).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img_1={item.img_1}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </div>
            </Section>
            <Section>
                <SectionBody>
                    <Link to="/products">
                        <img src={banner} alt="" />
                    </Link>
                
                </SectionBody>
            </Section>
            <Section>
                <div className="inner-wrapper__card-products">
                    <SectionTitle>
                        phổ biến
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                productData.getProducts(12).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img_1={item.img_1}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </div>
            </Section>
            <Section>
                <div className="inner-wrapper__testimonials">
                    <SectionTitle>
                        Khách hàng nói gì về chúng tôi
                    </SectionTitle>
                    <SectionBody>
                            <Grid
                                col={3}
                                mdCol={2}
                                smCol={1}
                                gap={20}
                            >
                                {
                                    testimonials.map((item, index) => (
                                        <Testimonials 
                                            key={index}
                                            blockquote={item.blockquote}
                                            img ={item.img}
                                            name = {item.name}
                                        />        
                                    ))
                                }
                            </Grid>
                    </SectionBody>
                </div>
            </Section>
        </Helmet>
    )
}

export default Home