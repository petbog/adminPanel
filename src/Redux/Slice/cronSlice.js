import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    item: [
        {
            value:'',
            year: '',
            month: [],
            timeMonth: [],
            day: [],
            hour: [],
            startDate: 0,
            endDate: 0
        }
    ]

}


export const cronSlice = createSlice({
    name: 'cron',
    initialState,
    reducers: {
        addCron: (state, action) => {
            state.item = action.payload
        }
    }
})

export const { addCron } = cronSlice.actions
export default cronSlice.reducer

export const selectCron = (state) => state.cron