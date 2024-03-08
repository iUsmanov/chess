// #store
import { AnyAction, Reducer, combineReducers } from '@reduxjs/toolkit';
import { ReducerManager, ReducersObject, StateSchema, StateSchemaKey } from './StateSchema';

/**
 * Функция createReducerManager создаёт редюсер-менеджер.
 * Он нужен нам для того, чтобы динамически добавлять и удалять редюсеры,
 * а не свалить всю логику в bundle. Подробнее можно смотреть в документации редакс.
 *
 * @param getReducerMap возвращает нам текущие редюсеры.
 * @param reduce возвращает нам корневой редюсер.
 * @param add служит для добавления редюсера в store.
 * @param remove служит для удаления редюсера в store.
 */

export function createReducerManager(initialReducers: ReducersObject): ReducerManager {
	const reducers = { ...initialReducers };
	let combinedReducer = combineReducers(reducers);
	let keysToRemove: StateSchemaKey[] = [];

	return {
		getReducerMap: () => reducers,

		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
				for (const key of keysToRemove) {
					// @ts-ignore
					delete state[key];
				}
				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},

		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}

			// @ts-ignore
			reducers[key] = reducer;
			combinedReducer = combineReducers(reducers);
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}

			// @ts-ignore
			delete reducers[key];
			keysToRemove.push(key);
			combinedReducer = combineReducers(reducers);
		},
	};
}

/* 

import { AnyAction, Reducer, ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(
	initialReducers: ReducersMapObject<StateSchema, AnyAction>
): ReducerManager {
	const reducers = { ...initialReducers };
	let combinedReducer = combineReducers(reducers);
	let keysToRemove: StateSchemaKey[] = [];

	return {
		getReducerMap: () => reducers,

		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
				for (const key of keysToRemove) {
					delete state[key];
				}
				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},

		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}

			reducers[key] = reducer;
			combinedReducer = combineReducers(reducers);
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}

			delete reducers[key];
			keysToRemove.push(key);
			combinedReducer = combineReducers(reducers);
		},
	};
}


*/
