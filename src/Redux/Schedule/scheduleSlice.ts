// app/redux/slices/scheduleSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScheduleItem {
  subject: string;
  teacher: string;
  classroom: string;
  schedules: string[];
}

interface ScheduleState {
  subjects: ScheduleItem[];
}

const initialState: ScheduleState = {
  subjects: [],
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<ScheduleItem>) => {
      state.subjects.push(action.payload);
    },
    removeSubject: (state, action: PayloadAction<number>) => {
      state.subjects.splice(action.payload, 1);
    },
    resetSchedule: (state) => {
      state.subjects = [];
    },
  },
});

export const { addSubject, removeSubject, resetSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;