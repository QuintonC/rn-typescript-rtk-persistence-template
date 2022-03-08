// Packages
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
	object: {
		id: string;
		value: string;
		anotherValue: string;
	};
	_persist: any;
}

export const initialState: IState = {
	object: { id: '', value: '', anotherValue: '' },
	_persist: '',
};

export const sampleSlice = createSlice({
	name: 'sample',
	initialState: initialState,
	reducers: {
		setObjectData: (state, action: PayloadAction<typeof state.object>) => {
			state.object = action.payload;
		},
		updateObjectValue: (
			state,
			action: PayloadAction<Partial<typeof state.object>>,
		) => {
			state.object = { ...state.object, ...action.payload };
		},
		resetReducer: state => {
			state = initialState;
		},
	},
});

export const { setObjectData, updateObjectValue, resetReducer } =
	sampleSlice.actions;

export default sampleSlice.reducer;
