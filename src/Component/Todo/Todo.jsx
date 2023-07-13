
import { useSelector } from "react-redux"
import { selectCron } from "../../Redux/Slice/cronSlice"


const Todo = () => {
    const { item } = useSelector(selectCron)
    // const [storage, setStorage] = useState([])

    // useEffect(() => {
    //     localStorage && setStorage(JSON.parse(localStorage.getItem('cron')))
    // }, [])
    return (
        <div className="">
            {item.map((todo, i) => (
                <div className="">
                    <p className="">{todo.value}dsgdfgfdzgg</p>
                </div>

            ))}
        </div>
    )
}

export default Todo