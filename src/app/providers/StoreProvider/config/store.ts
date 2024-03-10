// #store
import { AnyAction, CombinedState, Reducer, configureStore } from '@reduxjs/toolkit';
import { ReducersObject, StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { gamePanelReducer } from '@/widgets/gamePanel';
import { chessPlayReducer } from '@/features/chessPlay';

/**
 * @param children - что мы хотим обернуть в Provider?
 * @param initialState - Состояние стейта по умолчанию. Используется только в тестах и сторибуке.
 * Предназначен для мокания стейта.
 * @param asyncReducers - Редюсеры стора по умолчанию. Используется только в тестах и сторибуке.
 * Предназначен для мокания редюсеров.
 * */
export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersObject) => {
	const rootReducer: ReducersObject = {
		// [rtkApi.reducerPath]: rtkApi.reducer,
		gamePanel: gamePanelReducer,
		chessPlay: chessPlayReducer,
		...asyncReducers,
	};

	const reducerManager = createReducerManager(rootReducer);

	const extraArg: ThunkExtraArg = {};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>, AnyAction>,
		preloadedState: initialState,
		devTools: __IS_DEV__,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}) /* .concat(rtkApi.middleware) */,
	});
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};
