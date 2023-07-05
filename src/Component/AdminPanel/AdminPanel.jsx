import { useEffect, useState } from 'react'
import s from './AdminPanel.module.css'

const AdminPanel = () => {
    const [years, SetYear] = useState('')
    const [months, SetMonth] = useState({})
    const [dayse, SetDay] = useState({})
    const [hours, SetHour] = useState({})
    const [minut, SetMinutes] = useState({})
    const [cron, setCrone] = useState({})
    console.log(cron)

    useEffect(() => {
        setCrone(
            {
                year: years,
                month: months,
                timeMonth: minut,
                day: dayse,
                hour: hours,
            }
        )
    }, [years,months,minut,dayse,hours])
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
                    <p className={s.title}>Ваша дата </p>

                </div>

            </div>
        </div>
    )
}


export default AdminPanel