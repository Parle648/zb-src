import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IDeal {
  id: string;
  title: string;
  days_left: number;
  sold: number;
  yield: number;
  tiket_cost: number;
  amount_cost: number;
  bacground: string;
}

interface IDeals {
  value: IDeal[];
}

const initialState: IDeals = {
  value: [],
};

const deals = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    setDeals(store, action: PayloadAction<IDeal[]>) {
      store.value = action.payload;
    },
  },
});

export default deals.reducer;
export const { setDeals } = deals.actions;
