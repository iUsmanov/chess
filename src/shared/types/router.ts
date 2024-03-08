// #router

import { RouteObject } from 'react-router-dom';

export type AppRoutes =
	| 'main'
	| 'game'
	| 'forbidden'
	// last
	| 'not_found';

export type AppRouteObject = RouteObject; /* & {
	authOnly?: boolean;
	roles?: UserRole[];
}; */
