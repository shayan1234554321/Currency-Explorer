/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currencies: [],
  loading: false,
  currentCurrency: null
};

// export const getAllMissions = createAsyncThunk('Get All Books', async () => {
//   const response = await axios.get('https://api.spacexdata.com/v3/missions');
//   return response.data;
// });

export const counterSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    // SwitchMission: (state, { payload }) => {
    //   const newMissions = [];
    //   payload.missions.forEach((mission) => {
    //     if (mission.mission_id === payload.id) {
    //       newMissions.push({ ...mission, reserved: !mission.reserved });
    //     } else {
    //       newMissions.push(mission);
    //     }
    //   });
    //   return { ...state, missions: newMissions };
    // },
  },
  extraReducers: (builder) => {
    // builder.addCase(getAllMissions.pending, (state) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(getAllMissions.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   missions: payload,
    // }));
  },
});

export const {  } = counterSlice.actions;

export default counterSlice.reducer;