import { configureStore } from '@reduxjs/toolkit'
import cronSlice from './Slice/cronSlice'

export const store = configureStore({
    reducer: {
        cron: cronSlice
    },
})