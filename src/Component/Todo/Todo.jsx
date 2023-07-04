import { useState } from 'react'
import { Cron } from 'react-js-cron'
import 'react-js-cron/dist/styles.css'

const Todo = () => {
    const [value, setValue] = useState({
        year: '*',
        month: '*',
        timeMonth: '30',
        day: '*',
        hour: '5',
        timeDay: '1,6'
    })
    return (
        <div className="">
            <Cron value={value} setValue={setValue} />
        </div>
    )
}

export default Todo