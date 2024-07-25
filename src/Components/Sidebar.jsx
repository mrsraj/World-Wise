import style from './Sidebar.module.css'
import Logo from './Logo';
import AppNav from './AppNav';
import { Outlet } from 'react-router-dom';

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <Logo />
            <AppNav />
            <footer className='style.copyright'>
                &copy; copyright {new Date().getFullYear()} by world wise inc.
            </footer>
            
            <Outlet />


        </div>
    )
}

export default Sidebar;