import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: { menuIsOpen: false },
    reducers: {
        toggle(state) {
            state.menuIsOpen = !state.menuIsOpen
        }
    }
})

export const menuActions = menuSlice.actions

export default menuSlice