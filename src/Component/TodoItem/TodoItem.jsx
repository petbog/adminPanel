import { useEffect, useState } from 'react';
import s from './TodoItem.module.css'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../Redux/Slice/cronSlice';

const TodoItem = ({ value, year, month, timeMonth, day, hour,id }) => {
    const [countdown, setCountdown] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        const calculateCountdown = () => {
            const currentDate = new Date();
            const futureDate = new Date(Number(year), Number(month), Number(timeMonth), Number(day), Number(hour));
            const remainingTime = futureDate - currentDate;

            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


            setCountdown(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        };


        calculateCountdown();
        const intervalId = setInterval(calculateCountdown, 1000);


        return () => clearInterval(intervalId);
    }, [year, month, timeMonth, day, hour]);

    const handleDelet = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div className="">
            <div className={s.todoBox}>
                <div className={s.value}>
                    <div className="">{value}</div>
                </div>
                <div className={s.params}>
                    <div className="">{year}</div>
                    {
                        month.map((month, i) => (
                            <div key={i} className="">{month} </div>
                        ))
                    }
                    {
                        timeMonth.map((timeMonth, i) => (
                            <div key={i} className="">{timeMonth} число</div>
                        ))
                    }
                    {
                        day.map((day, i) => (
                            <div key={i} className="">{day} </div>
                        ))
                    }
                    {
                        hour.map((hour, i) => (
                            <div key={i} className="">{hour} час</div>
                        ))
                    }
                    <button onClick={()=>handleDelet(id)}>Delete</button>.
                    {/* <div className="">{data.startDate}-{data.endDate}</div> */}
                </div>

            </div>
        </div>
    )
}

export default TodoItem