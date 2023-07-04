import AdminPanel from "../../Component/AdminPanel/AdminPanel"
import Header from "../../Component/Header/Header"
import Todo from "../../Component/Todo/Todo"
import s from './Home.module.css'


const Home = () => {
    return (
        <div className="">
            <div className={s.header}>
                <Header/>
            </div>
            <div className={s.container}>
                <AdminPanel/> 
                {/* <Todo/> */}
            </div>

        </div>
    )
}

export default Home