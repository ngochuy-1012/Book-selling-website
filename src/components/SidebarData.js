import React from 'react'
import BookIcon from '@material-ui/icons/Book';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DashboardIcon from '@material-ui/icons/Dashboard';
const SidebarData = [
    {
    title:"Dashboard",
    icon:<DashboardIcon/>,
    link:"/admin-dashboard"
    },
    {
    title:"Quản lí tin tức",
    icon:<BookmarkIcon/>,
    link:"/admin-news"
    },
    {
    title:"Quản lí sản phẩm",
    icon:<BookIcon/>,
    link:"/admin-products"
    },
    {
    title:"Quản lí đơn hàng",
    icon:<ShoppingBasketIcon/>,
    link:"/admin-orders"  
    },
    {
    title:"Thông tin vận chuyển",
    icon:<LocalShippingIcon/>,
    link:"/admin-delivery"  
    }

]


export default SidebarData
