import { createSlice } from "@reduxjs/toolkit";
import { serviceData } from "../assets/data";

const initialState = { service: serviceData };

const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState: initialState,
  reducers: {},
});

export const serviceSelector = (state) => state.service.service;

export default serviceSlice.reducer;
