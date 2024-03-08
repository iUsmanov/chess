import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getChessLocations } from '../getChessLocations/getChessLocations';

export const getChessAtLocation = createSelector(
	getChessLocations,
	(state: StateSchema, key: string) => key,
	(locations, key) => locations[key] // udefined
);
