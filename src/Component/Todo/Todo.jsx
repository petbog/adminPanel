import s from './Todo.module.css'
import { useSelector } from "react-redux"
import { selectCron } from "../../Redux/Slice/cronSlice"
import Header from './../Header/Header';


const Todo = () => {
    const { item } = useSelector(selectCron)
    console.log(item)
    // const [storage, setStorage] = useState([])

    // useEffect(() => {
    //     localStorage && setStorage(JSON.parse(localStorage.getItem('cron')))
    // }, [])
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
                    item.map((data, i) => (
                        <div key={i} className="">
                            <div className="">{data.value}</div>
                            <div className="">{data.year}</div>
                            {
                                data.month.map((month, i) => (
                                    <div key={i} className="">{month}</div>
                                ))
                            }
                            {
                                data.timeMonth.map((timeMonth, i) => (
                                    <div key={i} className="">{timeMonth}</div>
                                ))
                            }
                            {
                                data.day.map((day, i) => (
                                    <div key={i} className="">{day}</div>
                                ))
                            }
                            {
                                data.hour.map((hour, i) => (
                                    <div key={i} className="">{hour}</div>
                                ))
                            }
                            <div className="">{data.startDate}-{data.endDate}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo