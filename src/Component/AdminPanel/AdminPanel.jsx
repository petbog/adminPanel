import { useEffect, useState } from 'react'
import s from './AdminPanel.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCron, selectCron } from '../../Redux/Slice/cronSlice'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import close from '../../Img/icons8-крестик-78.png'
import pencil from '../../Img/pencil-svgrepo-com.svg'


const AdminPanel = () => {
    const [text, setText] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [years, SetYear] = useState('')
    const [months, SetMonth] = useState([])
    const [dayse, SetDay] = useState([])
    const [hours, SetHour] = useState([])
    const [minut, SetMinutes] = useState([])
    const { item } = useSelector(selectCron)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(addCron(
            [{
                value: text,
                year: years,
                month: months,
                timeMonth: minut,
                day: dayse,
                hour: hours,
                startDate: startDate && startDate.getDate(),
                endDate: endDate && endDate.getDate(),
            }])
        )
    }, [dispatch, startDate, endDate, years, months, minut, dayse, hours, text])
    const whenYear = ['Год', 'Месяц', 'День', 'Час']
    const whenMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрю', 'Декабрь']
    const whenDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',]
    const whenHour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const whereMinutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

    const handleStorage = () => {
        item && localStorage.setItem('cron', JSON.stringify(item));
    }
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleYear = (e) => {
        SetYear(e.target.value)
    }
    const handleMonth = (event) => {
        if (event.target.selectedOptions) {
            const selectedOptions = Array.from(event.target.selectedOptions).map((item) => item.value)
            SetMonth(selectedOptions)
        } else {
            SetMonth([])
        }
    }
    const handleDay = (event) => {
        if (event.target.selectedOptions) {
            const selectedOptions = Array.from(event.target.selectedOptions).map(
                (option) => option.value
            );
            SetDay(selectedOptions);
        } else {
            SetDay([]);
        }
    }
    const handleHour = (event) => {
        if (event.target.selectedOptions) {
            const selectedOptions = Array.from(event.target.selectedOptions).map(
                (option) => option.value
            );
            SetHour(selectedOptions);
        } else {
            SetHour([]);
        }
    }
    const handleMinutes = (event) => {
        if (event.target.selectedOptions) {
            const selectedOptions = Array.from(event.target.selectedOptions).map(
                (option) => option.value
            );
            SetMinutes(selectedOptions);
        } else {
            SetMinutes([]);
        }
    }
    const handleInput = (e) => {
        setText(e.target.value)
    }
    const inputClear = () => {
        setText('')
    }
    return (
        <div className={s.admin}>
            <div className={s.container}>
                <div className={s.inputBox}>
                    <img className={s.pencil} src={pencil} alt="pencil" />
                    <input className={s.inputItem} value={text} type="text" onChange={handleInput} />
                    {
                        text && <img className={s.inputClose} onClick={inputClear} src={close} alt='close' />
                    }
                </div>
                <div className={s.year}>
                    <p className={s.title}>Выберите промежуток времени</p>
                    <select className={s.yearSelect} name="year" onChange={handleYear}>
                        {
                            whenYear.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.month}>
                    <p className={s.month_title}>Выберите месяц</p>
                    <select className={s.monthSelect} multiple name="month" onChange={handleMonth}>
                        {
                            whenMonth.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.day}>
                    <p className={s.day_title}>Выберите день недели</p>
                    <select className={s.daySelect} multiple name="day" onChange={handleDay}>
                        {
                            whenDay.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.hour}>
                    <p className={s.hour_title}>Выберите час</p>
                    <select className={s.hourSelect} multiple name="hour" onChange={handleHour}>
                        {
                            whenHour.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.minutes}>
                    <p className={s.minutes_title}>Выберите минуту</p>
                    <select className={s.minutesSelect} multiple name="minutes" onChange={handleMinutes}>
                        {
                            whereMinutes.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.dataPic}>
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                    />
                </div>
                <div className={s.calendar}>
                    {/* <p className={s.calendar_title}>Ваша дата </p> */}
                    {/* {
                      item.map(({ value,day, hour, month, timeMonth, year, startDate, endDate }, i) =>
                            <div key={i} className={s.itemContainer}>
                                <div className={s.valueBox}>{value}</div>
                                <p className="">{year}</p>
                                <div className="">
                                    {
                                        month.length && month.map((item, i) => <div key={i}>
                                            <span>{item}</span>
                                        </div>)
                                    }
                                </div>
                                <div className="">
                                    {
                                        day.length && day.map((item, i) => <div key={i}>
                                            <span>{item}</span>
                                        </div>)
                                    }
                                </div>
                                <div className="">
                                    {
                                        hour.length && hour.map((item, i) => <div key={i}>
                                            <span>{item} час</span>
                                        </div>)
                                    }
                                </div>
                                <div className="">
                                    {
                                        timeMonth.length && timeMonth.map((item, i) => <div key={i}>
                                            <span>{item} мин</span>
                                        </div>)
                                    }
                                </div>
                                <div className={s.dateCalendar}>
                                    <span>{startDate} {endDate} число</span>
                                </div>
                            </div>
                        )
                    } */}
                    {
                        <div className={s.itemContainer}>
                            <div className={s.boxText}>{text}</div>
                            <div className={s.infoBox}>
                                <div className={s.itemBox}>{years}</div>
                                <div className={s.itemBox}>{months}</div>
                                <div className={s.itemBox}>{hours}</div>
                                <div className={s.itemBox}>{dayse}</div>
                                <div className={s.itemBox}>{minut}</div>
                                <div className={s.itemBox}>{startDate.getDate()} - {endDate !== null ? endDate.getDate() : ''}</div>

                            </div>
                        </div>
                    }

                </div>

                <div className={s.buttonbox}>
                    <button className={s.saveButton} onClick={handleStorage}>Сохранить дату</button>
                </div>
            </div>
        </div>
    )
}


export default AdminPanel