import s from './Todo.module.css'
import { useSelector } from "react-redux"
import { selectCron } from "../../Redux/Slice/cronSlice"
import Header from './../Header/Header';
import TodoItem from '../TodoItem/TodoItem';


const Todo = () => {
    const { item } = useSelector(selectCron)

    return (
        <div className={s.todo}>
            <Header />
            <div className={s.box}>
                <div className={s.title}>
                    <h1>Tasks</h1>
                </div>
            </div>
            <div className={s.itemTask}>
                {
                    item && item.map((data, id) => (
                        <TodoItem key={id} {...data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Todo