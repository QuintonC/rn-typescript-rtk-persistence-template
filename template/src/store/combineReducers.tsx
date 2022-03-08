import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reducers below.
import { sampleSlice } from 'slices';

// Interfaces
import { IState as ISampleSlice } from 'slices/sampleSlice';

interface IAppState {
	sample: ISampleSlice;
}

// Persistence Configuration
const samplePersist = {
	key: 'sample',
	storage: AsyncStorage,
	blacklist: [],
};

export const rootReducer = combineReducers<IAppState>({
	sample: persistReducer(samplePersist, sampleSlice),
});

export type RootState = ReturnType<typeof rootReducer>;
