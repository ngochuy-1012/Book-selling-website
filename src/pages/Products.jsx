import React,{useState,useCallback,useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom';
import Grid from '../components/user/Grid'
import Button from '../components/user/Button'
import CheckBox from '../components/user/CheckBox'
import Helmet from '../components/user/Helmet'
import ProductsCard from '../components/user/ProductCard'
import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
const Products = props => {
    // const {keyword} = useParams()
    const keyword = props.match.params.keyword
    console.log(keyword);
    console.log("keyword");
    const initFilter = {
        category: [],
    }
    const productList = productData.getAllProducts()
    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            if (type === 'CATEGORY'){
                setFilter({...filter, category: [...filter.category, item.categorySlug]})
            }
        }
        else {
            if (type === 'CATEGORY'){
                const newCategory = filter.category.filter(e => e !== item.categorySlug)
                setFilter({...filter, category: newCategory})
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(
        () => {
            let temp = productList
            
            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }
            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title="Sản phẩm">
            <div className="products">
                <div className="products__filter" ref={filterRef}>
                    <div className="products__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
                    <div className="products__filter__widget">
                        <div className="products__filter__widget__title">
                            danh mục sản phẩm
                        </div>
                        <div className="products__filter__widget__content">
                            {
                                category.map((item) => (
                                    <div className="products__filter__widget__content__item">
                                        <CheckBox 
                                            label = {item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="products__filter__widget">
                        <div className="products__filter__widget__content">
                            <Button size ="sm" onClick={clearFilter}>xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="products__filter__toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>bộ lọc</Button>
                </div>
                <div className="products__content">
                    <Grid
                        col= {3}
                        mdCol = {2}
                        smCol= {1}
                        gap = {20}
                    >
                        {
                            products.map((item,index) => (
                                <ProductsCard 
                                    key={index}
                                    img_1={item.img_1}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </div>
            </div>
        </Helmet>
    )
}

export default Products