import React from 'react'
import "../public/css/App.css"
import SidebarData from './SidebarData'
import { NavLink, useHistory } from 'react-router-dom';
import { auth } from '../base/Base'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
const Sidebar = () => {
   const history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem('admin')
        history.push('/login-admin');
        window.location.reload()
    }
    return (
        <div className="sidebar">

            {
                auth && (
                    <div className="dropdown">
                        <div className="admin nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            <EmojiEmotionsIcon id="icon-admin" />Admin
                        </div>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div className="dropdown-item" onClick={handleLogout}>Đăng xuất</div>

                        </div>
                    </div>

                )
            }

            <hr />
            <ul className="sidebar-list" >
                {SidebarData.map((value, key) => {
                    return (
                        <li key={key}
                            className="row">
                            <NavLink to={value.link}  >
                                <div id="icon">{value.icon}</div>
                                <div id="title">{value.title}</div>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
