import { Link, useLocation } from 'react-router-dom'
import s from './Header.module.css'


const Header = () => {
    const location = useLocation()


    return (
        <div className={s.Header}>
            <div className={s.container}>
                <div className={s.textBox}>
                    <div className={s.logo}>
                        Admin Panel
                    </div>
                    {
                        location.pathname !== '/' ?
                            <nav className={s.todoLinl}>
                                <Link className={s.link} to='/'>Home</Link>
                            </nav> :
                            <nav className={s.todoLinl}>
                                <Link className={s.link} to='todo'>Todo</Link>
                            </nav>
                    }

                </div>
            </div>

        </div>
    )
}

export default Header