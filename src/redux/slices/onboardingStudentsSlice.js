// Create a slice

// // eslint-disable-next-line @typescript-eslint/no-require-imports
// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  formData: {}, 
};
const onboardingStudentsSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});
export const { setCurrentStep, updateFormData} =
  onboardingStudentsSlice.actions;
export default onboardingStudentsSlice.reducer;
