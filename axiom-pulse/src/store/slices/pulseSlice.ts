import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PresetType, SortMethod, TokenFilters } from '@/types/token';

interface PulseState {
  activePreset: PresetType;
  sortingMethod: SortMethod;
  filters: TokenFilters;
}

const initialState: PulseState = {
  activePreset: 'P1',
  sortingMethod: 'time',
  filters: {},
};

const pulseSlice = createSlice({
  name: 'pulse',
  initialState,
  reducers: {
    setActivePreset: (state, action: PayloadAction<PresetType>) => {
      state.activePreset = action.payload;
    },
    setSortingMethod: (state, action: PayloadAction<SortMethod>) => {
      state.sortingMethod = action.payload;
    },
    setFilters: (state, action: PayloadAction<TokenFilters>) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {};
    },
  },
});

export const { setActivePreset, setSortingMethod, setFilters, resetFilters } = pulseSlice.actions;
export default pulseSlice.reducer;
