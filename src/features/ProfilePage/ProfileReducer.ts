import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {profileApi} from '../../api/ProfileApi';
import {handleAsyncServerNetworkError} from '../../utils/ErrorUtils';
import {setAppStatus} from '../../app/AppReducer';
import {successRequest} from '../../utils/SuccessRequest';
import {ChangeProfileDataType} from '../../api/DataTypes';
import {UserType} from '../../api/ResponceTypes';

export const changeProfile = createAsyncThunk<{ profile: UserType }, { changeProfileData: ChangeProfileDataType }, { rejectValue: { error: string | undefined } }>(
  'profile/changeProfile', async (param, ThunkApi) => {
    ThunkApi.dispatch(setAppStatus({status:'loading'}))
    try {
      const res = await profileApi.changeProfile(param.changeProfileData)
      successRequest(ThunkApi)
      return {profile: res.data.updatedUser}
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

  } as UserType,
    tokenDeathTime: 0,
    token: '',
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
