import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChangeProfileDataType, UserType} from '../../api/types';
import {profileApi} from '../../api/ProfileApi';
import {handleAsyncServerNetworkError} from '../../utils/ErrorUtils';

export const changeProfile = createAsyncThunk<{ profile: UserType }, { changeProfileData: ChangeProfileDataType }, { rejectValue: { error: string | undefined } }>(
  'profile/changeProfile', async (param, ThunkApi) => {

    try {
      const res = await profileApi.changeProfile(param.changeProfileData)
      console.log(res.data)
      return {profile: res.data}
    } catch (error) {
      return handleAsyncServerNetworkError(error,ThunkApi, true)
    }
  }
)

//state
export const slice = createSlice({
  name: 'profile',
  initialState: {
   user: {
     _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    created: '',
    updated: '',
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: '',
    _v: 0,
    tokenDeathTime: 0,
    token: '',
  } as UserType
  },
  reducers: {
    setProfile(state, action: PayloadAction<UserType >) {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(changeProfile.fulfilled, (state,action) => {
      state.user = action.payload.profile
    })
  }
})

export const profileReducer = slice.reducer
//actions
export const {setProfile} = slice.actions
//type
