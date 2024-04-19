import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getFiguresLocations } from '../getFiguresLocations/getFiguresLocations';

export const getFigureAtLocation = createSelector(
	getFiguresLocations,
	(state: StateSchema, key: string) => key,
	(locations, key) => locations[key] || undefined
);
