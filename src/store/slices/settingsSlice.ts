import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark" | "system";

interface SettingsState {
  theme: ThemeMode;
}

const initialTheme = (localStorage.getItem("theme") as ThemeMode) || "system";

const initialState: SettingsState = {
  theme: initialTheme,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
