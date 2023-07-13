import { Link } from 'react-router-dom'
import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.container}>
                <div className={s.textBox}>
                    <div className={s.logo}>
                        Admin Panel
                    </div>
                    <nav className="">
                        <Link to='todo'>Todo</Link>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Header