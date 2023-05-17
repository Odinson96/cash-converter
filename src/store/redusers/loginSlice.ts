import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILogin {
  name: string;
}

const initialState: ILogin = {
  name: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.name = action.payload;
      localStorage.setItem("user", state.name);
    },
  },
});

export default loginSlice.reducer;
