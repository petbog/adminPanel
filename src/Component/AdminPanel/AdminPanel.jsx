import { useState } from 'react'
import DatePicker from "react-multi-date-picker"
import s from './AdminPanel.module.css'

const AdminPanel = () => {
    const [year, SetYear] = useState('')
    const [month, SetMonth] = useState([])
    const [day, SetDay] = useState([])
    const [hour, SetHour] = useState([])
    const [minutes, SetMinutes] = useState([])
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [values, setValues] = useState([today, tomorrow])
    // console.log(year)
    // console.log(day)
    // console.log(month)
    // console.log(hour)
    // console.log(days)
    const days = values.map((item) => item.day)

    const whenYear = ['Год', 'Месяц', 'День', 'Час']
    const whenMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрю', 'Декабрь']
    const whenDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',]
    const whenHour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const whereMinutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

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
    return (
        <div className={s.admin}>
            <div className={s.container}>
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
                    <p className={s.title}>Выберите месяц</p>
                    <select className={s.monthSelect} multiple name="month" onChange={handleMonth}>
                        {
                            whenMonth.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.day}>
                    <p className={s.title}>Выберите день недели</p>
                    <select className={s.daySelect} multiple name="day" onChange={handleDay}>
                        {
                            whenDay.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.hour}>
                    <p className={s.title}>Выберите час</p>
                    <select className={s.hourSelect} multiple name="hour" onChange={handleHour}>
                        {
                            whenHour.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.minutes}>
                    <p className={s.title}>Выберите минуту</p>
                    <select className={s.minutesSelect} multiple name="minutes" onChange={handleMinutes}>
                        {
                            whereMinutes.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className={s.calendar}>
                    <p className={s.title}>Выберите дату</p>
                    <div className={s.date}>
                        <DatePicker
                            multiple
                            value={values}
                            onChange={setValues}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}


export default AdminPanel