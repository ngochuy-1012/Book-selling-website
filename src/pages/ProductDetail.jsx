import React from 'react'

import productData from '../assets/fake-data/products'

import Helmet from '../components/user/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/user/Section'
import Grid from '../components/user/Grid'
import ProductCard from '../components/user/ProductCard'
import ViewProductDetail from '../components/user/ViewProductDetail'

export const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug)
    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0, 0)
    },[product])

    return (
        <Helmet title={product.title}>
            <Section>
                <div className="inner-wrapper__card-products">
                    <SectionBody>
                        <ViewProductDetail
                            product={product}
                        />
                    </SectionBody>
                </div>
            </Section>

            <Section>
                <div className="inner-wrapper__card-products">
                    <SectionTitle>
                        khám phá thêm
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                relatedProducts.map((item, index) => (
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
        </Helmet>
    )
}

export default Product