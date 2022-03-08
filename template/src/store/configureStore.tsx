// Packages
import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';

// Root Reducer
import { rootReducer } from 'store/combineReducers';

// Initial States
import { initialState as initialSampleState } from 'slices/sampleSlice';

const preloadedState = {
	sample: initialSampleState,
};

const defaultMiddleware = getDefaultMiddleware({
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
});

const store = configureStore({
	reducer: rootReducer,
	preloadedState: preloadedState,
	middleware: getDefaultMiddleware =>
		__DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,
});
persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
