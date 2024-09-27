import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ILoading {
  value: boolean;
}

const initialState: ILoading = {
  value: false,
};

const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(store, action: PayloadAction<boolean>) {
      store.value = action.payload;
    },
  },
});

export const { setLoading } = loading.actions;
export default loading.reducer;
