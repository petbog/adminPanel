import { createSlice } from "@reduxjs/toolkit"


const stateLocalStorage = JSON.parse(localStorage.getItem('cron'))
console.log(stateLocalStorage)

const initialState = {
    item: stateLocalStorage ? stateLocalStorage : []
}


export const cronSlice = createSlice({
    name: 'cron',
    initialState,
    reducers: {
        addCron(state, action) {
            state.item = [...state.item, action.payload]
            localStorage.setItem('cron', JSON.stringify(state.item))
        },
        removeTodo(state,action){
            state.item = state.item.filter((item)=> item.id !== action.payload)
            localStorage.setItem('cron', JSON.stringify(state.item))
        }
    }
})

export const { addCron,removeTodo } = cronSlice.actions
export default cronSlice.reducer

export const selectCron = (state) => state.cron