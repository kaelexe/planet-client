import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export type ThemeMode = "system" | "light" | "dark" | "cosmic";

interface SettingsState {
  theme: ThemeMode;
}

const initialState: SettingsState = {
  theme: (localStorage.getItem("theme") as ThemeMode) || "system",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
