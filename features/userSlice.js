import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    addUserDetail: (state,action) => {
        state.user = action.payload;     
    },
    editUserDetail: (state, action)=>{
        state.user = {
            ...state ,
            name: action?.payload?.firstName + " " + action?.payload?.lastName,
            email: action?.payload?.email,
            limitCallsMonth: action?.payload?.limitCall
        }
        console.log(state.user)
    }
    
  }
})

// Action creators are generated for each case reducer function
export const { addUserDetail, editUserDetail } = userSlice.actions

export default userSlice.reducer